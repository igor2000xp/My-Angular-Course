# Project Overview

This project is an Angular application developed as part of an Angular course. It demonstrates various Angular features, including component interaction, forms, validation, services, and more. The application is a user registration form that captures user information, validates it, and sends it to a local server. It also provides notifications for success and error scenarios.

## Main Technologies

- **Angular:** The core framework for building the application.
- **RxJS:** Used for reactive programming and handling asynchronous operations.
- **ngx-toastr:** A library for displaying toast notifications.
- **json-server:** A tool for creating a fake REST API for development and testing purposes.

## Architecture

The application follows a standard Angular architecture:

- **Components:** The UI is built using Angular components. The main component is `AppComponent`, which contains the user registration form.
- **Services:** The application uses services to encapsulate business logic and data access.
    - `UserService`: Handles user-related operations, such as creating and checking users.
    - `NotificationService`: Provides a wrapper around the `ngx-toastr` library for displaying notifications.
- **Interfaces:** The `User` interface defines the data model for a user.
- **Routing:** The application uses the Angular router to navigate between different views (although the current implementation has only one view).

# Building and Running

## Prerequisites

- Node.js and npm installed.

## Installation

1.  Clone the repository.
2.  Install the dependencies:

    ```bash
    npm install
    ```

## Running the Application

1.  Start the local server:

    ```bash
    npm run server
    ```

2.  In a separate terminal, start the Angular development server:

    ```bash
    npm run start
    ```

The application will be available at `http://localhost:4200/`.

## Building the Application

To build the application for production, run the following command:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Running Tests

To run the unit tests, use the following command:

```bash
npm run test
```

# Development Conventions

- **Coding Style:** The project follows the standard Angular coding style.
- **Component Interaction:** Components communicate with each other using `@Input()` and `@Output()` decorators.
- **State Management:** The application uses signals for managing local component state.
- **Asynchronous Operations:** RxJS is used for handling asynchronous operations, such as HTTP requests.
- **Validation:** The application uses template-driven forms with built-in and custom validators.
- **Notifications:** The `ngx-toastr` library is used for displaying notifications.
