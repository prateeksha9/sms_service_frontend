import React from 'react';
import { Link, useParams } from 'react-router-dom';

function ContactDetails(props) {
  const params = useParams();
  const contacts = props.contacts;
  const index = contacts.findIndex((contact) => contact.id === params.id);
  const contact = contacts[index];
  return (
    <div className="contactDetails">
      <div>
        <div>
          <h3>Name</h3>
          <p>
            {contact.first_name} {contact.last_name}
          </p>
        </div>
      </div>
      <div>
        <h3> Phone Number </h3>
        <p>{contact.phone_number}</p>
      </div>

      <Link to={`/sendMessage/${contact.id}`}>
        <button>Send Message</button>
      </Link>
    </div>
  );
}

export default ContactDetails;
