import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = (props) => {
    const getNextId = () => {
        if (!props.mailboxes || props.mailboxes.length === 0) return 1;
        const maxId = Math.max(...props.mailboxes.map((b) => b._id));
        return maxId + 1;
    };
    const initialState = { _id: getNextId(), boxSize: 'Small', boxOwner: '' };
    const [mailbox, setMailbox] = useState(initialState);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addBox(mailbox);
        navigate('/mailboxes');
    };

    const handleChange = (e) => {
        setMailbox({ ...mailbox, [e.target.name]: e.target.value });
    };

    return (

        <main> 
            <h1>New Mailbox</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxSize">Box Size</label>
                <select
                    name="boxSize"
                    id="boxSize"
                    value={mailbox.boxSize}
                    onChange={handleChange}
                >
                    <option value="Small">Small</option>
                    <option value="Medium">Medium</option>
                    <option value="Large">Large</option>
                </select>
                <label htmlFor="boxOwner">Box Owner</label>
                <input
                type="text"
                name="boxOwner"
                id="boxOwner"
                value={mailbox.boxOwner}
                onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </main>
    )
};

export default MailboxForm;