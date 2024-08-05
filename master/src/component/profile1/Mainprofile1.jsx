import React from "react";
import ProfilePage from "./HeroProfile";
import SchedulePage from "./SchedulePage";
import IsraaProfileAndActivities from "./Israa";
import ActivityDetails from "./ActivityDetails";

function Mainprofile1(){
    return(

        <>
        <div className="bg-gray-100">
        <ProfilePage/>
        <IsraaProfileAndActivities/>
        <SchedulePage/>
        </div>

        </>
    )

}
export default Mainprofile1 ;
