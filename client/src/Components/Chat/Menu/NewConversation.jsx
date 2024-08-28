import { Box, styled, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import { setConversation, getConversation } from '../../../Service/api'
import { formatDate } from '../../../Utils/common-utils'

const Component = styled(Box)`
display: flex;
align-items: center;
gap: 0.1rem;
cursor: pointer;
height:45px;
padding: 13px 0;
`
const Image = styled('img')({
    width: 50,
    height: 50,
    borderRadius: "100%",
    padding: "0 14px",

})

const Container = styled(Box)`
display:flex;
`

const TimeStamp = styled(Typography)`
margin-left:auto;
padding-right:10px;
font-size:10px;
color:#00000099;
`
const TextMessage = styled(Typography)`
font-size:13px;
color:grey;
`

const NewConversation = ({ user }) => {
    const { setPerson, account, newMessagesFlag } = useContext(AccountContext);
    const [message, setMessage] = useState({});

    useEffect(() => {
        const getConversattionAndDetails = async () => {
            const data = await getConversation({ senderId: account.sub, recieverId: user.sub });
            setMessage({ text: data?.message, timestamp: data?.updatedAt })
        }
        getConversattionAndDetails();
    }, [newMessagesFlag])

    const getUser = async () => {
        setPerson(user);
        await setConversation({ senderId: account.sub, recieverId: user.sub });
    }


    return (
        <Component onClick={() => getUser()}>
            <Box>
                <Image src={user.picture} alt="dp" />
            </Box>
            <Box style={{ width: "100%" }} >
                <Container>
                    <Typography>{user.name}</Typography>
                    {
                        message?.text &&
                        <TimeStamp>{formatDate(message?.timestamp)}</TimeStamp>
                    }
                </Container>
                <Box>
                    <TextMessage>{message?.text?.includes('localhost') ? 'media' : message.text}</TextMessage>
                </Box>
            </Box>
        </Component>
    )
}

export default NewConversation