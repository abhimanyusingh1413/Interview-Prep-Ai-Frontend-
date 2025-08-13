# Interview-Prep-AI 🎯
[![Live Demo](https://img.shields.io/badge/Live_Demo-InterviewPrepAI-green?style=for-the-badge&logo=vercel)](https://interviewprepai-1.vercel.app/)
An intelligent interview preparation platform powered by AI that helps candidates practice and prepare for technical interviews with personalized questions and detailed explanations.

![Interview-Prep-AI](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## ✨ Features

- **🤖 AI-Powered Question Generation**: Get personalized interview questions using Google's Gemini AI
- **👤 User Authentication**: Secure login and registration system
- **📋 Session Management**: Create and manage interview preparation sessions
- **🎯 Role-Based Questions**: Questions tailored to specific job roles and experience levels
- **💡 Detailed Explanations**: Get comprehensive explanations for interview questions
- **📊 Progress Tracking**: Track your preparation sessions and progress
- **📱 Responsive Design**: Beautiful, modern UI that works on all devices
- **🖼️ Profile Management**: Upload and manage your profile picture

## 🛠️ Tech Stack

### Frontend
- **React 19** - Modern UI library with hooks
- **Vite** - Fast build tool and development server
- **TailwindCSS** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **Framer Motion** - Animation library
- **React Hot Toast** - Toast notifications
- **React Icons** - Icon library
- **React Markdown** - Markdown rendering

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **Multer** - File upload handling
- **Google Gemini AI** - AI-powered question generation
- **CORS** - Cross-origin resource sharing

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- MongoDB (local or cloud)
- Google Gemini API key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Interview-Prep-AI.git
   cd Interview-Prep-AI
   ```

2. **Set up the Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Set up the Frontend**
   ```bash
   cd frontend/interview-pre-ai
   npm install
   ```

4. **Environment Variables**
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/interview-prep-ai
   JWT_SECRET=your_jwt_secret_key
   GEMINI_API_KEY=your_google_gemini_api_key
   ```

5. **Start the Development Servers**
   
   Backend (from backend directory):
   ```bash
   npm run dev
   ```
   
   Frontend (from frontend/interview-pre-ai directory):
   ```bash
   npm run dev
   ```

6. **Access the Application**
   - Frontend: http://localhost:5173
   - Backend API: http://localhost:5000

## 📁 Project Structure

```
Interview-Prep-AI/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database configuration
│   ├── controllers/
│   │   ├── aiController.js       # AI question generation
│   │   ├── authController.js     # Authentication logic
│   │   ├── questionController.js # Question management
│   │   └── sessionController.js  # Session management
│   ├── middlewares/
│   │   ├── authMiddleware.js     # JWT authentication
│   │   └── uploadMiddleware.js   # File upload handling
│   ├── models/
│   │   ├── Question.js           # Question schema
│   │   ├── Session.js            # Session schema
│   │   └── User.js               # User schema
│   ├── routes/
│   │   ├── authRoutes.js         # Authentication routes
│   │   ├── questionRoutes.js     # Question routes
│   │   └── sessionRoutes.js      # Session routes
│   ├── utils/
│   │   └── prompts.js            # AI prompts configuration
│   └── server.js                 # Express server setup
├── frontend/interview-pre-ai/
│   ├── src/
│   │   ├── components/           # Reusable UI components
│   │   ├── context/              # React context providers
│   │   ├── pages/                # Application pages
│   │   └── utils/                # Utility functions
│   └── public/                   # Static assets
└── README.md
```

## 🔑 API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/login` - User login

### Sessions
- `GET /api/sessions` - Get user sessions
- `POST /api/sessions` - Create new session
- `DELETE /api/sessions/:id` - Delete session

### Questions
- `GET /api/questions/:sessionId` - Get session questions
- `POST /api/questions` - Create new question

### AI Features
- `POST /api/ai/generate-questions` - Generate interview questions
- `POST /api/ai/generate-explanation` - Get question explanations

## 🎨 UI Components

- **ProfileInfoCard** - Display user profile information
- **QuestionCard** - Display interview questions
- **SummaryCard** - Show session summaries
- **Modal** - Reusable modal component
- **Drawer** - Side navigation drawer
- **SkeletonLoader** - Loading state component
- **SpinnerLoader** - Loading spinner

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS v4 with custom configuration for modern styling.

### Vite Configuration
Optimized build configuration with React plugin and fast refresh.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- Google Gemini AI for intelligent question generation
- React team for the amazing framework
- TailwindCSS for the utility-first CSS framework
- MongoDB for the flexible database solution

## 📞 Support

If you have any questions or need help, please open an issue on GitHub or contact the development team.

---

**Happy Interview Preparation! 🚀**

