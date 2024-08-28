import { Box, styled } from '@mui/material'
import React, { useContext, useState } from 'react'
import { AccountContext } from '../../../context/AccountProvider'
import ChatIcon from '@mui/icons-material/Chat';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import HedderMenu from './HedderMenu';
import InfoDrawer from '../../Drawer/InfoDrawer';


const Container = styled(Box)`
height: 4rem;
background: rgba(0,0,0,0.09);
display: flex;
align-items: center;
padding: 0px 10px
`
const Dp = styled('img')({
    height: '50px',
    borderRadius: '100%',
})
const Icon = styled(Box)`
display: flex;
gap: 2rem;
margin-left:auto;

`

const Hedder = () => {

    const [openDrawer, setOpenDrawer] = useState(false);

    const { account } = useContext(AccountContext);

    const toggleDrawer = () => {
        setOpenDrawer(true);
    }

    return (
        <>
            <Container>
                <Dp src={account.picture} alt="dp" onClick={() => toggleDrawer()} />
                <Icon>
                    <AutorenewIcon />
                    <ChatIcon />
                    <HedderMenu setOpenDrawer={setOpenDrawer} />
                </Icon>
            </Container>
            <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        </>
    )
}

export default Hedder