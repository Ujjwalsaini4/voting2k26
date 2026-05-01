# India Election Guide 🗳️🇮🇳

A modern, interactive, and accessible web application designed to educate citizens about the Indian electoral process. Built with a focus on premium UI/UX, accessibility, and cloud-native scalability.

## 📖 Project Overview
The **India Election Guide** is a one-stop platform for voters to understand their democratic rights and responsibilities. From checking eligibility to understanding how an EVM works, the app provides a simplified, step-by-step journey through the world's largest democratic exercise.

### 🚩 Problem Statement
The Indian electoral process, while robust, can be complex for first-time voters or citizens unfamiliar with evolving technologies like VVPAT and NOTA. Information is often scattered across multiple portals, leading to confusion. This project aims to bridge that gap by providing a **unified, beginner-friendly, and highly accessible** guide.

## ✨ Key Features
- **AI-Powered Assistant**: A conversational interface that answers specific questions about voting, EVMs, and eligibility.
- **Interactive Timeline**: A visual step-by-step walkthrough of the election phases, from announcement to government formation.
- **Voter's Handbook**: A concise guide on registration, polling booth procedures, and valid ID documents.
- **FAQ Accordion**: Quick answers to common myths and technical questions.
- **Premium Aesthetics**: A responsive, mobile-first design featuring a state-of-the-art Dark Mode and smooth micro-animations.
- **Accessibility First**: Fully WCAG 2.1 AA compliant, supporting screen readers and keyboard-only navigation.

## 🛠️ Tech Stack
- **Frontend**: React 19, Vite, Vanilla CSS
- **Icons**: Lucide React
- **Testing**: Vitest, React Testing Library
- **Cloud Backend**: Google Cloud / Firebase
- **Deployment**: Firebase Hosting

## ☁️ Google Cloud Services
This project leverages the **Google Cloud / Firebase** ecosystem for a secure and scalable backend:
- **Firebase Authentication**: Anonymous login to identify unique sessions without compromising user privacy.
- **Cloud Firestore**: Real-time NoSQL database to store user chat queries.
- **Cloud Functions**: Serverless backend to handle AI logic.
- **Firebase Analytics**: Tracking user engagement events.

## 🏛️ Architecture Explanation
The application follows a **Decoupled Frontend-as-a-Service** architecture:
1.  **Client Layer**: A React SPA handling UI and user interaction.
2.  **Logic Layer (Edge)**: Firebase Functions for processing chat requests.
3.  **Data Layer**: Firestore for persistent logs.

## 🚀 How to Run the Project

### Prerequisites
- Node.js (v18+)
- npm

### Installation
1. Clone the repository:
```bash
git clone https://github.com/your-username/voting2k26.git
cd voting2k26
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
- Create a `.env` file in the root directory.
- Copy the contents from `.env.example` and fill in your Firebase credentials.

### Development
```bash
npm run dev
```

### Testing
```bash
npm test
```

## 📸 Screenshots
*(Coming Soon)*
![Landing Page Placeholder](https://via.placeholder.com/800x450?text=India+Election+Guide+Home)

---
Developed with ❤️ for the Indian Voter.
