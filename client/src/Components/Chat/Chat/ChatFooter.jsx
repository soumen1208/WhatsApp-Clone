import { Box, InputBase, styled } from '@mui/material'
import React, { useEffect } from 'react'
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import AttachFileOutlinedIcon from '@mui/icons-material/AttachFileOutlined';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import { uploadFile } from '../../../Service/api';

const Container = styled(Box)`
height: 55px;
background: #ededed;
display: flex;
width: 97%;
align-items: center;
margin-top: 6.1px;
padding: 0 15px;
color: #564e4d ;
& > * {
margin: 5px
}
`
const InputBox = styled(Box)`
background: #FFFFFF;
border-radius:18px;
width: calc(94% - 50px);
height:40px;
`

const InputStyle = styled(InputBase)`
margin-left: 20px;
margin-top: 5px;
width: 95%
`
const AttachFile = styled(AttachFileOutlinedIcon)`
transform: rotate(40deg)
`

const ChatFooter = ({ sendText, setValue, value, file, setFile, setImage }) => {


    const onFileChange = (e) => {
        console.log(e);
        setFile(e.target.files[0]);
        setValue(e.target.files[0].name);
    }

    useEffect(() => {
        const setFiles = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                let response = await uploadFile(data);
                console.log(response);
                setImage(response.data)
            }
        }
        setFiles();
    })

    return (
        <Container>
            <EmojiEmotionsOutlinedIcon />
            <label htmlFor="fileInput">
                <AttachFile />
            </label>
            <input
                type="file"
                id='fileInput'
                style={{ display: "none" }}
                onChange={(e) => onFileChange(e)}
            />
            <InputBox>
                <InputStyle
                    placeholder='Type a message'
                    onChange={(e) => setValue(e.target.value)}
                    onKeyPress={(e) => sendText(e)}
                    value={value}
                />
            </InputBox>
            <KeyboardVoiceIcon />
        </Container>
    )
}

export default ChatFooter