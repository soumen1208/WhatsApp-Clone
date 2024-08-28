import React, { useContext, useEffect, useRef, useState } from 'react'
import ChatFooter from './ChatFooter'
import Message from './Message';
import { AccountContext } from './../../../context/AccountProvider';
import { getMessage, newMessage } from '../../../Service/api';

//components

// for styled - css handled
import { Box, styled } from '@mui/material'

const Wrapper = styled(Box)`
background-image: url('https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png');
background-size: 50%;

`
const Coponent = styled(Box)`
height: 78vh;
overflow-y: scroll;

`
const MessageContainer = styled(Box)`
padding: 60px;
`

const Messages = ({ person, conversation }) => {

    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([]);
    const [file, setFile] = useState();
    const [image, setImage] = useState('')
    const [incomingMessage, setIncommingMessage] = useState(null);
    const scrollRef = useRef()

    const { account, socket, setNewMessagesFlag, newMessagesFlag } = useContext(AccountContext);

    useEffect(() => {
        socket.current.on('getMessage', data => {
            setIncommingMessage({
                ...data,
                createdAt: Date.now()
            })
        })
    })

    useEffect(() => {

        const getMessagesDetails = async () => {
            let data = await getMessage(conversation._id)
            setMessages(data);
        }
        conversation._id && getMessagesDetails();

    }, [person._id, conversation._id, newMessagesFlag])


    useEffect(() => {
        scrollRef.current?.scrollIntoView({ transition: 'smooth' })
    }, [messages])

    useEffect(() => {
        incomingMessage && conversation?.members?.includes(incomingMessage.senderId) &&
            setMessages(prev => [...prev, incomingMessage])
    }, [incomingMessage, conversation])

    const sendText = async (e) => {
        const code = e.keyCode || e.which;
        if (code === 13) {
            let message = {};
            if (!file) {
                message = {
                    senderId: account.sub,
                    recieverId: person.sub,
                    conversationId: conversation._id,
                    type: 'text',
                    text: value,
                }
            } else {
                message = {
                    senderId: account.sub,
                    recieverId: person.sub,
                    conversationId: conversation._id,
                    type: 'file',
                    text: image,
                }
            }

            socket.current.emit('sendMessage', message)

            console.log(message);
            await newMessage(message);

            setValue('');
            setFile('');
            setImage('');
            setNewMessagesFlag(prev => !prev)
        }
    }

    return (
        <Wrapper>
            <Coponent>
                <MessageContainer ref={scrollRef}>
                    {
                        messages && messages.map(message => {
                            return <Message message={message} />
                        })
                    }
                </MessageContainer>
            </Coponent>
            <ChatFooter
                sendText={sendText}
                setValue={setValue}
                value={value}
                file={file}
                setFile={setFile}
                setImage={setImage}
            />
        </Wrapper>
    )
}

export default Messages