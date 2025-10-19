import { useParams } from 'react-router-dom';

// Note: The 'letters' prop is not being passed to this component from App.jsx
const MailBoxDetails = (props) => {
  const { mailboxid } = useParams();

  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxid)
  );

  const selectedLetters = props.letters?.filter(
    (letter) => Number(letter.mailboxId) === Number(mailboxid)
  );


if (!selectedBox) {
    return <h2> Mailbox not found!</h2>
}

return (
    <main className="mailbox-details-container">
        <div className="mail-box">
            <h1>Mailbox {selectedBox._id}</h1>
            <h2>Details</h2>
            <p>Boxholder: {selectedBox.boxOwner}</p>
            <p>Box Size: {selectedBox.boxSize}</p>
        </div>
        <div className="letters-list">
            <h2>Letters</h2>
            {selectedLetters?.map((letter) => (
                <div key={letter._id} className="letter-card">
                    <p>From: {letter.recipient}</p>
                    <p>{letter.message}</p>
                </div>
            ))}
        </div>
    </main>
)
};

export default MailBoxDetails;