// import {Fa42Group} from  'react-icons/fa6'

const styles = {
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '5px'
    },
    profileThumbnailContainer: {
        width: '60px',
        height: '60px',
        border: '1px solid black',
        overflow: 'hidden',
        borderRadius: '50%'
    },
    profileThumbnail: {
        width: '100%',
        height: '100%'
    },
    screenTitle: {
        fontWeight: '600',
        fontSize: '2rem'
    }
}

const Header = () => {
    return (
        <header style={styles.headerContainer}>
            <div style={styles.profileThumbnailContainer}>
                <img style={styles.profileThumbnail} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9evJJ_TBlbANk9Oht-H_FwM6OKxA3i43kOpCl0x2nKA&usqp=CAU&ec=48665698" alt="profile thumbnail"/>
            </div>
            <p style={styles.screenTitle}>
                Messages
            </p>
            <div>
            {/* <FontAwesomeIcon icon="fa-regular fa-gear" />
             */}
             gear icon
            </div>
        </header>
    )
}

export default Header;