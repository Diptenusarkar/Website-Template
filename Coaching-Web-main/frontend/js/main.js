// --- Fetch Notifications ---
document.addEventListener('DOMContentLoaded', function() {
    const list = document.getElementById('notification-list');
    if (list) {
        const refreshBtn = document.getElementById('refresh-notifications');
        async function loadNotifications() {
            try {
                const res = await fetch('http://localhost:5000/api/notifications');
                const notifications = await res.json();
                list.innerHTML = '';
                if (notifications.length === 0) {
                    list.innerHTML = '<li style="text-align:center; color:#888;">No notifications yet.</li>';
                } else {
                    notifications.forEach((notif, idx) => {
                        const li = document.createElement('li');
                        li.innerHTML = `
                          <div class="notification-message">
                            <strong>${notif.title}</strong>
                            <div>${notif.message}</div>
                            <small>${new Date(notif.created_at).toLocaleString()}</small>
                          </div>
                        `;
                        li.style.animationDelay = (0.1 * (idx + 1)) + 's';
                        list.appendChild(li);
                    });
                }
            } catch (e) {
                list.innerHTML = '<li style="color:#c00;">Unable to load notifications.</li>';
            }
        }
        loadNotifications();
        setInterval(loadNotifications, 5000);
        if (refreshBtn) {
            refreshBtn.addEventListener('click', loadNotifications);
        }
    }
});

// --- Scroll Animations ---
function animateOnScroll() {
    const elements = document.querySelectorAll('.courses, .testimonials, .contact, .course-card, .testimonial-card');
    const triggerBottom = window.innerHeight * 0.85;
    elements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add('in-view');
        }
    });
}
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('DOMContentLoaded', animateOnScroll);

// --- Button Hover (extra effect) ---
document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('mousemove', e => {
        btn.style.transform = 'scale(1.06)';
    });
    btn.addEventListener('mouseleave', e => {
        btn.style.transform = '';
    });
});

// --- Admission Inquiry Form ---
const admissionForm = document.getElementById('admission-form');
if (admissionForm) {
    admissionForm.addEventListener('submit', async function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const data = Object.fromEntries(formData.entries());
        try {
            const res = await fetch('http://localhost:5000/api/inquire', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            });
            const result = await res.json();
            if (result.success) {
                document.getElementById('admission-success').style.display = 'block';
                this.reset();
                setTimeout(() => {
                    document.getElementById('admission-success').style.display = 'none';
                }, 4000);
            } else {
                alert(result.error || 'Submission failed.');
            }
        } catch (err) {
            alert('Could not submit inquiry. Please try again later.');
        }
    });
}

// --- For true real-time updates, consider using WebSockets (Flask-SocketIO) ---
// This would require backend and frontend changes and is more advanced.

// --- Modal Admission Inquiry ---
document.addEventListener('DOMContentLoaded', function() {
    // Modal logic
    function openModal() {
        const modal = document.getElementById('admission-modal');
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            console.log('Modal opened');
        }
    }
    function closeModal() {
        const modal = document.getElementById('admission-modal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = '';
            console.log('Modal closed');
        }
    }

    // Open modal on any button/link with #open-admission-modal or .nav-admission-btn
    document.body.addEventListener('click', function(e) {
        if (e.target && (e.target.id === 'open-admission-modal' || e.target.classList.contains('nav-admission-btn'))) {
            e.preventDefault();
            openModal();
        }
        if (e.target && e.target.id === 'close-admission-modal') {
            closeModal();
        }
    });

    // Only add this event listener if the modal exists
    var modal = document.getElementById('admission-modal');
    if (modal) {
        modal.addEventListener('click', function(event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
});

// --- Fetch and Render Courses ---
async function loadCourses() {
    const container = document.getElementById('course-list-dynamic');
    if (!container) return;
    try {
        const res = await fetch('http://localhost:5000/api/courses?_=' + Date.now()); // cache-busting
        const courses = await res.json();
        console.log('Fetched courses:', courses); // DEBUG
        if (!courses.length) {
            container.innerHTML = '<div style="text-align:center;color:#888;">No courses available.</div>';
            return;
        }
        container.innerHTML = '';
        courses.forEach(course => {
            console.log('Course image_url:', course.image_url); // DEBUG
            const card = document.createElement('div');
            card.className = 'course-card';
            card.innerHTML = `
                <div class="course-icon">
                    ${course.image_url ? `<img src="${course.image_url}" alt="Course Image" onerror="this.onerror=null;this.src='https://via.placeholder.com/60x60?text=No+Image';">` : '<img src="https://via.placeholder.com/60x60?text=No+Image" alt="No Image">'}
                </div>
                <h3>${course.title}</h3>
                <p class="course-description">${course.description}</p>
                <div class="course-details">
                    <div class="course-info">
                        <span><strong>Duration:</strong> ${course.duration}</span>
                        <span><strong>Level:</strong> ${course.level}</span>
                        <span><strong>Schedule:</strong> ${course.schedule}</span>
                    </div>
                    <div class="course-price">
                        <span class="price">${course.price}</span>
                    </div>
                </div>
                <button class="cta-btn course-enroll-btn" onclick="enrollCourse('${course.title.replace(/'/g, '\'')}')">Enroll Now</button>
            `;
            container.appendChild(card);
        });
    } catch (e) {
        console.error('Error loading courses:', e); // DEBUG
        container.innerHTML = '<div style="color:#c00;">Unable to load courses.</div>';
    }
}
window.addEventListener('DOMContentLoaded', loadCourses);

// --- Fetch and Render Featured Courses Preview ---
async function loadFeaturedCourses() {
    const container = document.getElementById('featured-courses-list');
    if (!container) return;
    try {
        const res = await fetch('http://localhost:5000/api/courses?_=' + Date.now()); // cache-busting
        const courses = await res.json();
        if (!courses.length) {
            container.innerHTML = '<div style="text-align:center;color:#888;">No courses available.</div>';
            return;
        }
        container.innerHTML = '';
        courses.slice(0, 3).forEach(course => {
            const card = document.createElement('div');
            card.className = 'featured-course-card';
            card.innerHTML = `
                <div class="course-icon">
                    ${course.image_url ? `<img src="${course.image_url}" alt="Course Image" onerror="this.onerror=null;this.src='https://via.placeholder.com/60x60?text=No+Image';" style="width:60px;height:60px;border-radius:8px;">` : '<img src="https://via.placeholder.com/60x60?text=No+Image" alt="No Image" style="width:60px;height:60px;border-radius:8px;">'}
                </div>
                <h4>${course.title}</h4>
                <p>${course.description}</p>
                <div class="price">${course.price}</div>
            `;
            container.appendChild(card);
        });
    } catch (e) {
        container.innerHTML = '<div style="color:#c00;">Unable to load courses.</div>';
    }
}
window.addEventListener('DOMContentLoaded', loadFeaturedCourses); 