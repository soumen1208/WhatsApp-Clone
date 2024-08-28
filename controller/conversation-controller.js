import Conversation from "../Model/Conversation.js";


export const setNewConversation = async (request, response) => {
    try {

        const senderId = request.body.senderId;
        const recieverId = request.body.recieverId;

        const exist = await Conversation.findOne({ members: { $all: [recieverId, senderId] } })

        if (exist) {
            return response.status(200).json('conversition already exist')
        }

        const newConversation = new Conversation({
            members: [senderId, recieverId]
        })

        await newConversation.save();

        return response.status(200).json('conversation saved successfully')

    } catch (error) {
        console.log(error);
        response.status(500).json(error.message);
    }
}

export const getConversation = async (request, response) => {
    try {

        const senderId = request.body.senderId;
        const recieverId = request.body.recieverId;

        let conversation = await Conversation.findOne({ members: { $all: [recieverId, senderId] } })
        return response.status(200).json(conversation)
    } catch (error) {
        console.log(error);
        response.status(500).json(error.message)
    }
}








