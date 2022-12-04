import React from 'react';
import { Link } from 'react-router-dom';

function Homepage(props) {
  const contacts = props.contacts;
  const otps = props.otps;
  return (
    <div>
      <div className="homeDiv">
        <div className="contactList">
          <table className="contactListTable">
            <thead>
              <tr className="contactListRow">
                <td
                  className="contactListCol"
                  style={{ fontWeight: 'bold', background: '#d8dff6' }}
                >
                  <div>List of Contacts</div>
                </td>
              </tr>
            </thead>

            {contacts.map((contact) => (
              <tbody>
                <Link to={`/contactDetails/${contact.id}`} className="link">
                  <div className="rowDiv">
                    <tr key={contact.id} className="contactListRow">
                      {contact.first_name} {contact.last_name}
                    </tr>
                  </div>
                </Link>
              </tbody>
            ))}
          </table>
        </div>
        <div className="otpList">
          <table className="otpListTable">
            <tbody>
              <tr
                className="contactListRow"
                style={{ fontWeight: 'bold', background: '#d8dff6' }}
              >
                <td>Name</td>
                <td>Date Time</td>
                <td>OTP</td>
              </tr>

              {otps.map((otp) => (
                <tr key={otp.id} className="contactListRow">
                  <td>{otp.name}</td>
                  <td>{otp.time}</td>
                  <td>{otp.otp}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="homeDiv">
        <p>
          <strong>Note:</strong> Click on Mera Gaon or Test client to receive
          message on 9810153260.
        </p>
      </div>
    </div>
  );
}

export default Homepage;
