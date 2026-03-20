# MediBook — Auth System

## Project Structure

```
src/
├── App.jsx                   ← Main app + role-based routing
├── context/
│   └── AuthContext.js        ← Global auth state (login/logout/user)
├── pages/
│   ├── Login.jsx             ← Login page
│   ├── Register.jsx          ← Patient registration page
│   ├── PatientDashboard.jsx  ← Patient dashboard
│   ├── DoctorDashboard.jsx   ← Doctor dashboard
│   └── AdminDashboard.jsx    ← Admin dashboard
└── styles/
    ├── auth.css              ← Login & Register styles
    └── dashboard.css         ← Dashboard styles
```

## Setup

```bash
npx create-react-app medibook
cd medibook
# Copy all files into src/
npm start
```

## Demo Credentials

| Role    | Email              | Password |
|---------|--------------------|----------|
| Patient | patient@demo.com   | 1234     |
| Doctor  | doctor@demo.com    | 1234     |
| Admin   | admin@demo.com     | 1234     |

## How Role-Based Routing Works

1. User logs in → `login()` sets user in AuthContext with `{ name, email, role }`
2. `App.jsx` checks `user.role` and renders the correct dashboard
3. Each dashboard has logout via `AuthContext`
4. New patient registers → automatically assigned `role: "patient"`

## Next Steps (per your workflow)

- [ ] Connect to real backend API (replace mock users in Login.jsx)
- [ ] Build: Find Doctors page (Patient)
- [ ] Build: Book Appointment page (Patient)
- [ ] Build: Set Availability page (Doctor)
- [ ] Build: Approve/Reject Appointments (Doctor)
- [ ] Build: Manage Hospitals/Doctors (Admin)
