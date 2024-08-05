import React from "react";
import Herosection from "./Herosection";
import Card4 from "./Card4";
import ExploreSection from "./sectionsHero";
import FeaturedStory from "./FeatureStory";
import FeaturedSection from "./MoreFeature";
import RegisterSection from "./RegisterSection";
import TeacherResources from "./Topic";
import BlogLayout from "../blog/BlogHero";


function MainHome(){
    return(
        <>
        <div className="bg-gray-200 ">
        
        <Herosection />
        <ExploreSection/>
        <Card4/>
        <FeaturedSection/>
        <RegisterSection/>
        <TeacherResources/>
        </div>

        </>
    );

}
export default MainHome ;