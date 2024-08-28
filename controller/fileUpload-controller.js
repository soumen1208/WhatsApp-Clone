import grid from 'gridfs-stream';
import mongoose from 'mongoose';

// const url = 'http://localhost:8000'
const url = ''

let gfs, gridFsBucket;

const conn = mongoose.connection;
conn.once('open', () => {
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'images',
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('images');
})
// =================================================================================
export const uploadFile = async (request, response) => {
    if (!request.file)
        return response.status(404).json("File not found");

    const imageUrl = `${url}/file/${request.file.filename}`;

    response.status(200).json(imageUrl);
}

// ==================================================================================
export const getImage = async (request, response) => {
    try {
        const file = await gfs.files.findOne({ filename: request.params.filename })
        const readStream = gridFsBucket.openDownloadStream(file._id);
        readStream.pipe(response);
    } catch (error) {
        response.status(500).json(error.messsage)
    }

}











