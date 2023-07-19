import { data } from "../data";
import { BsArrowLeft } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs";
import "../App.css";

const signedInUserId = 0;

const MessageThread = ({ handleMessageThread, viewThread }) => {

    //Fetch thread through thread id
    const mappedThreadMessages = data.messages.filter((message, index) => (
        message.threadId === viewThread.id
    ))

    const thread = mappedThreadMessages[0].content?.map((message, index) => {
        const previousDate = new Date(mappedThreadMessages[0].content[index - 1]?.date)
        const currentDate = new Date(message.date)

        return (
            <div id="messageBubbleContainer" className={message.id === signedInUserId ? "sentBubbleContainer" : "receivedBubbleContainer"}>
                {
                    previousDate < currentDate && <p style={styles.date}>{message.date}</p>
                }
                {
                    message.id === signedInUserId
                        ? (
                            <div className="messageBubble" id="sent" >
                                <p>{message.message}</p>
                            </div>
                        ) : (
                            <div className="messageBubble" id="received" >
                                <p>{message.message}</p>
                            </div>
                        )
                }
                <p>{message.time}</p>
            </div>

        )
    })

    return (
        <section>
            <header style={styles.header}>
                <BsArrowLeft size='2em' onClick={() => handleMessageThread()} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={styles.profileThumbnailContainer}>
                        <img style={styles.profileThumbnail} src={mappedThreadMessages[0].profilePictureUrl} alt="profile thumbnail" />
                    </div>
                    <p style={{ fontWeight: '600', fontSize: '1.5em', margin: '0' }}>{mappedThreadMessages[0].username}</p>
                </div>
                <div>
                    <BsExclamationCircle size='1.5em' />
                </div>
            </header>
            <br/>
            <div style={styles.threadContainer}>
                {thread}
            </div>
        </section>
    )
}

const styles = {
     threadContainer: {
        width: '100%'
    },
    date: {
        width: '100%',
        margin: '0 auto',
        fontWeight: '600',
        fontSize: '2rem',
        textAlign: "center"
    },
    profileThumbnailContainer: {
        width: '40px',
        height: '40px',
        border: '1px solid black',
        overflow: 'hidden',
        borderRadius: '50%'
    },
    profileThumbnail: {
        width: '100%',
        height: '100%'
    },
    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
}

export default MessageThread;