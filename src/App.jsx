import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import NavBar from "./components/NavBar/NavBar.jsx";
import MailBoxList from "./components/MailBoxList/MailBoxList.jsx";
import MailBoxDetails from "./components/MailBoxDetails/MailBoxDetails.jsx";
import MailBoxForm from "./components/MailBoxForm/MailBoxForm.jsx";
import NewLetter from "./components/NewLetter/NewLetter.jsx";
import './index.css';
import './App.css';



const App = () => {

const [mailboxes, setMailboxes] = useState([]);
const [letters, setLetters] = useState([]);

const addBox = (newBox) => {
  setMailboxes([...mailboxes, newBox]);
  console.log(mailboxes);
};

const addLetter = (newLetter) => {
  setLetters([...letters, newLetter]);
  console.log(letters);
};

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={
        <main className="home-page">
          <h1>Welcome to the Post Office</h1>
          <p>Your one-stop shop for creating and managing mailboxes and letters.</p>
          <div className="home-actions">
            <div className="action-card">
              <h2>New Mailbox</h2>
              <p>
                Need a place to receive your mail? Rent a new mailbox with us today.
                Choose from various sizes to fit your needs.
              </p>
              <Link to="/new-mailbox" className="btn">Rent a New Mailbox</Link>
            </div>
            <div className="action-card">
              <h2>New Letter</h2>
              <p>
                Ready to send a letter? Write and dispatch your messages to any
                mailbox in our system.
              </p>
              <Link to="/new-letter" className="btn">Send a Letter</Link>
            </div>
          </div>
        </main>} />
      <Route path="/mailboxes" element={<MailBoxList mailboxes={mailboxes} />} />
      <Route path="/new-mailbox" element={<MailBoxForm addBox={addBox} mailboxes={mailboxes} />} />
      <Route path="/mailboxes/:mailboxid" element={<MailBoxDetails mailboxes={mailboxes} letters={letters} />} />
      <Route path="/new-letter" element={<NewLetter addLetter={addLetter} letters={letters} mailboxes={mailboxes} />} />
    </Routes>
    </>
  )
};

export default App;
