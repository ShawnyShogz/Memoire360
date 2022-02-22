import React from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import Newsletter  from '../Footer/Newsletter';

const NewsLetterSubscribe = () => {

    const postUrl = `https://outlook.us14.list-manage.com/subscribe/post?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;

    return (
      <div>
        <MailchimpSubscribe
          url={ postUrl }
          render={ ( props ) => {
            const { subscribe, status, message } = props || {};
            return (
              <Newsletter
                status={ status }
                message={ message }
                onValidated={ formData => subscribe( formData ) }
              />
            );
          } }
        />
        </div>
      );
    };
    
    export default NewsLetterSubscribe;