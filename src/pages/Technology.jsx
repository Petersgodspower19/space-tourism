import React, { useState } from 'react';
import Header from '../components/Header';
import launch from '../assets/technology/image-launch-vehicle-portrait.jpg';
import spaceport from '../assets/technology/image-spaceport-portrait.jpg';
import spacecapsule from '../assets/technology/image-space-capsule-portrait.jpg';

const technology = [
  {
    name: 'Launch vehicle',
    id: 1,
    image: launch,
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    name: 'Spaceport',
    id: 2,
    image: spaceport,
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    name: 'Space capsule',
    id: 3,
    image: spacecapsule,
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

function Technology() {
  const [activeContent, setActiveContent] = useState(technology[0]);

  const handleButtonClick = (id) => {
    const selectedContent = technology.find((content) => content.id === id);
    setActiveContent(selectedContent);
  };

  return (
    <div className="tech min-h-screen bg-black text-white">
      <Header />
      
      <h1 className="uppercase text-4xl p-6 font-bold tracking-wider mb-2"><span className="text-gray-400">03 </span>Space Launch 101</h1>

      <div className="container mx-auto flex flex-col gap-7 lg:flex-row items-center justify-between mt-16 px-6 lg:px-20">
        <div className="flex flex-row lg:flex-col gap-4 lg:gap-6">
          {technology.map((content) => (
            <button
              key={content.id}
              onClick={() => handleButtonClick(content.id)}
              className={`w-14 h-14 lg:w-20 lg:h-20 rounded-full border-2 font-bold transition-all 
                ${
                  activeContent.id === content.id
                    ? 'bg-white text-black border-white'
                    : 'bg-transparent border-gray-500 hover:border-white'
                }`}
            >
              {content.id}
            </button>
          ))}
        </div>

        <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-xl mt-8 lg:mt-0">
          <h5 className='uppercase'>The Terminology</h5>
          <h2 className="text-3xl lg:text-4xl font-bold uppercase">
            {activeContent.name}
          </h2>
          <p className="text-gray-300 mt-4 text-lg">{activeContent.description}</p>
        </div>

        <div className="flex justify-center mt-8 lg:mt-0">
          <img
            src={activeContent.image}
            alt={activeContent.name}
            className="rounded-lg shadow-lg max-w-full lg:max-h-[400px]"
          />
        </div>
      </div>
    </div>
  );
}

export default Technology;
