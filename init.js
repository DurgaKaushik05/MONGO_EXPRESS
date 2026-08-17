const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("connection successfull");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');
}

let allChats = [
    {
        from: "durga",
        to: "KK",
        msg: "send me notes for the exam",
        created_at: new Date(),
    },
    {
        from: "rahul",
        to: "abhishek",
        msg: "teach me JS callbacks",
        created_at: new Date(),
    },
    {
        from: "divya",
        to: "dolly",
        msg: "all the best for your exam!",
        created_at: new Date(),
    },
    {
        from: "roy",
        to: "dimpi",
        msg: "love you 3000",
        created_at: new Date(),
    },
    {
        from: "atul",
        to: "chandra",
        msg: "keep practicing",
        created_at: new Date(),
    },
];

Chat.insertMany(allChats);