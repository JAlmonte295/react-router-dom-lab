import { Link } from 'react-router-dom';

const MailBoxList = (props) => {
    if (!props.mailboxes.length) {
        return (
            <main className="home-page">
                <div className="no-mailboxes-message">
                <h2>No Mailboxes Yet!</h2>
                <p>
                    Why not create one?
                </p>
                <Link to="/new-mailbox" className="btn">Rent a New Mailbox</Link>
                </div>
            </main>
        );
    }
    const smallBoxes = props.mailboxes.filter((m) => m.boxSize === 'Small');
    const mediumBoxes = props.mailboxes.filter((m) => m.boxSize === 'Medium');
    const largeBoxes = props.mailboxes.filter((m) => m.boxSize === 'Large');

    return (
        <main>
            <div className="mailbox-group">
                <h2 className="mailbox-group-title">Small Mailboxes</h2>
                <div className="mailbox-grid">
                    {smallBoxes.map((mailbox) => (
                        <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`} className="mail-box mailbox-small">
                            <h3>{mailbox._id}</h3>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="large-boxes-container">
                <div className="mailbox-group">
                    <h2 className="mailbox-group-title">Medium Mailboxes</h2>
                    <div className="mailbox-grid">
                        {mediumBoxes.map((mailbox) => (
                            <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`} className="mail-box mailbox-medium">
                                <h3>{mailbox._id}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="mailbox-group">
                    <h2 className="mailbox-group-title">Large Mailboxes</h2>
                    <div className="mailbox-grid">
                        {largeBoxes.map((mailbox) => (
                            <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`} className="mail-box mailbox-large">
                                <h3>{mailbox._id}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
};

export default MailBoxList;
