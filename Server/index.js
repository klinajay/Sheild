// Initiate server
import express from "express";
import dotenv from "dotenv"; // Load environment variables
import { connect } from "./config/database.js"; // Correct import for DB connection
import { getComplaints , markProcessed, markRead} from "./controllers/complaints.js";
import {Complaint} from "./models/Complaint.js";
import cors from "cors";

dotenv.config();

const app = express();

// Middleware to parse JSON request bodies
app.use(express.json());
app.use(cors());

// Activate the server on the port defined in the environment variable or fallback to 3000
const PORT = process.env.PORT || 3000;

// Connect to the MongoDB database
connect();

// Root route for simple success message
app.get('/', (req, res) => {
    res.send("Server started successfully");
});

// Define the route for getting complaints
app.post("/api/police/getComplaints", getComplaints);
app.post("/api/police/markProcessed", markProcessed);
app.post("/api/police/markRead", markRead);
app.get("/api/police/test", (req, res) => {
    res.json({ message: "Test route is working!" });
});
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'path-to-your-index.html'));
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});

import { Police } from "./models/Police.js";

async function createPolice() {
    try {
        const police =  new Police({
            stationName : "Kolhspur police station",
            officerInCharge : "john doe",
            city : "Kolhapur",
            state : "Maharashtra",
            district : "Kolhapur",
            location : "Near Rankala Lake",
            contactNumber : "1234567890",
            email : "RankalaPolice@gmail.com",
            pincode : "411312"
        })
        await police.save()
        console.log("saved the data");
        
    } catch (error) {
        console.log(error.message);
        
    }
}



const insertDummyComplaints = async () => {
    const complaints = [
        {
            Title: "Harasment",
            location: "Park near city center",
            Reason: "Harassment",
            Proof: "https://example.com/proof-image-1.jpg",
            Date: new Date(),
            status: "unread",
            victimId: "603f5a8c8f1a2c001f8b4567" ,
            policeStationId : "66f59b74501703d71ba87a09"
        },
        {
            Title: "Harasment",
            location: "Public transport",
            Reason: "Inappropriate behavior",
            Proof: "https://example.com/proof-video-2.mp4",
            Date: new Date(),
            status: "unread",
            victimId: "603f5a8c8f1a2c001f8b4568" ,
            policeStationId : "66f59b74501703d71ba87a09"
        },
        {
            Title: "Harasment",
            location: "School campus",
            Reason: "Stalking",
            Proof: null, // No proof available
            Date: new Date(),
            status: "unread",
            victimId: "603f5a8c8f1a2c001f8b4569",
            policeStationId:
            "66f59b74501703d71ba87a09"
        }
    ];

    try {
        const result = await Complaint.insertMany(complaints);
        console.log("Dummy complaints inserted:", result);
    } catch (error) {
        console.error("Error inserting dummy complaints:", error);
    }
};

// insertDummyComplaints();

// createPolice()