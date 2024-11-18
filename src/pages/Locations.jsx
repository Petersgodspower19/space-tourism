import React, { useState } from "react";
import Header from "../components/Header";
import moon from "../assets/destination/image-moon.png";
import mars from "../assets/destination/image-mars.png";
import titan from "../assets/destination/image-titan.png";
import europa from "../assets/destination/image-europa.png";

const destinations = [
  {
    name: "Moon",
    id: 1,
    image: moon,
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    travel: "3 days",
  },
  {
    name: "Mars",
    id: 2,
    image: mars,
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    travel: "9 months",
  },
  {
    name: "Europa",
    id: 3,
    image: europa,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    travel: "3 years",
  },
  {
    name: "Titan",
    id: 4,
    image: titan,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    travel: "7 years",
  },
];

function Locations() {
  const [activeDestination, setActiveDestination] = useState(destinations[0]);

  const handleButtonClick = (id) => {
    const selectedContent = destinations.find((content) => content.id === id);
    setActiveDestination(selectedContent);
  };

  return (
    <div className="dest min-h-screen bg-black text-white">
      <Header />


      <div className="flex flex-col lg:flex-row justify-center items-center lg:gap-10 mt-10 px-4">
       
        <div className="flex-shrink-0 mb-6 lg:mb-0">
        <h1 className="uppercase text-4xl font-bold tracking-wider mb-2"><span className="text-gray-400">01</span> Pick Your Destination</h1>
          <img
            src={activeDestination.image}
            alt={activeDestination.name}
            className="w-64 lg:w-96 h-auto mx-auto"
          />
        </div>

        
        <div className="lg:w-1/2">
          
          <div className="flex justify-center lg:justify-start gap-6 uppercase mb-6">
            {destinations.map((destination) => (
              <p
                key={destination.id}
                onClick={() => handleButtonClick(destination.id)}
                className={`cursor-pointer ${
                  activeDestination.id === destination.id
                    ? "underline text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {destination.name}
              </p>
            ))}
          </div>

          <div>
            <h2 className="text-3xl lg:text-5xl font-bold uppercase">
              {activeDestination.name}
            </h2>
            <p className="text-gray-400 mt-4 mb-2 leading-relaxed">
              {activeDestination.description}
            </p>
            <hr />
            <div className="flex justify-between lg:justify-start lg:gap-16 mt-6 uppercase">
              <div>
                <p className="text-sm text-gray-500">Avg. Distance</p>
                <p className="text-2xl font-bold">{activeDestination.distance}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Est. Travel Time</p>
                <p className="text-2xl font-bold">{activeDestination.travel}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Locations;
