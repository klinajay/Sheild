import { useComplaint } from "../../contextApi/complaintContextApi.jsx";

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from './button';
import { useNavigate } from 'react-router-dom';

export default function ComplaintCard({ complaintData }) {
    const navigate = useNavigate(); // Initialize the navigate function

    // Function to handle the click event
    const viewDetails = async() => {
       if(complaintData?.status != "read" ){
        try {
            const response = await fetch("http://localhost:4000/api/police/markRead", {
            method: "POST",
            headers : {
              "Content-Type" : "application/json"
            },
            body : JSON.stringify({_id : complaintData._id})
          })
          if(!response.ok) {
            alert("Error while marking as read !")
          }
        //   alert("Marked as processed")
        } catch (error) {
          console.log("Error mark as processed", error.message);
          
        }
       }
       useComplaint();
        navigate(`/complaintDetails/${complaintData._id}`); // Navigate to the complaint details page with the specific ID
    };

    const markProcessed = async() => {
      try {
          const response = await fetch("http://localhost:4000/api/police/markProcessed", {
          method: "POST",
          headers : {
            "Content-Type" : "application/json"
          },
          body : JSON.stringify({_id : complaintData._id})
        })
        if(!response.ok) {
          alert("Error while marking as processed !")
        }
        alert("Marked as processed")
      } catch (error) {
        console.log("Error mark as processed", error.message);
        
      }
    }

    return (
        <div>
            <Card className="w-400 h-400 p-6">
                <CardHeader>
                    <CardTitle>
                        Complaint <span className='font-bold text-sm'>#{complaintData?._id}</span>
                    </CardTitle>
                    <CardDescription>Date: {complaintData?.Date}</CardDescription>
                </CardHeader>
                <CardFooter className='px-0'>
                    {/* Update the button to use the viewDetails function */}
                    <Button
                        className='rounded-full m-2 bg-white hover:text-purple-700 hover:bg-white text-black border-purple-700'
                        onClick={viewDetails} // Call the viewDetails function on click
                    >
                        View Details
                    </Button>
                    <Button  className='rounded-full bg-purple-700 text-white hover:bg-white hover:text-purple-700' disabled={complaintData?.status === "processed"}  onClick = {markProcessed}>
                        Mark as processed
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
