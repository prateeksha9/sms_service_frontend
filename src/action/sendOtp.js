import { UPDATE_OTPLIST } from './actionType';

// this function sends the request to twilio to send an OTP via API
export default function sendOtp(text) {
  return (dispatch) => {
    fetch(
      `https://smsserver.up.railway.app/send-text?recipient=${text.recipient}&textmessage=${text.textmessage}`
    )
      .then((response) => {
        return response.json();
      })
      .then((text) => {
        console.log('Hereeeeee');
        dispatch(updateotplist(text));
      });
  };
}

// this function updates the otpList in state with the details of new receiver.
export function updateotplist(newIteminOTPList) {
  return {
    type: UPDATE_OTPLIST,
    newIteminOTPList,
  };
}
