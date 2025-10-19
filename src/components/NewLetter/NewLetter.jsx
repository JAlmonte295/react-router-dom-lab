import { useState } from "react";
import { useNavigate } from "react-router-dom";


const NewLetter = (props) => {
    const getNextId = () => {
    if (!props.letters || props.letters.length === 0) return 1;
    const maxId = Math.max(...props.letters.map((l) => l._id));
    return maxId + 1;
    };
    
    const initialState = { _id: getNextId(), mailboxId: '', recipient: '', message: '' };
    
    const [letter, setLetter] = useState(initialState);
    
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
    props.addLetter({...letter, _id: getNextId()});
    navigate('/mailboxes');
    };
   
    const handleChange = (e) => {
        setLetter({ ...letter, [e.target.name]: e.target.value });
    };

    return (
        <main>
        <h1>New Letter</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="to">To</label>
            <input
                type="text"
                name="recipient"
                id="recipient"
                value={letter.recipient}
                onChange={handleChange}
            />
            <label htmlFor="mailboxId">Mailbox</label>
            <select name="mailboxId" id="mailboxId" value={letter.mailboxId} onChange={handleChange}>
                <option value="">Select a Mailbox</option>
                {props.mailboxes.map((mailbox) => (
                    <option key={mailbox._id} value={mailbox._id}>
                        Mailbox {mailbox._id} ({mailbox.boxOwner})
                    </option>
                ))}
            </select>
            <label htmlFor="message">Message</label>
            <textarea
            name="message"
            id="message"
            value={letter.message}
            onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
            </main>
            );
            };
            
export default NewLetter;