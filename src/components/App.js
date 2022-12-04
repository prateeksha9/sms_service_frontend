import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import fetchContacts from '../action/contacts';
import fetchOtps from '../action/otp';
import { Homepage, ContactDetails, SendMessageScreen, Header, Footer } from '.';
function App() {
  const contacts = useSelector((state) => state.contacts);
  const otps = useSelector((state) => state.otps);
  const dispatch = useDispatch();
  useEffect(() => {
    // Action triggered to fetch Contacts and OTP list from server
    dispatch(fetchContacts());
    dispatch(fetchOtps());
  }, []);
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route
            path="/"
            element={<Homepage contacts={contacts} otps={otps} />}
          />
          <Route
            path="/contactDetails/:id"
            element={<ContactDetails contacts={contacts} />}
          />
          <Route
            path="/sendMessage/:id"
            element={<SendMessageScreen contacts={contacts} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
