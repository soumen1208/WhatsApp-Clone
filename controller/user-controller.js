import User from "../Model/User.js";


export const addUser = async (request, response) => {
    try {
        let exist = await User.findOne({ sub: request.body.sub })
        // console.log(exist);
        if (exist) {
            response.status(200).json({
                msg: "user already exist"
            })
            return;
        }
        const newUser = new User(request.body)
        await newUser.save();
        response.status(200).json(newUser)
        console.log(newUser);
    } catch (error) {
        console.log(error);
        response.status(500).json(error.message)
    }
}

export const getUsers = async (request, response) => {
    try {
        const users = await User.find({});
        response.status(200).json(users);
    } catch (error) {
        console.log(error);
        response.status(500).json(error.message)
    }
}







