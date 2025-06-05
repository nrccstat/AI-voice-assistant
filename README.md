# LiveKit AI Car Call Centre

This project is a LiveKit-based AI Car Call Centre application, demonstrating how to build an interactive voice assistant using LiveKit Agents and plugins. The application consists of a backend agent powered by LiveKit and an AI model, and a modern frontend built with React and Vite.

## Features

- Real-time voice communication via LiveKit.
- AI-powered voice assistant for handling car-related inquiries and support requests.
- Modern, techy user interface with dynamic styling.
- Integration with LiveKit components for easy voice assistant implementation.

## Project Structure

The project is organized into two main directories:

- `backend/`: Contains the Python code for the LiveKit agent.
- `frontend/`: Contains the React application for the user interface.

```
LiveKit-AI-Car-Call-Centre/
├── backend/
│   ├── agent.py
│   ├── api.py
│   ├── prompts.py
│   ├── requirements.txt  # (Needs to be created/confirmed)
│   └── ...
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── LiveKitModal.jsx
│   │   │   ├── SimpleVoiceAssistant.css
│   │   │   └── SimpleVoiceAssistant.jsx
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .gitignore
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   ├── sample.env
│   └── vite.config.js
└── README.md (this file)
```

## Setup

**Prerequisites:**

- Node.js and npm installed.
- Python 3.8+ and pip installed.
- LiveKit instance running and accessible.
- Environment variables for LiveKit URL, API Key, and API Secret configured (e.g., in a `.env` file in the backend directory).
- OpenAI API key configured (if using the OpenAI plugin).

### Backend Setup

1.  Navigate to the `backend` directory:
    ```bash
    cd LiveKit-AI-Car-Call-Centre/backend
    ```
2.  Install Python dependencies (assuming a `requirements.txt` exists or you create one):
    ```bash
    pip install -r requirements.txt
    # or install individually if no requirements.txt
    # pip install livekit-agents livekit-plugins-openai livekit-plugins-silero python-dotenv
    ```
3.  Create a `.env` file in the `backend` directory with your LiveKit and OpenAI credentials:
    ```env
    LIVEKIT_URL=ws://localhost:7880
    LIVEKIT_API_KEY=YOUR_API_KEY
    LIVEKIT_API_SECRET=YOUR_API_SECRET
    OPENAI_API_KEY=YOUR_OPENAI_API_KEY
    ```

### Frontend Setup

1.  Navigate to the `frontend` directory:
    ```bash
    cd LiveKit-AI-Car-Call-Centre/frontend
    ```
2.  Install npm dependencies:
    ```bash
    npm install
    ```
3.  Create a `.env` file in the `frontend` directory with your LiveKit URL (if needed, depending on how the frontend connects):
    ```env
    VITE_LIVEKIT_URL=ws://localhost:7880
    ```

## Running the Application

1.  Start the backend agent:
    ```bash
    cd LiveKit-AI-Car-Call-Centre/backend
    python agent.py
    ```
2.  Start the frontend development server:
    ```bash
    cd LiveKit-AI-Car-Call-Centre/frontend
    npm run dev
    ```
3.  Open your web browser and go to the address provided by the Vite development server (usually `http://localhost:5173`).

## Core Components and Files

### Backend (`backend/`)

-   `agent.py`: Contains the main LiveKit Agent implementation. It defines the `entrypoint` function which handles incoming LiveKit room connections, sets up the `Agent` with the `RealtimeModel` from `livekit-plugins-openai`, and starts the agent.
-   `api.py`: Defines the `AssistantFnc` class (as per our previous work) which would handle custom function calls or interactions triggered by the AI model.
-   `prompts.py`: Contains the predefined prompts used to instruct the AI agent, such as the `WELCOME_MESSAGE` and `INSTRUCTIONS`.

### Frontend (`frontend/src/`)

-   `App.jsx`: The main application component. It sets up the basic page structure (header, main content, modal), manages the state for showing the LiveKit modal, and includes the `SimpleVoiceAssistant` component within the modal.
-   `App.css`: Provides the main styling for the application layout, including the techy dark theme, gradients, hero section, and modal.
-   `components/SimpleVoiceAssistant.jsx`: Implements the core voice assistant UI using `@livekit/components-react`. It displays the audio visualizer, control bar, and the conversation history. It also handles fetching transcriptions from the agent and the local participant.
-   `components/SimpleVoiceAssistant.css`: Styles the voice assistant component, including the message appearance, visualizer container, and conversation history.
-   `package.json`: Lists the frontend dependencies (React, LiveKit components, Vite) and scripts (`dev`, `build`).

## Styling and Design

The frontend design has been updated to a modern, techy aesthetic inspired by the provided image. It features:

-   A dark background with vibrant blue/purple gradients and accent colors.
-   Glassmorphism effects with backdrop filters.
-   Animated elements and hover effects.
-   Custom scrollbars for the conversation history.

This README provides a detailed overview to help users understand, set up, and run the LiveKit AI Car Call Centre application. Feel free to expand upon it with more specific details about the AI model configuration, additional features, or troubleshooting tips.
