import mongoose from 'mongoose';
import 'dotenv/config';


const Connection = async () => {

    const URL = process.env.MONGO_URL;

    try {
        await mongoose.connect(URL, { useUnifiedTopology: true })
        console.log("Database connected successfully");
    } catch (error) {
        console.log('error while connecting with the database' + error.message);
    }
}

export default Connection





















//-----------------------------------------------------------------------------------------------------------------------------------------------------------
// const username = process.env.USER_NAME;
// const password = process.env.PASSWORD;
// const URL = 'mongodb+srv://soumenmahato4454:Soumen1208@whatsapp-clone.v3ehr.mongodb.net/'
// const URL = 'mongodb+srv://soumenmahato4454:Soumen1208@whatsapp-clone.v3ehr.mongodb.net/?retryWrites=true&w=majority&appName=whatsapp-clone'
