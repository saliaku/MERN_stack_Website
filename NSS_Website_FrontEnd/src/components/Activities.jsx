import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "./Header"; // Import header component from homepage
import Footer from "./Footer"; // Import footer component from homepage
import "../styles/activities.css"; // Import activities page styles

const Activities = (props) => {

    // Sample activities data
    const activities = [
        {
            id: 1,
            title: "Activity 1",
            imageUrl: "image-url-1.jpg",
            description: "Description of Activity 1.",
            date: "2023-01-15" // Date in YYYY-MM-DD format
        },
        {
            id: 2,
            title: "Activity 2",
            imageUrl: "../images/image3.jpeg",
            description: "Description of Activity 2.",
            date: "2023-02-21" // Date in YYYY-MM-DD format
        },
        // Add more activities as needed
    ];

    // / Sort activities by date in ascending order
    activities.sort((a, b) => new Date(a.date) - new Date(b.date));

    //activities would be printed in the order in which they happened 
    // the latest event coming on top 
    return (
        <>
            <Header /> {/* Include header component */}

       
            <div className="activities-container">
                {activities.map((activity) => (
                    <div key={activity.id} className="activity-card">
                        <img src={activity.imageUrl} alt={activity.title} />
                        <h2>{activity.title}</h2>
                        <p>{activity.description}</p>
                        <Link to={`/activity/${activity.id}`}>Read More</Link>
                    </div>
                ))}
            </div>
            
        

            <Footer /> {/* Include footer component */}
        </>
    );
};

export default Activities;
