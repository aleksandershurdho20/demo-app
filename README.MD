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




