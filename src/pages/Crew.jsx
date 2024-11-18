import React from "react";
import Header from "../components/Header";
import douglas from "../assets/crew/image-douglas-hurley.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";
import victor from "../assets/crew/image-victor-glover.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import CrewCard from "../components/CrewCard";

const crew = [
  {
    name: "Douglas Hurley",
    image: douglas,
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    name: "Mark Shuttleworth",
    image: mark,
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    name: "Victor Glover",
    image: victor,
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    name: "Anousheh Ansari",
    image: anousheh,
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

function Crew() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "custom-dots",
    arrows: false, 
  };

  return (
    <div className="crew min-h-screen bg-black text-white overflow-x-hidden">
      <Header />
      <div className="text-center p-6">
      <h1 className="uppercase text-4xl font-bold tracking-wider mb-2"><span className="text-gray-400">02</span> Meet Your Crew</h1>
        <p className="text-gray-400 mt-2">Swipe to view the crew members</p>
      </div>
      <Slider {...settings} className="max-w-4xl mx-auto">
        {crew.map((member, index) => (
          <CrewCard
            key={index}
            name={member.name}
            bio={member.bio}
            url={member.image}
            role={member.role}
          />
        ))}
      </Slider>
    </div>
  );
}

export default Crew;
