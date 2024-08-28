import { Box, styled, Typography } from '@mui/material'
import React, { useContext } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { AccountContext } from '../../../context/AccountProvider';

const Components = styled(Box)`
display: flex;
height: 3rem;
width:98%;
background: #ededed;
align-items: center;
padding: 8px 10px;

`
const Image = styled('img')({
    height: "50px",
    width: "50px",
    objectFit: "cover",
    borderRadius: "100%",
    justifyContent: ""
})

const OnlineAndOffline = styled(Typography)`
font-size:10px;
margin-left:12px;
color: #3d302d;
`
const Icons = styled(Box)`
margin-left: auto;
display: flex;
gap:1rem;
color: #3c434a;
opacity: 5
`

const Name = styled(Typography)`
margin-left: 12px !important;
`

const ChatHedder = ({ person }) => {

    const { activeUsers } = useContext(AccountContext);

    return (
        <Components>
            <Image src={person.picture} alt="dp" />
            <Box>
                <Name>{person.name}</Name>
                <OnlineAndOffline>{activeUsers?.find(user => user.sub === person.sub) ? 'online' : 'offline'}</OnlineAndOffline>
            </Box>
            <Icons>
                <SearchIcon />
                <MoreVertIcon />
            </Icons>

        </Components>
    )
}

export default ChatHedder