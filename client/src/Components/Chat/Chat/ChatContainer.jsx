import { Box } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import ChatHedder from './ChatHedder'
import Messages from './Messages'
import { AccountContext } from '../../../context/AccountProvider'
import { getConversation } from '../../../Service/api'

const ChatContainer = () => {
    const { person, account } = useContext(AccountContext);

    const [conversation, setConversation] = useState({});

    useEffect(() => {
        const getConversationDetails = async () => {
            let data = await getConversation({ senderId: account.sub, recieverId: person.sub })
            console.log(data);
            setConversation(data)
        }
        getConversationDetails();
    }, [person.sub])

    return (
        <Box>
            <ChatHedder person={person} />
            <Messages person={person} conversation={conversation} />
        </Box>
    )
}

export default ChatContainer