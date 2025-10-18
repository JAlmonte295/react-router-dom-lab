import { Link } from 'react-router-dom';

const MailBoxList = (props) => {
    return (
        <main>
            <h1>Mailboxes</h1>
            <ul>
                {props.mailboxes?.map((mailbox) => (
                    <div className="mail-box">
                    <li key={mailbox._id}>
                        <Link to={`/mailboxes/${mailbox._id}`}><h1>{mailbox._id}</h1></Link>
                    </li>
                    </div>
                ))}
            </ul>
        </main>
    )
};

export default MailBoxList;
