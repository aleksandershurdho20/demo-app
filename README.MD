# Demo-App

Welcome to the  repository! This  application is built using Node.js, Express,MongoDB,React.JS and Vite. 

## Getting Started

To start the server, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to server directory in your terminal.
3. Install dependencies using npm:

    ```
    npm install
    ```

4. Create a `.env` file in the root directory of the project with the following variables:

    ```
    PORT=8000
    DATABASE=mongodb://0.0.0.0:27017/library
    JWT_SECRET=YOUR_SECRET_CODE-2
    ```

    - `PORT`: The port number on which the server will run.
    - `DATABASE`: The connection string for your MongoDB database.
    - `JWT_SECRET`: Secret key used for JWT token generation and verification.
    


5. Once the `.env` file is set up, you can start the application using the following command:

    ```
    npm start
    ```

6. The server will start running, and you'll see a message indicating that the server is listening on the specified port.

## Client

To start the client, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to client directory in your terminal.
3. Install dependencies using npm:

    ```
    npm install
    ```
4. To start the development:

```
npm run dev
```
## To start the containers
```
sudo docker-compose up -d
```
## To stop the containers
```
sudo docker stop $(sudo docker ps -q)
```
## To clear  the containers
```
sudo docker system prune -a
```

###  Server Architecture

- **`config/`**: 
  - Contains configuration files for different services, such as database connections or third-party API credentials. These configurations are used throughout the application to ensure consistent settings.

- **`controllers/`**: 
  - Contains the logic for handling requests from the client (frontend). Each controller is responsible for one or more specific routes and encapsulates the business logic.
 

- **`models/`**: 
  - Contains the Mongoose models for MongoDB. These models define the structure of your data, including the schema and methods for interacting with the database.
  

- **`routes/`**: 
  - Defines the API endpoints for the server. Each route file links to one or more controllers and handles HTTP requests (GET, POST, PUT, DELETE).


- **`utils/`**: 
  - Contains utility functions that can be used across the application. These functions are often small, reusable code snippets that perform common tasks.
  

- **`Dockerfile`**: 
  - Contains the instructions for building the Docker image for the backend service. It specifies the base image, dependencies, and steps to set up the application in a Docker container.


  
- **`server.js`**: 
  - The main entry point for the server-side application. It sets up the Express server, connects to the database, and listens for incoming requests on a specified port.

### Example of How the Server Works

1. **Request Handling**: When a request comes into the server, it first passes through the routes defined in the `routes/` folder.

2. **Controller Logic**: The appropriate controller in the `controllers/` folder is invoked to handle the request.

3. **Database Interaction**: If needed, the controller will interact with the models in the `models/` folder to fetch or update data in MongoDB.

4. **Utility Functions**: During this process, the controller may use helper functions from the `utils/` folder for common tasks like validation or authentication.

## Client Architecture

The **client** is built using React. Below is a breakdown of the folder structure in the `client` directory:

### Folder Structure

client/src ├── assets/ ├── components/ ├── config/ ├── constants/ ├── helpers/ ├── hooks/ ├── index.css ├── pages/ ├── routes/ ├── utils/ ├── App.css ├── App.jsx ├── main.jsx


### Detailed Explanation of Client Directory

- **`assets/`**: 
  - Contains static files such as images, fonts, icons, or other resources that the application needs to display.

- **`components/`**: 
  - Contains React components that represent the building blocks of the UI. These are reusable pieces of the interface.

- **`config/`**: 
  - Contains configuration files that define constants or environment-specific settings used throughout the client.

- **`constants/`**: 
  - Holds constants that are used in various parts of the application, like action types, status codes, etc.

- **`helpers/`**: 
  - Contains utility functions or helper functions used throughout the frontend code. These could include formatters, validation functions, etc.

- **`hooks/`**: 
  - Contains custom React hooks used for managing state or performing side effects in the components.
  



- **`pages/`**: 
  - Contains components that represent different pages of the application. Each page corresponds to a route in the application.
  - Example: `HomePage.jsx`, `DashboardPage.jsx`, `LoginPage.jsx`.

- **`routes/`**: 
  - Defines the routing logic of the application using React Router. It maps URLs to components.
  - Example: `App.jsx` sets up the routes for navigating between different pages like login, dashboard.

- **`utils/`**: 
  - Contains utility functions that can be used throughout the application, similar to the `utils/` folder in the server directory.



- **`App.jsx`**: 
  - The main entry point for the React application, which renders the layout and handles the overall routing.

- **`main.jsx`**: 
  - This file is typically the entry point of a React application. It initializes the React app and renders the root component into the DOM.

### Example of How the Client Works

1. **Routing**: The `routes/` folder sets up the paths for various pages of the application. When the user navigates to a new page, the relevant component from the `pages/` folder is rendered.

2. **Components**: The UI is built using the components from the `components/` folder. These components are responsible for rendering the views and handling user interactions.

3. **State Management**: React hooks from the `hooks/` folder manage the application's state and effects.

4. **Helper Functions**: Utility functions from the `helpers/` or `utils/` folder are used throughout the application to perform common tasks like data formatting, API requests, etc.

---


