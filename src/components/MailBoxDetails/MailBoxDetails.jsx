import { useParams } from 'react-router-dom';

const MailBoxDetails = (props) => {
  const { mailboxid } = useParams();

  const selectedBox = props.mailboxes.find(
    (mailbox) => mailbox._id === Number(mailboxid)
  );

if (!selectedBox) {
    return <h2> Mailbox not found!</h2>
}

return (
    <div className="mail-box">
      <h1>Mailbox {selectedBox._id}</h1>
      <h2>Details</h2>
      <p>Boxholder: {selectedBox.boxOwner}</p>
      <p>Box Size: {selectedBox.boxSize}</p>
    </div>
)
};

export default MailBoxDetails;