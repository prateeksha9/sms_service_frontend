import { combineReducers } from 'redux';

import contacts from './contacts';
import otps from './otp';

//  combine both these reducers
export default combineReducers({
  contacts,
  otps,
});
