import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema({
    conversationId: {
        type: String,
    },
    senderId: {
        type: String,
    },
    recieverId: {
        type: String,
    },
    text: {
        type: String,
    },
    type: {
        String,
    }

},
    {
        timestamps: true
    }
);

const Message = mongoose.model('Message', messageSchema);
export default Message;











