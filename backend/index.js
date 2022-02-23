const express = require("express")
const app = express()
require("dotenv").config()

const bodyParser = require("body-parser")
const cors = require("cors")
const nodemailer = require("nodemailer")

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(cors())

app.post("/send_mail", cors(), async (req, res) => {
	const data = {
        name : req.body.name,
        email : req.body.email,
        phone : req.body.phone,
        message : req.body.message,
        location : req.body.location,
        date: req.body.date,
        guests: req.body.guests,
        duration: req.body.duration,
        postcode: req.body.postcode
    }
	const transport = nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		port: process.env.MAIL_PORT,
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASS
		}
	})

	await transport.sendMail({
		from: `${process.env.MAIL_USER}`,
		to: `${process.env.MAIL_USER}`,
		subject: "New Booking Enquiry",
		html: `<div className="email" style="
        border: 1px solid black;
        padding: 20px;
        font-family: sans-serif;
        line-height: 2;
        font-size: 20px; 
        ">
        <h1>You have a new booking enquiry!</h1>
        <h2>From ${data.name}</h2>
        <br>
        <p>On the ${data.date}</p>
        <p>At ${data.location}, ${data.postcode}</p>
        <p>They will need the booth for around ${data.duration} hours and will have around ${data.guests} guests.</p>
        <h3>Description</h3>
        <p>${data.message}</p>
        <br>
        <p>Give them a call on ${data.phone} or email ${data.email}</p>
         </div>
    `
	})
})

app.listen(process.env.PORT || 8080, () => {
    console.log('Server is listening on port 8080');
});