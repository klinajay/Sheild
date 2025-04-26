import React, { useEffect, useState } from 'react';
import { Button } from "../components/ui/button";
import ComplaintCard from '../components/ui/ComplaintCard';
import { useComplaint } from '../contextApi/complaintContextApi';

export default function PoliceComplaintPage() {
  const [complaintData, setComplaintData] = useState([]);
  const [filterStatus, setFilterStatus] = useState('Unread'); // Default filter
  const { complaints } = useComplaint();

  useEffect(() => {
    setComplaintData(complaints);
  }, [complaints]);

  // Filter complaints based on status
  const filteredComplaints = complaintData.filter((comp) => {
    if (filterStatus === 'Unread') return comp.status === 'unread';
    if (filterStatus === 'Read') return comp.status === 'read';
    if (filterStatus === 'Processed') return comp.status === 'processed';
    return true; // If no filter, return all
  });

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar */}
      <div className="w-[300px] bg-purple-300 p-5 text-white hidden md:block">
        <h2 className="text-xl font-semibold mb-8">Police Dashboard</h2>
        
        <Button
          className={`w-full mb-4 ${filterStatus === 'Unread' ? 'bg-white text-purple-700' : 'bg-purple-500'}`}
          onClick={() => setFilterStatus('Unread')}
        >
          Unread Complaints
        </Button>
        <Button
          className={`w-full mb-4 ${filterStatus === 'Read' ? 'bg-white text-purple-700' : 'bg-purple-500'}`}
          onClick={() => setFilterStatus('Read')}
        >
          Read Complaints
        </Button>
        <Button
          className={`w-full ${filterStatus === 'Processed' ? 'bg-white text-purple-700' : 'bg-purple-500'}`}
          onClick={() => setFilterStatus('Processed')}
        >
          Processed Complaints
        </Button>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 p-5 overflow-auto">
        <h2 className="text-2xl font-bold mb-4">{filterStatus} Complaints</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredComplaints.length > 0 ? (
            filteredComplaints.map((comp) => (
              <ComplaintCard key={comp._id} complaintData={comp} />
            ))
          ) : (
            <p>No {filterStatus.toLowerCase()} complaints found.</p>
          )}
        </div>
      </div>
    </div>
  );
}
