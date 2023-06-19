
const styles = {
    profileThumbnailContainer: {
        width: '100px',
        height: '100px',
        border: '1px solid black',
        overflow: 'hidden',
        borderRadius: '50%'
    },
    profileThumbnail: {
        width: '100%',
        height: '100%'
    },
    contentInfo: {
        display: 'flex',
        flexDirection: 'row',
        gap: '5px'
        // justifyContent: 'space-between',
    },
    contentInfoContainer: {
        width: '85%',
    },
    messageCard: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '20px 0'
    },
    content: {
        marginTop: '0'
    }
}

const signedInUserId = 0; 

const UserMessageCard = ({username, tagName, date, profileThumbnail, content}) => {

    const contentThread = content.map((message)=>{
        console.log(message)
       return message.id === signedInUserId ? <p style={styles.content}>You: {message.message}</p> : <p style={styles.content} >{message.message}</p>
    }) 

    // console.log(contentThread)

    return (
        <section style={styles.messageCard}>
            <div style={styles.profileThumbnailContainer}></div>
            {/* <img src= alt='profile thumbnail'/> */}
            <div style={styles.contentInfoContainer}>
                <div style={styles.contentInfo}>
                    <p>{username}</p>
                    <p>{tagName}</p>
                    <p>{date}</p>
                </div>
                {contentThread}
            </div>
        </section>
    )
}

export default UserMessageCard;