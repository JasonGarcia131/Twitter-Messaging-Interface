import { data } from "../data";
import { BsArrowLeft } from "react-icons/bs";
import { BsExclamationCircle } from "react-icons/bs"

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
            <div>
                {
                    previousDate < currentDate && <p style={styles.date}>{message.date}</p>
                }
                {
                    message.id === signedInUserId
                        ? (
                            <div className="messageBubble" style={styles.sent.messageBubble}>
                                <p>{message.message}</p>
                            </div>
                        ) : (
                            <div className="messageBubble" style={styles.received }>
                                <p>{message.message}</p>
                            </div>
                        )
                }

                <p style={message.id === signedInUserId ? styles.sent.time : null}>{message.time}</p>
            </div>

        )
    })

    return (
        <section>
            <header style={styles.header}>
                <BsArrowLeft size='2em' onClick={() => handleMessageThread()} />
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={styles.profileThumbnailContainer}>
                        <img style={styles.profileThumbnail} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9evJJ_TBlbANk9Oht-H_FwM6OKxA3i43kOpCl0x2nKA&usqp=CAU&ec=48665698" alt="profile thumbnail" />
                    </div>
                    <p style={{ fontWeight: '600', fontSize: '2em', margin: '0' }}>{mappedThreadMessages[0].username}</p>
                </div>

                <div>
                    <BsExclamationCircle size='2em' />
                </div>
            </header>
            <div style={styles.threadContainer}>
                {thread}
            </div>
        </section>
    )
}

const styles = {
    sent: {
        time: {
            textAlign: 'right'
        },
        messageBubble: {
            backgroundColor: '#1da1f2',
            color: 'white',
            marginLeft: '75%',
            borderBottomLeftRadius: '20px',
            borderBottomRightRadius: '5px',
        }
    },
    received: {
        backgroundColor: '#b2b2b230',
        color: 'black',
        borderBottomRightRadius: '20px',
        borderBottomLeftRadius: '5px',
    },
    threadContainer: {
        width: '100%'
    },
    date: {
        width: '20%',
        margin: '0 auto',
        fontWeight: '600',
        fontSize: '2rem'
    },
    profileThumbnailContainer: {
        width: '50px',
        height: '50px',
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