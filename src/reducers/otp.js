import { UPDATE_OTP, UPDATE_OTPLIST } from '../action/actionType';

// the function handles all states of otpList received from server

export default function otps(state = [], action) {
  switch (action.type) {
    case UPDATE_OTP:
      return action.otp.reverse();

    case UPDATE_OTPLIST:
      console.log('HEreeeeee');
      const current = new Date();
      const newreceiver = {
        id: Math.floor(100000 + Math.random() * 900000),
        name: action.newIteminOTPList.name,
        time: `${current.getDate()}/${
          current.getMonth() + 1
        }/${current.getFullYear()} ${current.getHours()}:${current.getMinutes()}`,
        otp: action.newIteminOTPList.otp,
      };
      const list = [newreceiver, ...state];
      // return [newreceiver, ...state.reverse()];
      return list;

    default:
      return state;
  }
}
