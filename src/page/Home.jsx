import React from "react";
import HeroSection from "../Components/HeroSection";
import FeatureSections from "../Components/FeatureSections";
import BlogSections from "../Components/BlogSections";
import TeamSections from "../Components/TeamSections";
import Testimonials from "../Components/Testimonials";
import NewsletterSections from "../Components/NewsletterSections";
const Home = () => {
    return (
        <div>
            <HeroSection />
            <FeatureSections />
            <BlogSections />
            <TeamSections />
            <Testimonials />
            <NewsletterSections />
        </div>
    );
};

export default Home;
