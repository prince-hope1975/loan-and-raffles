// components/SubCard.tsx

import React from "react";

interface SubCardProps {
  title1: string;
  description1: string;
  title2: string;
  description2: string;
  title3: string;
  description3: string;
}

const SubCard: React.FC<SubCardProps> = ({
  title1,
  description1,
  title2,
  description2,
  title3,
  description3,
}) => {
  return (
    <div className=" flex justify-center gap-6 rounded-md px-10 bg-gray-700 mt-4">
      <div className="mb-4  ">
        <h1 className="text-lg font-semibold mb-1">{title1}</h1>
        <p className="text-white">{description1}</p>
      </div>
      <div className="mb-4">
        <h1 className="text-lg font-semibold mb-1">{title2}</h1>
        <p className="text-white">{description2}</p>
      </div>
      <div>
        <h1 className="text-lg font-semibold mb-1">{title3}</h1>
        <p className="text-white">{description3}</p>
      </div>
    </div>
  );
};

export default SubCard;
