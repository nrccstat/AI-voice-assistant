# LiveKit AI Car Call Centre

This project is a LiveKit-based AI Car Call Centre application, demonstrating how to build an interactive voice assistant using LiveKit Agents and plugins. The application consists of a backend agent powered by LiveKit and an AI model, and a modern frontend built with React and Vite.

## Features

- Real-time voice communication via LiveKit.
- AI-powered voice assistant for handling car-related inquiries and support requests.
- Modern, techy user interface with dynamic styling.
- Integration with LiveKit components for easy voice assistant implementation.

## Project Structure

The project root contains the following main files and directories:

```
./
├── src/
│   ├── components/
│   │   ├── LiveKitModal.jsx
│   │   ├── SimpleVoiceAssistant.css
│   │   └── SimpleVoiceAssistant.jsx
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md (this file)
├── sample.env
├── vite.config.js
├── api.py
├── prompts.py
└── requirements.txt  # (Needs to be created/confirmed)
```

## Setup

**Prerequisites:**

- Node.js and npm installed.
- Python 3.8+ and pip installed.
- LiveKit instance running and accessible.
- Environment variables for LiveKit URL, API Key, and API Secret configured (e.g., in a `.env` file at the project root).
- OpenAI API key configured (if using the OpenAI plugin).

### Frontend Setup

1.  Install npm dependencies from the project root:
    ```bash
    npm install
    ```
2.  Create a `.env` file at the project root with your LiveKit URL (if needed, depending on how the frontend connects):
    ```env
    VITE_LIVEKIT_URL=ws://localhost:7880
    ```

### Backend Setup (Optional for running frontend only)

1.  Install Python dependencies from the project root (assuming a `requirements.txt` exists or you create one):
    ```bash
    pip install -r requirements.txt
    # or install individually if no requirements.txt
    # pip install livekit-agents livekit-plugins-openai livekit-plugins-silero python-dotenv
    ```
2.  Create a `.env` file at the project root with your LiveKit and OpenAI credentials:
    ```env
    LIVEKIT_URL=ws://localhost:7880
    LIVEKIT_API_KEY=YOUR_API_KEY
    LIVEKIT_API_SECRET=YOUR_API_SECRET
    OPENAI_API_KEY=YOUR_OPENAI_API_KEY
    ```

## Running the Application

To run only the frontend:

1.  Start the frontend development server from the project root:
    ```bash
    npm run dev
    ```
2.  Open your web browser and go to the address provided by the Vite development server (usually `http://localhost:5173`).

To run both backend and frontend:

1.  Start the backend agent from the project root (requires `agent.py`, which seems to be missing):
    ```bash
    python agent.py # Note: agent.py was noted as deleted in the last interaction.
    ```
2.  In a new terminal, start the frontend development server from the project root:
    ```bash
    npm run dev
    ```
3.  Open your web browser and go to the address provided by the Vite development server.

## Core Components and Files

-   `src/App.jsx`: The main application component. It sets up the basic page structure, manages the modal state, and includes the `SimpleVoiceAssistant` component.
-   `src/App.css`: Provides the main styling for the application layout and theme.
-   `src/components/SimpleVoiceAssistant.jsx`: Implements the core voice assistant UI.
-   `src/components/SimpleVoiceAssistant.css`: Styles the voice assistant component.
-   `package.json`: Lists the frontend dependencies (React, LiveKit components, Vite) and scripts (`dev`, `build`).
-   `api.py`: Defines the `AssistantFnc` class which handles custom function calls or interactions triggered by the AI model. (Located at the project root)
-   `prompts.py`: Contains the predefined prompts used to instruct the AI agent. (Located at the project root)
-   `agent.py`: Contains the main LiveKit Agent implementation. **(Note: This file was noted as deleted in the last interaction and is required to run the backend.)**

## Styling and Design

The frontend design has been updated to a modern, techy aesthetic inspired by the provided image. It features:

-   A dark background with vibrant blue/purple gradients and accent colors.
-   Glassmorphism effects with backdrop filters.
-   Animated elements and hover effects.
-   Custom scrollbars for the conversation history.

This README provides a detailed overview to help users understand, set up, and run the LiveKit AI Car Call Centre application. Feel free to expand upon it with more specific details about the AI model configuration, additional features, or troubleshooting tips.
