import { Route, Routes } from "react-router-dom";
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
      <Route path="/" element={<main><h1>Post Office</h1></main>} />
      <Route path="/mailboxes" element={<MailBoxList mailboxes={mailboxes} />} />
      <Route path="/new-mailbox" element={<MailBoxForm addBox={addBox} mailboxes={mailboxes} />} />
      <Route path="/mailboxes/:mailboxid" element={<MailBoxDetails mailboxes={mailboxes} letters={letters} />} />
      <Route path="/new-letter" element={<NewLetter addLetter={addLetter} letters={letters} mailboxes={mailboxes} />} />
    </Routes>
    </>
  )
};

export default App;
