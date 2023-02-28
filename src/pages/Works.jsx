import React from "react";
import works from "../constants/works";

const Works = () => {
  return (
    <div>
      <p className="text-2xl font-gothamm">Works</p>
      <div className="mt-6">
        {works.map((work, index) => {
          return (
            <div
              className="flex flex-col md:flex-row border rounded-md my-6"
              key={index}
            >
              <img
                src={work.image}
                className="md:w-1/2 rounded-t-md md:rounded-l-md"
              />
              <div className="p-4">
                {work.name ? (
                  <a href={work.link} className="text-md font-bold">
                    {work.name}
                  </a>
                ) : (
                  <h1 className="text-md font-bold">{work.name}</h1>
                )}
                <p className="mt-2">{work.detail}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Works;
