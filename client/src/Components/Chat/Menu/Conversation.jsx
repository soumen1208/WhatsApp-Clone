import { Box, styled, Divider } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { getUsers } from '../../../Service/api';
import NewConversation from './NewConversation';
import { AccountContext } from '../../../context/AccountProvider';

const Component = styled(Box)`
height: 78vh;
overflow: overlay;
`
const MarginDivider = styled(Divider)`
margin: 0 0 0 70px;
background:#e9edef;
opacity: 0.6;
`


const Conversation = ({ text }) => {

    const [users, setUsers] = useState([])

    const { account, socket, setActiveUsers } = useContext(AccountContext)

    useEffect(() => {
        const fetchData = async () => {
            const response = await getUsers();
            const filterData = response.filter((user) => {
                return user.name?.toLowerCase().includes(text?.toLowerCase());
            })
            setUsers(filterData);
        }
        fetchData();
    }, [text]);

    useEffect(() => {
        socket.current.emit('addUsers', account);
        socket.current.on('getUsers', users => {
            setActiveUsers(users);
        })
    }, [account])

    return (
        <Component>
            {
                users.map(user => {
                    return (
                        user.sub !== account.sub &&
                        <>
                            <NewConversation user={user} />
                            <MarginDivider />
                        </>

                    )
                })
            }
        </Component>
    )
}

export default Conversation