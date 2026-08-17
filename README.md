# Mongo Express Chat Application

A simple chat application built using **Node.js, Express.js, MongoDB, and EJS**.

This project is created for practicing **MongoDB database operations, Express.js routing, CRUD operations, and server-side rendering with EJS**.

---

## 📌 Features

- Create a new chat
- View all chats
- View individual chat details
- Edit existing chats
- Delete chats
- Delete confirmation before removing a chat
- MongoDB database integration
- RESTful routes
- EJS templating
- Express.js backend
- Method Override for PUT and DELETE requests
- Simple and beginner-friendly interface

---

## 🛠️ Technologies Used

- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose**
- **EJS**
- **Method-Override**
- **HTML**
- **CSS**
- **JavaScript**

---

## 📂 Project Structure

```text
MONGO_EXPRESS/
│
├── models/
│   └── chat.js
│
├── public/
│   └── app.js
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   ├── edit.ejs
│   └── show.ejs
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

⚙️ Installation
1. Clone the Repository
git clone YOUR_GITHUB_REPOSITORY_URL

Replace YOUR_GITHUB_REPOSITORY_URL with your GitHub repository URL.

2. Open the Project
cd MONGO_EXPRESS
3. Install Dependencies
npm install
🗄️ MongoDB Setup

Make sure MongoDB is installed and running on your computer.

The application uses MongoDB to store chat data.

The MongoDB connection is configured in the main Express server file.

Example:

mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");

You can change the database name according to your requirements.

▶️ Run the Project

Start the server using:

node index.js

Or, if you have a start script configured:

npm start

After starting the server, open:

http://localhost:8080/chats

in your browser.

🔄 CRUD Operations

This project demonstrates the basic CRUD operations:

Operation	HTTP Method	Purpose
Create	POST	Create a new chat
Read	GET	Display chats
Update	PUT	Edit an existing chat
Delete	DELETE	Delete a chat
📝 Create Chat

A new chat can be created using the New Chat option.

The user can enter details such as:

Sender
Receiver
Message

The data is then stored in MongoDB.

👀 View Chats

The home page displays all the chats stored in the MongoDB database.

Users can open an individual chat to view its complete details.

✏️ Edit Chat

Users can edit an existing chat.

The edit request uses the PUT HTTP method through method-override.

Example route:

/chats/:id
🗑️ Delete Chat

Users can delete an existing chat.

Before deleting a chat, a confirmation popup is displayed:

Are you sure you want to delete this chat?


OK / Cancel

If the user selects OK, the chat is deleted.

If the user selects Cancel, the chat remains unchanged.

The delete confirmation is handled using JavaScript in:

public/app.js
🔐 Delete Confirmation

The project uses JavaScript's confirm() method to prevent accidental deletion.

Example:

const confirmDelete = confirm(
    "Are you sure you want to delete this chat?"
);


if (!confirmDelete) {
    event.preventDefault();
}
📦 Dependencies

The main dependencies used in this project include:

express
mongoose
ejs
method-override

Install all dependencies using:

npm install
🧪 Learning Objectives

This project helps in understanding:

Node.js fundamentals
Express.js
Routing
RESTful APIs
CRUD operations
MongoDB
Mongoose
EJS templates
Dynamic HTML pages
HTTP methods
Method Override
JavaScript event handling
Connecting frontend with backend
Working with Git and GitHub

🚀 Future Improvements
Some possible improvements are:

Add user authentication
Add timestamps to chats
Add search functionality
Add pagination
Improve UI/UX
Add responsive design
Add form validation
Add flash messages
Deploy the application online

👩‍💻 Author
Durga Kaushik | Web Development Learner

This project was created for learning and practicing Node.js, Express.js, MongoDB, and CRUD operations.

📄 License
This project is available for educational and learning purposes.
