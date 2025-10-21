#Raccoon 🦝 - Real-Time Chat Application

Raccoon is a real-time chat application featuring a modern and responsive user interface. It allows users to sign in, join chat rooms, and
communicate instantly with others.

✨ Features

- Real-Time Messaging: Instant message delivery using WebSockets.
- User Authentication: Secure sign-in and sign-out functionality powered by Auth0.
- Modern UI: A clean and intuitive interface built with React, TypeScript, and shadcn/ui.
- Component-Based Architecture: A well-structured frontend with reusable React components.
- Scalable Backend: A lightweight and efficient backend powered by Node.js, Express, and ws.

🛠️ Technologies Used

Frontend (Client)

- Framework: React
- Language: TypeScript
- Build Tool: Vite
- Styling: Tailwind CSS & shadcn/ui
- Routing: React Router
- Authentication: Auth0
- Linting: ESLint

Backend (Server)

- Framework: Express.js
- Language: TypeScript
- Real-Time Communication: WebSockets (ws)

🚀 Getting Started

Prerequisites

- Node.js (v18 or higher recommended)
- npm (or your favorite package manager)

Installation & Setup

1.  Clone the repository:
    1 git clone <your-repository-url>
    2 cd Real\ Time\ Chat\ Application\(racoon\)

2.  Set up the server:

1 cd server
2 npm install

3.  Set up the client:
    1 cd ../client
    2 npm install

Running the Application

1.  Start the backend server:
    From the server directory, run:
    1 npm run dev
    The server will start on the configured port (e.g., http://localhost:8080).

2.  Start the frontend client:
    From the client directory, run:
    1 npm run dev
    The client will be available at http://localhost:5173.
