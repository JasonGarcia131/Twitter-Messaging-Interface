
const styles = {
    profileThumbnailContainer: {
        width: '70px',
        height: '70px',
        border: '1px solid black',
        overflow: 'hidden',
        borderRadius: '50%',
        marginRight: '15px'
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
        alignItems: 'center',
        margin: '20px 0'
    },
    content: {
        marginTop: '0'
    }
}

const signedInUserId = 0; 

const UserMessageCard = ({username, tagName, date, profileThumbnail, content, userId}) => {
    
    return (
        <section style={styles.messageCard}>
            <div style={styles.profileThumbnailContainer}>
                <img style={styles.profileThumbnail} src={profileThumbnail} alt="profile thumbnail"/>
            </div>
            <div style={styles.contentInfoContainer}>
                <div style={styles.contentInfo}>
                    <p>{username}</p>
                    <p>{tagName}</p>
                    <p>{date}</p>
                </div>
                {userId === signedInUserId ? <p style={styles.content}>You: {content.message}</p> : <p style={styles.content} >{content.message}</p>}
            </div>
        </section>
    )
}

export default UserMessageCard;