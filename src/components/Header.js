import { BsGear } from 'react-icons/bs';

const Header = () => {
    return (
        <header style={styles.headerContainer}>
            <div style={styles.profileThumbnailContainer}>
                <img style={styles.profileThumbnail} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9evJJ_TBlbANk9Oht-H_FwM6OKxA3i43kOpCl0x2nKA&usqp=CAU&ec=48665698" alt="profile thumbnail" />
            </div>
            <p style={styles.screenTitle}>
                Messages
            </p>
            <div>
                <BsGear size='1.5em' />
            </div>
        </header>
    )
}

const styles = {
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '5px'
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
    screenTitle: {
        fontWeight: '600',
        fontSize: '1.5rem'
    }
}

export default Header;