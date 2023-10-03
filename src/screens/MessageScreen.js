import Header from "../components/Header";
import UserMessageCard from "../components/UserMessageCard";
import { data } from "../data";
import { useState, useEffect } from "react";
import MessageThread from "./MessageThread";
import { useGetMessagesQuery } from "../api/apiSlice";

const MessageScreen = () => {

    // Boolean to toggle the thread screen stack
    const [viewThread, setViewThread] = useState({
        id: "",
        clicked: false
    });

    // Built in hooks from rtk query
    // const {data=[], isLoading, error} = useGetMessagesQuery();

    // State for the search function
    const [search, setSearch] = useState('');

    useEffect(() => {
        //useGetMessageQuery();
    }, []);

    const handleMessageThread = (index) => {
        setViewThread({
            id: index,
            clicked: !viewThread.clicked
        })
    }

    const messageData = data.messages.map((message, index) => {
        return (
            <div key={index} onClick={() => handleMessageThread(message.threadId)}>
                <UserMessageCard
                    userId={message.userId}
                    username={message.username}
                    tagName={message.tagName}
                    date={message.content[message.content.length - 1].date}
                    profileThumbnail={message.profilePictureUrl}
                    content={message.content[message.content.length - 1]}
                />
            </div>
        )
    })

    const searchResults = data.messages.filter((message, index) => {
        return message.username.toLowerCase().includes(search.toLowerCase())
    })

    const mappedSearchResults = searchResults?.map((results, index) => (
        <div key={index} onClick={() => handleMessageThread(results.threadId)}>
            <UserMessageCard
                userId={results.userId}
                username={results.username}
                tagName={results.tagName}
                date={results.content[results.content.length - 1].date}
                profileThumbnail={results.profilePictureUrl}
                content={results.content[results.content.length - 1]}
            />
        </div>
    ))

    return (
        <main>
            {/* search bar conditionally renders if message thread is not clicked*/}
            {
                !viewThread.clicked ?
                    (
                        <>
                            <Header />
                            <input
                                style={search.length > 0 ? styles.searchBarContainerActive : styles.searchBarContainer}
                                placeholder="Search Direct Messages"
                                name="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <br />
                            <hr />
                            <br />
                        </>
                    ) : ""
            }

            <div style={styles.userMessageCardContainer}>
                {/* Conditionally renders components if there is a search term and stacks a message component if a message thread is clicked */}
                {
                    search.length > 0
                        ? viewThread.clicked
                            ? <MessageThread handleMessageThread={handleMessageThread} viewThread={viewThread} />
                            : mappedSearchResults
                        : viewThread.clicked
                            ? <MessageThread handleMessageThread={handleMessageThread} viewThread={viewThread} />
                            : messageData
                }
            </div>
        </main>
    )
}

const styles = {
    userMessageCardContainer: {
        margin: '20px'
    },
    searchBarContainer: {
        border: '1px solid lightgrey',
        background: '#e9e9e9a6',
        color: 'grey',
        fontSize: '20px',
        borderRadius: '25px',
        width: '98.9%',
        height: '30px',
        textAlign: 'center',
        marginBottom: '5px'
    },
    searchBarContainerActive: {
        border: '1px solid lightgrey',
        background: '#e9e9e9a6',
        color: 'grey',
        fontSize: '20px',
        borderRadius: '25px',
        width: '100%',
        height: '30px',
        paddingLeft: '10px',
        marginBottom: '5px'
    }
}

// search bar to 99%
// profile picture downsize in mobile view
// font size to 1.5 rem in mobile view

export default MessageScreen