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
            date: "2024-01-15" // Date in YYYY-MM-DD format
        },
        {
            id: 2,
            title: " National Unity Day",
            imageUrl: "/src/images/image3.jpeg",
            description: "NIT Calicut joined the observance of National Unity Day on October 31st to celebrate the birth anniversary of the former Deputy Prime Minister, Sardar Vallabhai Patel. NSS volunteers of all three units of NITC organised a ‘Unity Run’ showcasing the significance of cooperation and unity among the individuals. The event was inaugurated by Dr. Anantha Singh T S, Dr. Praveen Kumar G and Dr. Lintu Rajan, NSS NITC programme officers.  The Unity Run commenced from the centre circle at 7.30 a.m. and headed to Kattangal junction. The students returned via the East Campus gate. ",
            date: "2023-10-31" // Date in YYYY-MM-DD format

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
                        <p className="p">{activity.description}</p>
                        <Link to={`/activity/${activity.id}`}>Read More</Link>
                    </div>
                ))}
            </div>
            
        

            <Footer /> {/* Include footer component */}
        </>
    );
};

export default Activities;
