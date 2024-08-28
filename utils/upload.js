import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';
import 'dotenv/config';


const storage = new GridFsStorage({
    url: process.env.MONGO_URL,
    options: { useNewUrlParser: true },
    file: (req, file) => {
        const match = ["image/png", "image/jpeg", "image/webp", "image/jpg"];

        if (match.indexOf(file.mimetype) === -1) {
            const filename = `${Date.now()}-file-${file.originalname}`;
            return filename;
        }

        return {
            bucketName: 'images',
            filename: `${Date.now()}-file-${file.originalname}`
        };
    }
});

const upload = multer({ storage });
export default upload;



