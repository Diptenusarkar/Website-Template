from flask import Flask, render_template, request, redirect, url_for, session, jsonify, send_from_directory
from flask import flash
import sqlite3
import os
from werkzeug.security import generate_password_hash, check_password_hash
from flask_cors import CORS
import uuid
from werkzeug.utils import secure_filename

app = Flask(__name__)
CORS(app)
app.secret_key = 'your_secret_key_here'  # Change this in production
DATABASE = 'notifications.db'

UPLOAD_FOLDER = os.path.join(os.path.dirname(__file__), 'static', 'course_images')
os.makedirs(UPLOAD_FOLDER, exist_ok=True)
app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER
ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg', 'gif'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

# --- Database Setup ---
def get_db():
    conn = sqlite3.connect(DATABASE)
    conn.row_factory = sqlite3.Row
    return conn

def init_db():
    with get_db() as db:
        db.execute('''CREATE TABLE IF NOT EXISTS notifications (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )''')
        db.execute('''CREATE TABLE IF NOT EXISTS admin (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL
        )''')
        db.execute('''CREATE TABLE IF NOT EXISTS courses (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT NOT NULL,
            price TEXT NOT NULL,
            duration TEXT NOT NULL,
            level TEXT NOT NULL,
            schedule TEXT NOT NULL,
            image_file TEXT,
            image_url TEXT
        )''')
        # Create default admin if not exists
        cur = db.execute('SELECT * FROM admin WHERE username = ?', ('admin',))
        if not cur.fetchone():
            db.execute('INSERT INTO admin (username, password_hash) VALUES (?, ?)',
                       ('admin', generate_password_hash('admin123')))

# --- Routes ---
@app.route('/')
def root():
    frontend_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../frontend'))
    return send_from_directory(frontend_dir, 'index.html')

