import React from "react";
import './App.css';
import CoverPhoto from './components/CoverPhoto';
import StorySection from './components/StorySection';
import PhotoCollage from "./components/PhotoCollage";
import OptionsSection from "./components/OptionsSection";
import DressCode from "./components/DressCode";
import RSVPForm from "./components/RSVPForm";
import Registry from "./components/Registry";
import MessageSection from "./components/MessageSection"


function App() {
    return (
        <div>
            <CoverPhoto />
            <StorySection />
            <PhotoCollage />
            <MessageSection />
            <Registry />
            <OptionsSection />
            <DressCode />
            <RSVPForm />


        </div>
    )
}

export default App;