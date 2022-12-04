import { UPDATE_CONTACTS } from '../action/actionType';

// the function handles all states of contactList received from server

export default function contacts(state = [], action) {
  switch (action.type) {
    case UPDATE_CONTACTS:
      return action.contacts;

    default:
      return state;
  }
}
