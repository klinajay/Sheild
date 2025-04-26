import React, { useEffect, useState } from 'react';
import { Button } from "../components/ui/button";
import ComplaintCard from '../components/ui/ComplaintCard';
import { useId } from 'react';
import { useComplaint } from '../contextApi/complaintContextApi';

export default function PoliceComplaintPage() {
  const [complaintData , setComplaintData] = useState([])
  const {complaints , setComplaints} = useComplaint()
  // const navigate = useNavigate();
  useEffect(() => {
    setComplaintData(complaints)
  },[complaints])
  function viewComplaint(id) {
    console.log(id);
    
    navigate(`/complaintDetails/${id}`)
  }
  
  function unreadComplaints() {
    var unread = complaints.filter(complaint => complaint.status === "unread");
    setComplaintData(unread);
  }

  function readComplaints() {
    var read = complaints.filter(complaint => complaint.status === "read");
    setComplaintData(read);
  }

  function processedComplaints() {
    var processed = complaints.filter(complaint => complaint.status === "processed");
    setComplaintData(processed);
  }

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <div className="w-[300px] bg-purple-300 p-5 text-white hidden md:block">
        <h2 className="text-2xl font-bold mb-4">Status</h2>
        <ul>
          <Button className='bg-purple-700 py-4 px-8 font-bold hover:text-purple-700 hover:bg-white w-full' onClick = {unreadComplaints} >Unread</Button>
          <br />
          <Button className='bg-purple-700 py-4 px-10 mt-5 font-bold hover:text-purple-700 hover:bg-white w-full'  onClick = {readComplaints}>Read</Button>
          <br />
          <Button className='bg-purple-700 py-4 px-6 mt-5 font-bold hover:text-purple-700 hover:bg-white w-full'  onClick = {processedComplaints}>Processed</Button>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 bg-gray-100 p-5 overflow-auto">
        <h2 className="text-2xl font-bold mb-4">Complaints</h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Add Cards Dynamically */}
          
          {complaintData.length > 0 ? (
            complaintData.map((comp) => (
              <ComplaintCard complaintData={comp} viewComplaint={viewComplaint} key={comp._id} />
            ))
          ) : (
            <p>No complaints found</p>
          )}
          {/* More Complaint Cards can be added here */}
        </div>
      </div>
    </div>
  );
}
