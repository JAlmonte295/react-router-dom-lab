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
    <>
    <h1>Mailbox {selectedBox._id}</h1>
    <h2>{selectedBox.boxOwner}</h2>
    <h2>{selectedBox.boxSize}</h2>
    </>
)
};

export default MailBoxDetails;