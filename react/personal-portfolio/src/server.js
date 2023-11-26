const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

// Server used to send emails
const app = express();
app.use(cors);
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);

const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "anirudh03sharma@gmail.com",
        pass: ""
    }
});

contactEmail.verify((error) => {
    if (error) {
        console.log(error);
    } else {
        console.log("Ready to send");
    }
});

router.post("/contact", (req, res) => {
    const {
        firstName,
        lastName,
        email,
        phone,
        message
    } = req.body;

    const mail = {
        from: firstName + " " + lastName,
        to: "aniruddhism@gmail.com",
        subject: "Contact Form Submission - Personal Portfolio",
        html: `
        <p>Name: ${firstName + " " + lastName}</p>
        <p>Email: ${email}</p>
        <p>Phone: ${phone}</p>
        <p>Message: ${message}</p>
        `
    };

    contactEmail.sendMail(mail, error => {
        if (error) {
            res.json(error);
        } else {
            res.json({ code: 200, status: "Message sent"});
        }
    })
});