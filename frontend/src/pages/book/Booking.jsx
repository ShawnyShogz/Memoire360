
import axios from "axios"
import React, { useState } from "react"
import { Navbar } from '../../components';
import { useRef } from "react";
import "./Booking.css"
import Footer from "../../container/Footer/Footer";


const Booking = () => {
  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const message = useRef();
  const location = useRef();
  const date = useRef();
  const postcode = useRef();
  const guests = useRef();
  const duration = useRef();

  const [ sent, setSent ] = useState(false)

	const handleSend = async (e) => {
    e.preventDefault();
		setSent(true)

    const data = {
      name: name.current.value,
      email: email.current.value,
      phone: phone.current.value,
      message: message.current.value,
      location: location.current.value,
      postcode: postcode.current.value,
      date: date.current.value,
      guests: guests.current.value,
      duration: duration.current.value,
    };

		try {
			await axios.post("/send_mail", data)
		} catch (error) {
			console.error(error)
		}
	}


  return (
    <>
    <Navbar />
    <div className="app__bg " id="awards">
    <div className="app__wrapper_info">
      <div className="container">
      {!sent ? (
          <form  onSubmit={handleSend}>
            <h3 className="app__header-h3">Get in touch now</h3>
          <input
            placeholder="Enter Full Name"
            required
            ref={name}
            className=""
            type="text"
          />
          <input
            placeholder="Enter Email"
            required={true}
            ref={email}
            className=""
            type="email"
          />
          <input
            placeholder="Enter Phone Number "
            required
            ref={phone}
            className=""
            type="text"
          />
          <textarea
            placeholder="Enter Venue Location "
            required={true}
            ref={location}
            className=""
            rows="3"
            type="text"
          />
          <input
            placeholder="Enter event postcode "
            required={true}
            pattern="[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}"
            ref={postcode}
            className=""
            type="text"
          />
          <input 
            placeholder="dd/mm/yyyy"
            type="date" 
            required={true}
            ref={date}
            min="2022-02-15" 
            max="2040-01-01"
          ></input>
           <input
            placeholder="Number of Guests"
            required
            ref={guests}
            type="number"
          />
           <input
            placeholder="Duration in hours"
            required
            ref={duration}
            type="number"
          />
          <textarea
            placeholder="Give us a description of your event"
            ref={message}
            className=""
            rows="5"
            type="text"
          />
          <button type="submit" value="Send" >
            Send
          </button>
        </form>
        ):
        <h1 className="app__header-h1">Thank you for getting in touch</h1>}
      </div>
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Booking