# Coaching Center Website

A modern, responsive website for a coaching center with course management, contact information, and Google Maps integration.

## Features

- **Home Page**: Hero section with notifications and admission inquiry modal
- **Courses Page**: Comprehensive course listings with enrollment functionality
- **Contact Page**: Contact information, Google Maps integration, and contact form
- **Responsive Design**: Mobile-friendly interface with modern UI/UX
- **Admin Panel**: Backend management for notifications and inquiries

## Pages

### 1. Home Page (`index.html`)
- Hero banner with call-to-action
- Real-time notifications display
- Admission inquiry modal
- Responsive navigation

### 2. Courses Page (`courses.html`)
- 6 comprehensive courses with detailed information
- Course pricing and duration
- Enrollment modal for each course
- Interactive course cards with icons

### 3. Contact Page (`contact.html`)
- Contact information (phone, email, address)
- Google Maps integration showing center location
- Working hours display
- Contact form for inquiries

## Setup Instructions

### 1. Google Maps API Setup

To enable the Google Maps functionality on the contact page:

1. **Get a Google Maps API Key**:
   - Go to [Google Cloud Console](https://console.cloud.google.com/)
   - Create a new project or select an existing one
   - Enable the "Maps JavaScript API"
   - Create credentials (API Key)

2. **Replace the API Key**:
   - Open `frontend/contact.html`
   - Find the line: `src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap"`
   - Replace `YOUR_GOOGLE_MAPS_API_KEY` with your actual API key

3. **Optional**: Restrict the API key to your domain for security

### 2. Backend Setup

1. **Install Python dependencies**:
   ```bash
   cd backend
   pip install -r requirements.txt
   ```

2. **Run the Flask application**:
   ```bash
   python app.py
   ```

3. **Access the admin panel**:
   - Go to `http://localhost:5000/admin`
   - Default credentials: admin/admin

### 3. Frontend Setup

1. **Open the website**:
   - Navigate to `frontend/index.html` in your browser
   - Or serve the frontend folder using a local server

2. **Test all pages**:
   - Home page with notifications
   - Courses page with enrollment
   - Contact page with map and form

## Course Information

The website includes the following courses:

1. **Advanced Mathematics** - ₹15,000 (6 months)
2. **Physics Excellence** - ₹18,000 (8 months)
3. **Chemistry Mastery** - ₹16,500 (7 months)
4. **Biology Fundamentals** - ₹14,000 (6 months)
5. **Computer Science & Programming** - ₹22,000 (10 months)
6. **English Language & Literature** - ₹12,000 (5 months)

## Contact Information

- **Phone**: +91 98765 43210, +91 98765 43211
- **Email**: info@coachingcenter.com, admissions@coachingcenter.com
- **Address**: 49/1, Nirmal Sen Gupta Sarani Rd, Italgacha, Dum Dum, Kolkata, West Bengal 700079, India
- **Working Hours**: 
  - Monday - Friday: 8:00 AM - 8:00 PM
  - Saturday: 9:00 AM - 6:00 PM
  - Sunday: 10:00 AM - 4:00 PM

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Python Flask
- **Database**: SQLite
- **Maps**: Google Maps JavaScript API
- **Icons**: Icons8
- **Fonts**: Google Fonts (Montserrat)

## File Structure

```
Center/
├── backend/
│   ├── app.py
│   ├── notifications.db
│   ├── requirements.txt
│   └── templates/
│       ├── admin_inquiries.html
│       ├── admin.html
│       ├── edit_notification.html
│       └── login.html
├── frontend/
│   ├── css/
│   │   └── style.css
│   ├── index.html
│   ├── courses.html
│   ├── contact.html
│   └── js/
│       └── main.js
└── README.md
```

## Customization

- **Colors**: Update the CSS variables in `style.css` to match your brand colors
- **Content**: Modify course information, contact details, and other content in the HTML files
- **Location**: Update the Google Maps coordinates in `contact.html` to show your actual location
- **Styling**: Customize the design by modifying the CSS styles

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This project is for educational purposes. Feel free to modify and use for your coaching center. 