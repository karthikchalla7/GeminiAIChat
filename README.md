# Gemini Chat App

## Overview
The **Gemini Chat App** is a simple chatbot application built using **Spring Boot (Backend)** and **React (Frontend)**. It allows users to send queries and receive AI-generated responses using Google's Gemini API.

## Features
- REST API for handling chat queries.
- Integration with Google's Gemini AI for responses.
- React frontend with a simple UI for user interaction.
- CORS configuration for seamless frontend-backend communication.

## Backend (Spring Boot)
### How It Works
- **QnAService:**
  - Uses `WebClient` to send the user's query to Gemini API.
  - Retrieves AI-generated responses and returns them to the controller.
  - Reads API credentials from `application.properties`.
- **AIController:**
  - Handles incoming HTTP requests (`/api/qna/ask`).
  - Calls `QnAService` to fetch AI responses.
- **WebConfig:**
  - Configures CORS to allow frontend requests.

### Setup
1. Clone the repository.
2. Add your Gemini API details in `application.properties`:
   ```properties
   gemini.api.url=your_api_url
   gemini.api.key=your_api_key
   ```
3. Run the Spring Boot application:
   ```sh
   mvn spring-boot:run
   ```

### Postman Testing
1. Open **Postman**.
2. Create a **POST** request to `http://localhost:8080/api/qna/ask`.
3. Set **Content-Type** to `application/json`.
4. Add the following JSON in the request body:
   ```json
   {
     "question": "What is AI?"
   }
   ```
5. Click **Send** and check the response.

## Frontend (React)
### How It Works
- **API.js:** Handles API requests to the backend.
- **App.jsx:** Manages state and user interactions.
- **ChatInput.jsx:** Collects user input.
- **ChatResponse.jsx:** Displays the AI-generated response.

### Setup
1. Navigate to the `gemini-chat-frontend` folder.
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend:
   ```sh
   npm run dev
   ```

## Running the Application
1. Start the backend (`Spring Boot`).
2. Start the frontend (`React`).
3. Open `http://localhost:5173` in your browser.
4. Ask a question and get AI-powered responses!

## Future Improvements
- Enhance UI/UX.
- Add authentication.
- Improve error handling.
