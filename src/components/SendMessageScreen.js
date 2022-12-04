import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { updateotplist } from '../action/sendOtp';
import sendOtp from '../action/sendOtp';
function SendMessageScreen(props) {
  // fetch the required contact shared in form of props from parent element using ID received in form of params
  const params = useParams();
  const contacts = props.contacts;
  const index = contacts.findIndex((contact) => contact.id === params.id);
  const contact = contacts[index];

  // generate OTP
  const [OtpGenerator, setOtpGenerator] = useState(
    Math.floor(100000 + Math.random() * 900000)
  );
  const [recipient, setRecipient] = useState(contact.phone_number);
  const [textmessage, setTextmessage] = useState(
    `Hi ${contact.first_name} ${contact.last_name}, your OTP is ${OtpGenerator}.`
  );
  const text = {
    recipient: recipient,
    textmessage: textmessage,
    otp: OtpGenerator,
    name: `${contact.first_name} ${contact.last_name}`,
  };
  const dispatch = useDispatch();
  const sendmessage = () => {
    // actions triggered to send OTP and to update OTP list when SEND button is clicked
    dispatch(sendOtp(text));
    dispatch(updateotplist(text));
  };
  return (
    <div className="contactDetails">
      <div>
        <h3>Recipient Name: </h3>
        <p>
          {contact.first_name} {contact.last_name}
        </p>
      </div>
      <div>
        <h3>Recipient Phone: </h3>
        <p>{recipient}</p>
      </div>
      <div>
        <h3>Message:</h3>
        <p>{textmessage}</p>
      </div>

      <Link to="/">
        <button onClick={() => sendmessage()}>SEND</button>
      </Link>
    </div>
  );
}

export default SendMessageScreen;
