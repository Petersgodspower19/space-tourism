import React from "react";

const CrewCard = ({ name, bio, url, role }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between text-center lg:text-left p-6">

      <div className="flex-shrink-0">
        <img
          src={url}
          alt={name}
          className="w-56 lg:w-72 h-auto rounded-lg shadow-lg mx-auto lg:mx-0"
        />
      </div>
      <div className="lg:ml-10 mt-6 lg:mt-0 max-w-lg">
        <h2 className="text-2xl lg:text-3xl font-bold uppercase">{name}</h2>
        <p className="text-xl text-gray-300 uppercase mt-2">{role}</p>
        <p className="text-gray-400 mt-4 leading-relaxed">{bio}</p>
      </div>
    </div>
  );
};

export default CrewCard;
