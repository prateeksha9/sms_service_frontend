import { UPDATE_CONTACTS } from './actionType';

// define all the required actions to manage the contactList state

// this function fetches the contactList from server
export default function fetchContacts() {
  return (dispatch) => {
    fetch(`https://my-json-server.typicode.com/prateeksha9/sms_server/contacts`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        dispatch(updateContacts(data));
      });
  };
}

// this function updates the contactLit in state
export function updateContacts(contacts) {
  return {
    type: UPDATE_CONTACTS,
    contacts,
  };
}
