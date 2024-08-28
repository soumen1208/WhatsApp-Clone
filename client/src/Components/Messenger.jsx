import React, { useContext } from 'react'
import LoginDailog from './Account/LoginDailog';
import ChatDailog from './Chat/ChatDailog';
import { AccountContext } from '../context/AccountProvider';


// material
import { AppBar, Box, Toolbar, styled } from '@mui/material';

const Component = styled(Box)`
height: 100vh;
background: #dcdcdc;
`
const Header = styled(AppBar)`
height: 7rem;
background: #00A884;
box-shadow: none; 
`

const LoginHeader = styled(AppBar)`
height: 15rem;
background: #00bfa5;
box-shadow: none; 
`

// components


const Messenger = () => {
    const { account } = useContext(AccountContext);

    return (
        <Component>
            {account ?
                <>
                    <Header>
                        <Toolbar>

                        </Toolbar>
                    </Header>
                    <ChatDailog />
                </>
                :
                <>
                    <LoginHeader>
                        <Toolbar>

                        </Toolbar>
                    </LoginHeader>
                    <LoginDailog />
                </>
            }
        </Component>
    )
}

export default Messenger