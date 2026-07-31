# 🚀 AI Social Media Scheduler

An AI-powered social media management platform built with the **MERN Stack** that enables users to generate AI content, create AI-generated images, connect multiple social media accounts through OAuth, and schedule posts—all from a single dashboard.

## 🌐 Live Demo

https://social-three-zeta.vercel.app/

## 📂 GitHub Repository

https://github.com/crispyegg/Social

---

# 📖 Overview

Managing multiple social media accounts can be time-consuming. This project simplifies the workflow by combining:

* AI-powered content generation
* AI image generation
* Social media account management
* Scheduled publishing
* Secure OAuth authentication

Users can generate captions, create images, connect their social accounts, and schedule posts without switching between multiple applications.

---

# ✨ Features

## 🤖 AI Content Generation

* Generate engaging social media captions
* Multiple writing tones
* AI-generated hashtags
* Powered by Google Gemini AI

---

## 🎨 AI Image Generation

* Generate images from text prompts
* Powered by Hugging Face FLUX.1 Schnell
* Automatically uploads generated images to Cloudinary

---

## 🔐 OAuth-based Social Media Authentication

Securely connect and manage multiple social media platforms:

* LinkedIn
* Facebook
* Instagram
* X (Twitter)

---

## 📅 Smart Scheduling

* Schedule posts for future publishing
* Select multiple platforms
* Date & time scheduling
* Automatic publishing using Node Cron

---

## ☁️ Media Management

* Upload images and videos
* Cloudinary integration
* Secure media storage

---

## 📊 Dashboard

* Connected accounts
* AI-generated content history
* Scheduled posts
* Account status tracking

---

## 🔒 Authentication

* JWT Authentication
* Protected Routes
* Secure REST APIs

---

# 🛠️ Tech Stack

## Frontend

* React.js
* TypeScript
* Vite
* Tailwind CSS
* Axios
* React Router
* React Hot Toast

---

## Backend

* Node.js
* Express.js
* TypeScript
* MongoDB Atlas
* Mongoose
* JWT Authentication
* Multer
* Node Cron

---

## AI & Third-party Services

* Google Gemini API
* Hugging Face Inference API
* Cloudinary
* Zernio API

---

## Deployment

**Frontend**

* Vercel

**Backend**

* Render

**Database**

* MongoDB Atlas

---

# 🏗️ Project Architecture

```text
React (Frontend)
       │
       ▼
Express REST API
       │
       ├── JWT Authentication
       ├── MongoDB Atlas
       ├── Google Gemini API
       ├── Hugging Face API
       ├── Cloudinary
       ├── Zernio OAuth API
       └── Node Cron Scheduler
```

---

# 📱 Supported Platforms

* ✅ LinkedIn
* ✅ Facebook
* ✅ Instagram
* ✅ X (Twitter)

---

# ⚙️ Installation

## Clone the Repository

```bash
git clone https://github.com/crispyegg/Social.git
```

## Navigate to the Project

```bash
cd Social
```

## Install Dependencies

Frontend

```bash
cd client
npm install
```

Backend

```bash
cd server
npm install
```

---

# 🔑 Environment Variables

### Backend (.env)

```env
PORT=

MONGODB_URI=

JWT_SECRET=

GEMINI_API_KEY=

HUGGINGFACE_API_KEY=

CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

ZERNIO_API_KEY=
```

### Frontend (.env)

```env
VITE_API_BASE_URL=
```

---

# ▶️ Run the Project

Backend

```bash
npm run server
```

Frontend

```bash
npm run dev
```

---

# 📚 What I Learned

This project helped me gain practical experience with:

* Building a production-ready MERN application
* OAuth authentication workflows
* AI-powered text generation
* AI image generation
* Cloudinary media management
* Background job scheduling using Node Cron
* REST API development
* MongoDB data modeling
* Full-stack deployment
* Third-party API integrations
* Production debugging

---

# 🚀 Future Improvements

* AI-powered content optimization
* Social media analytics dashboard
* Team collaboration
* Draft management
* Calendar view
* Email notifications
* Dark mode
* Drag-and-drop media uploads

---

# 👨‍💻 Author

**Asif Siraj Khan**

**GitHub**
https://github.com/crispyegg

**LinkedIn**
https://linkedin.com/in/asif-siraj-khan-679836190

**Portfolio**
https://my-portfolio-six-henna-47.vercel.app/

---

# ⭐ Support

If you found this project helpful, consider giving it a ⭐ on GitHub.

Feedback, suggestions, and contributions are always welcome!
