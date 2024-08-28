import { Box, styled, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { formatDate } from '../../../Utils/common-utils'
import { AccountContext } from '../../../context/AccountProvider'

const Own = styled(Box)`
background:#dcf8c6;
max-width:60%;
width:fit-content;
margin-left:auto;
padding:5px;
display:flex;
border-radius:10px;
word-break:break-word;
margin-top:3px;
`
const Wrapper = styled(Box)`
background:#FFFFFF;
max-width:60%;
width:fit-content;
padding:5px;
display:flex;
margin-top:3px;
border-radius:10px;
word-break:break-word;
`
const Text = styled(Typography)`
font-size:14px;
padding:0 25px 0 5px;
`
const Time = styled(Typography)`
font-size:10px;
color:#919191;
margin-top:6px;
word-break:keep-all;
`


const Message = ({ message }) => {

    const { account } = useContext(AccountContext)

    return (
        <>
            {
                account.sub === message.senderId ?
                    <Own>
                        {
                            message.type === 'file' ? <ImageMessage message={message} /> : <TextMessage message={message} />
                        }

                    </Own>
                    :
                    <Wrapper>
                        <Text>{message.text}</Text>
                        <Time>{formatDate(message.createdAt)}</Time>
                    </Wrapper>
            }
        </>

    )
}

const ImageMessage = ({ message }) => {
    return (
        <Box>
            {
                message?.text?.includes('.pdf') ?
                    <Box>

                    </Box>
                    :
                    <img src={message.text} alt={message.text} />
            }
        </Box>
    )
}

const TextMessage = ({ message }) => {
    return (
        <>
            <Text>{message.text}</Text>
            <Time>{formatDate(message.createdAt)}</Time>
        </>
    )
}

export default Message;