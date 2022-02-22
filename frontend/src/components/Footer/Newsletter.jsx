import React, {useState} from 'react';
import Loading from '../Loading/index';
import './Newsletter.css';

const Newsletter = ({ status, message, onValidated }) => {

  const [ error, setError ] = useState(null);
  const [ email, setEmail ] = useState(null);
  const [submit, setSubmit] = useState(false);
  /**
   * Handle form submit.
   *
   * @return {{value}|*|boolean|null}
   */
   const handleFormSubmit = () => {

    setError(null);

    if ( ! email ) {
      setError( 'Please enter a valid email address' );
      return null;
    }

    const isFormValidated = onValidated({ EMAIL: email });
    //Set Submited to true
    setSubmit(true);
    // On success return true
    return email && email.indexOf("@") > -1 && isFormValidated;
  }
  /**
   * Split the error message to remove mailchimp 
   * 
   * @param {*} event 
   */
  const splitString = (message) =>{
    const myArray = message.split("<a");
    return myArray[0];
  }

  /**
   * Handle Input Key Event.
   *
   * @param event
   */
   const handleInputKeyEvent = ( event ) => {
    setError(null);
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
      // Cancel the default action, if needed
      event.preventDefault();
      // Trigger the button element with a click
      handleFormSubmit();
    }
  }


  return(
    <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <h1 className="headtext__cormorant">Subscribe to our newsletter</h1>
      <p className="p__opensans">For 10% off your next booking</p>
    </div>
    <div className="app__newsletter-input flex__center">
      {!submit ?<div><input type="email" placeholder="Enter your email address" onKeyUp={(event) => handleInputKeyEvent(event)} onChange={(event) => setEmail(event?.target?.value ?? '')}/>
      <button type="button" className="custom__button" onClick={handleFormSubmit}>Subscribe</button></div> : 
      
      <div className="min-h-42px">
        { 'sending' === status ? <Loading showSpinner message="Sending..." contentColorClass="text-white" hasVisibilityToggle={false}/> : null }
        {'error' === status || error ? (
          <div className="app__footer-headtext-nocap">{splitString(message)}
          </div>
        ) : null }
        {'success' === status && 'error' !== status && !error && (
          <div className="app__footer-headtext-nocap">{message}</div>
        )}
      </div>}
    </div>
  </div>
  )
  
  
}
export default Newsletter
