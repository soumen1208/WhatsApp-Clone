//                                                                   Empty Chat


import { Box, Divider, styled, Typography } from '@mui/material'
import React from 'react'
import { bgimage } from '../../../constants/data'

const Component = styled(Box)`
 background: #f8f9fa;
 padding: 30px 0;
 text-align:center;
 height: 87.39vh
`

const Container = styled(Box)`
padding: 0 200px;
`

const Image = styled('img')({
    // height: "400px",
    width: 400,
    marginTop: 100
})

const Title = styled(Typography)`
font-size: 32px;
margin: 25px 0 10px 0;
font-family: inherit;
font-weight:300;
color: #41525d;
`
const SubTitle = styled(Typography)`
font-family: inherit;
font-size: 14px;
color: #667781;
font-weight:400
`
const DividerStyle = styled(Divider)`
margin: 30px 0;
opacity: 0.5

`

const Chat = () => {
    return (
        <Component>
            <Container>
                <Image src={bgimage} alt="image" />
                <Title>WhatsApp Web</Title>
                <SubTitle>Now send and recieve messages without keeping your phone online.</SubTitle>
                <SubTitle>Use WhatsApp on up to 4 linked device and 1 phone at the same time.</SubTitle>
                <DividerStyle />
            </Container>
        </Component>
    )
}

export default Chat