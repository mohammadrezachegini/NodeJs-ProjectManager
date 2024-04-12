# NodeJs-ProjectManager
## Project Overview

NodeJs-ProjectManager is a comprehensive web application designed for managing projects, teams, and user roles through a structured API. It facilitates project management operations, user authentication, and team collaboration.

## Core Components

### `app/`
Central to the application, hosting all backend logic, models, controllers, and routes.

#### `routers/`
Handles API routing for user, team, and project management:
- **Team**: Manages team functionalities.
- **User**: Handles user profiles and management.
- **Auth**: Supports authentication processes.
- **Project**: Facilitates project operations.

#### `models/`
Defines Mongoose models for database interactions:
- **Team**: Schema for team data.
- **User**: Schema for user data.
- **Project**: Schema for project data.

#### `http/`
Organizes HTTP interactions:
- **Middlewares**: Includes `autoLogin` for session handling and `CheckErrors` for error management.
- **Validations**: Ensures data integrity before processing API requests.
- **Controllers**: Business logic of the application.

#### `modules/`
Utility scripts that enhance functionality:
- **File Uploads**: Handles file uploading mechanisms.

### `public/`
Contains static files used in the application's frontend.

### `index.js`
Entry point for the application that sets up and starts the server.


