import astrologerModel from "../models/astrologerModel.mjs";

// Function to add a new astrologer
const addAstrologer = async (req,res) =>{

    try {
        const data = req.body; // Extract data from body
        const {email} = req.body; // Extract email from body

        // for checking Astrologer is available or not using email because it's unique
        const checkAstrologerIs = await astrologerModel.findOne({email : email});

        // if available then Astrologer not addable 
        if(checkAstrologerIs) {
            return res.status(200).send({message : "Astrologer already exist"})
        }

        // if not available, create a new astrologer
        const createAstrologer = await astrologerModel.create(data);
        return res.status(200).send({
            status : "ok", 
            message : createAstrologer
        })

    } catch (error) {
        // if found any error found then throw an error
        return res.status(500).send({
            status : "Failed",
            message : error.message
        })
    }
}

// Function to assign a user to an astrologer
const assignUser = async (req,res) => {
    try {
        // Find all astrologers and sort them by flowCount in descending order
        let astrologers = await astrologerModel.find({}).sort({ flowCount: -1 });

        // Check if any astrologers are available
        if (!astrologers.length) {
            return res.status(404).send({ message: "No astrologers found" });
        }

        // Get the astrologer with the highest flowCount
        let assignedAstrologer = astrologers[0];

        // Increment the flowCount of the assigned astrologer
        assignedAstrologer.flowCount += 1;

        res.status(200).send({ astrologerId: assignedAstrologer._id });
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
};

const toggleTopAstrologer = async (req, res) => {
    try {
        const { astrologerId } = req.params; // Extract astrologerId from path params

        // Find the astrologer by ID
        let astrologer = await astrologerModel.findById(astrologerId);

        // Toggle the top status of the astrologer
        astrologer.top = !astrologer.top;

        // Return the updated astrologer
        res.status(200).send({ message : astrologer });
    } catch (error) {
        res.status(500).send({ message : error.message });
    }
};

export {addAstrologer, assignUser, toggleTopAstrologer}