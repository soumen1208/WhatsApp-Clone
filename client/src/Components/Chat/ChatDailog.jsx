import { Box, Dialog, styled } from '@mui/material'
import React, { useContext } from 'react'
import Menu from './Menu/Menu'
import Chat from './Chat/Chat'
import ChatContainer from './Chat/ChatContainer'
import { AccountContext } from '../../context/AccountProvider'

const Container = styled(Box)`
display: flex;
width: 100%;

`
const MenuBox = styled(Box)`
width: 30%
`
const ChatBox = styled(Box)`
width: 70%;
min-width: 30%;
height: 100%;
border-left: 1px solid rgba(0,0,0,0.20)
`


const dailogStyle = {
    height: "96%",
    width: "100%",
    marginTop: "10rem",
    marginLeft: "1.5rem",
    marginRight: "1.5rem",
    marginBottom: "10rem",
    maxWidth: "100%",
    maxHeight: "100%",
    boxShadow: "none",
    overFlow: "hidden"

}

const ChatDailog = () => {

    const { person } = useContext(AccountContext)


    return (
        <Dialog open={true} PaperProps={{ sx: dailogStyle }} hideBackdrop={true} maxWidth={'md'}>

            <Container>
                <MenuBox>
                    <Menu />
                </MenuBox>
                <ChatBox>

                    {Object.keys(person).length ? <ChatContainer /> : <Chat />}

                </ChatBox>
            </Container>

        </Dialog>
    )
}

export default ChatDailog