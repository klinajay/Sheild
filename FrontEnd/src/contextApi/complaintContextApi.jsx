// contextApi/complaintContextApi.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';

const ComplaintContext = createContext();

export const ComplaintProvider = ({ children }) => {
    const [complaints, setComplaints] = useState([]);

    const fetchComplaints = async () => {
        try {
            const response = await fetch("http://localhost:4000/api/police/getComplaints", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({_id: "66f59b74501703d71ba87a09"})
            });
            if (!response.ok) {
                throw new Error("Failed to fetch complaints");
            }
            const data = await response.json();
            setComplaints(data.complaints);
        } catch (error) {
            console.error("Error fetching complaints:", error);
        }
    };

    useEffect(() => {
        fetchComplaints();
    }, []);

    return (
        <ComplaintContext.Provider value={{ complaints, setComplaints }}>
            {children}
        </ComplaintContext.Provider>
    );
};

export const useComplaint = () => {
    return useContext(ComplaintContext);
};
