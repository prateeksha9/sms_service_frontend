import { UPDATE_OTP } from './actionType';

// this function fetches the contactDetails of the people who have already received the OTP from server
export default function fetchOtps() {
  return (dispatch) => {
    fetch(`https://my-json-server.typicode.com/prateeksha9/sms_server/otp`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updateOtp(data));
      });
  };
}

// this function updates the otpList in state
export function updateOtp(otp) {
  return {
    type: UPDATE_OTP,
    otp,
  };
}
