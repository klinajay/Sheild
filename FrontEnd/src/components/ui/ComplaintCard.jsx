import { useNavigate } from 'react-router-dom';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from './button';

export default function ComplaintCard({ complaintData, onMarkRead, onMarkProcessed }) {
    const navigate = useNavigate(); // Initialize the navigate function

    // Function to handle the click event for viewing details
    const viewDetails = async() => {
        if (complaintData?.status !== "read") {
            onMarkRead(complaintData._id);  // Use a prop function to mark as read
        }
        navigate(`/complaintDetails/${complaintData._id}`);  // Navigate to the complaint details page
    };

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
                    <Button 
                        className='rounded-full bg-purple-700 text-white hover:bg-white hover:text-purple-700'
                        disabled={complaintData?.status === "processed"}
                        onClick={() => onMarkProcessed(complaintData._id)} // Use prop for marking as processed
                    >
                        Mark as processed
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}
