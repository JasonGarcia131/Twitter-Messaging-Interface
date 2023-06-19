import Header from "../components/Header";
import UserMessageCard from "../components/UserMessageCard";
import { data } from "../data";
import { Link } from "react-router-dom";

const styles = {
    userMessageCardContainer: {
        margin: '20px'
    }
}

const messageData = data.messages.map((message, index) =>
    <Link key={index} to={`/message/${message.messageId}`}>
        <UserMessageCard
            username={message.username}
            tagName={message.tagName}
            date={message.content[message.content.length - 1].date}
            profileThumbnail={message.profileThumbnail}
            content={message.content}
        />
    </Link>
)
const MessageScreen = () => {
    return (
        <main>
            <Header />
            {/* search bar */}
            <div style={styles.userMessageCardContainer}>
                {messageData}
            </div>
        </main>
    )
}

export default MessageScreen