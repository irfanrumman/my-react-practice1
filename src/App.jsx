import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BioData from "./components/BioData";

// data
const bioDataInfo = [
  {
    name: "Irfan",
    email: "irfan@gmail.com",
    phone: "+8801254874",
    skills: ["HTML", "CSS", "javaScript", "React", "Redux", "Nextjs"],
    interests: ["Theology", "Reading", "Writing", "Football", "Traveling"],
  },
  {
    name: "laban",
    email: "laban@gmail.com",
    phone: "+8801486487",
    skills: ["HTML", "CSS", "javaScript", "React"],
    interests: ["Theology", "Reading", "Writing", "Football"],
  },
  {
    name: "Rfai",
    email: "rafi@gmail.com",
    phone: "+880125487864",
    skills: ["HTML", "CSS", "javaScript"],
    interests: ["Theology", "Reading"],
  },
  {
    name: "Kablu",
    email: "kablu@gmail.com",
    // phone: "+880154567896",
    skills: ["HTML", "CSS", "javaScript", "Cooking", "Driving"],
    interests: ["Fishing", "Traveling"],
  },
];

const EListener = () => {
  alert("Event has been triggerd!");
};
function App() {
  return (
    <>
      {bioDataInfo.map((bio, ind) => (
        <div key={ind}>
          <BioData
            name={bio.name}
            email={bio.email}
            phone={bio.phone}
            skills={bio.skills}
            interests={bio.interests}
          />
          <hr />
          <hr />
        </div>
      ))}
      <button onClick={EListener}>Click Me</button>
    </>
  );
}

export default App;