@app.route('/admin/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        db = get_db()
        user = db.execute('SELECT * FROM admin WHERE username = ?', (username,)).fetchone()
        if user and check_password_hash(user['password_hash'], password):
            session['admin'] = username
            return redirect(url_for('admin_panel'))
        else:
            flash('Invalid credentials', 'danger')
    return render_template('login.html')

@app.route('/admin/logout')
def logout():
    session.pop('admin', None)
    return redirect(url_for('login'))

@app.route('/admin', methods=['GET', 'POST'])
def admin_panel():
    if 'admin' not in session:
        return redirect(url_for('login'))
    db = get_db()
    # Handle notification post
    if request.method == 'POST' and 'title' in request.form and 'message' in request.form:
        title = request.form['title']
        message = request.form['message']
        db.execute('INSERT INTO notifications (title, message) VALUES (?, ?)', (title, message))
        db.commit()
        flash('Notification posted!', 'success')
    notifications = db.execute('SELECT * FROM notifications ORDER BY created_at DESC').fetchall()
    courses = db.execute('SELECT * FROM courses ORDER BY id DESC').fetchall()
    return render_template('admin.html', notifications=notifications, courses=courses)

@app.route('/admin/edit/<int:notif_id>', methods=['GET', 'POST'])
def edit_notification(notif_id):
    if 'admin' not in session:
        return redirect(url_for('login'))
    db = get_db()
    notif = db.execute('SELECT * FROM notifications WHERE id = ?', (notif_id,)).fetchone()
    if request.method == 'POST':
        title = request.form['title']
        message = request.form['message']
        db.execute('UPDATE notifications SET title = ?, message = ? WHERE id = ?', (title, message, notif_id))
        db.commit()
        flash('Notification updated!', 'success')
        return redirect(url_for('admin_panel'))
    return render_template('edit_notification.html', notif=notif)

@app.route('/admin/delete/<int:notif_id>', methods=['POST'])
def delete_notification(notif_id):
    if 'admin' not in session:
        return redirect(url_for('login'))
    db = get_db()
    db.execute('DELETE FROM notifications WHERE id = ?', (notif_id,))
    db.commit()
    flash('Notification deleted!', 'success')
    return redirect(url_for('admin_panel'))

# --- API Endpoint for Frontend ---
@app.route('/api/notifications')
def api_notifications():
    db = get_db()
    notifications = db.execute('SELECT * FROM notifications ORDER BY created_at DESC LIMIT 5').fetchall()
    notif_list = [dict(id=row['id'], title=row['title'], message=row['message'], created_at=row['created_at']) for row in notifications]
    return jsonify(notif_list)

@app.route('/admin/courses/add', methods=['POST'])
def add_course():
    if 'admin' not in session:
        return redirect(url_for('login'))
    db = get_db()
    title = request.form['course_title']
    description = request.form['course_description']
    price = request.form['course_price']
    duration = request.form['course_duration']
    level = request.form['course_level']
    schedule = request.form['course_schedule']
    image_url = request.form.get('course_image_url', '')
    image_file = None
    if 'course_image_file' in request.files:
        file = request.files['course_image_file']
        if file and allowed_file(file.filename):
            filename = secure_filename(str(uuid.uuid4()) + '_' + file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            image_file = filename
    db.execute('''INSERT INTO courses (title, description, price, duration, level, schedule, image_file, image_url)
                 VALUES (?, ?, ?, ?, ?, ?, ?, ?)''',
               (title, description, price, duration, level, schedule, image_file, image_url))
    db.commit()
    flash('Course added!', 'success')
    return redirect(url_for('admin_panel'))

@app.route('/admin/courses/edit/<int:course_id>', methods=['GET', 'POST'])
def edit_course(course_id):
    if 'admin' not in session:
        return redirect(url_for('login'))
    db = get_db()
    course = db.execute('SELECT * FROM courses WHERE id = ?', (course_id,)).fetchone()
    if request.method == 'POST':
        title = request.form['course_title']
        description = request.form['course_description']
        price = request.form['course_price']
        duration = request.form['course_duration']
        level = request.form['course_level']
        schedule = request.form['course_schedule']
        image_url = request.form.get('course_image_url', '')
        image_file = course['image_file']
        if 'course_image_file' in request.files:
            file = request.files['course_image_file']
            if file and allowed_file(file.filename):
                filename = secure_filename(str(uuid.uuid4()) + '_' + file.filename)
                file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
                image_file = filename
        db.execute('''UPDATE courses SET title=?, description=?, price=?, duration=?, level=?, schedule=?, image_file=?, image_url=? WHERE id=?''',
                   (title, description, price, duration, level, schedule, image_file, image_url, course_id))
        db.commit()
        flash('Course updated!', 'success')
        return redirect(url_for('admin_panel'))
    return render_template('edit_course.html', course=course)

@app.route('/admin/courses/delete/<int:course_id>', methods=['POST'])
def delete_course(course_id):
    if 'admin' not in session:
        return redirect(url_for('login'))
    db = get_db()
    db.execute('DELETE FROM courses WHERE id = ?', (course_id,))
    db.commit()
    flash('Course deleted!', 'success')
    return redirect(url_for('admin_panel'))

@app.route('/api/courses')
def api_courses():
    db = get_db()
    courses = db.execute('SELECT * FROM courses ORDER BY id DESC').fetchall()
    course_list = []
    for row in courses:
        image_url = row['image_url']
        if row['image_file']:
            # Build the full URL for the uploaded image
            image_url = url_for('static', filename=f'course_images/{row["image_file"]}', _external=True)
        course_list.append({
            'id': row['id'],
            'title': row['title'],
            'description': row['description'],
            'price': row['price'],
            'duration': row['duration'],
            'level': row['level'],
            'schedule': row['schedule'],
            'image_url': image_url
        })
    return jsonify(course_list)

# Serve static files from the frontend directory
@app.route('/<path:path>')
def static_proxy(path):
    frontend_dir = os.path.abspath(os.path.join(os.path.dirname(__file__), '../frontend'))
    if os.path.exists(os.path.join(frontend_dir, path)):
        return send_from_directory(frontend_dir, path)
    else:
        # Fallback: serve index.html for unknown routes (SPA support)
        return send_from_directory(frontend_dir, 'index.html')

if __name__ == '__main__':
    init_db()
    app.run(debug=True) 