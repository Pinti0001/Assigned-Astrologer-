import userModel from "../models/userModel.mjs";
import { assignUser, toggleTopAstrologer } from "./astrologerController.mjs";

const createUser = async (req,res) =>{

    try {
        const data = req.body;
        const {email} = req.body;

        // for checking user is available or not using email because it's unique
        const checkUserIs = await userModel.findOne({email : email});

        // if available then user not createable
        if(checkUserIs) {
            return res.status(200).send({message : "user already exist"})
        }

        // if the user doesn't exist, create a new user
        const createUser = await userModel.create(data);

        // Populate the assignedAstrologer field in the newly created user
        await createUser.populate("assignedAstrologer");

        return res.status(200).send({
            status : "ok", 
            message : createUser
        })

    } catch (error) {
        // if found any error found then throw an error
        return res.status(500).send({
            status : "Failed",
            message : error.message
        })
    }
}

export {createUser}