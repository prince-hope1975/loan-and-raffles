// pages/index.tsx

import React from "react";
import Card from "../Cards/cardComponent";
import SubCard from "../Cards/subComponents";

const Cards: React.FC = () => {
  return (
    <div className="bg-gray-800 text-black rounded-md p-4 container mx-auto mt-8">
      <Card
        imageUrl="https://via.placeholder.com/400"
        title="#1234"
        description="#1234"
      >
        <SubCard
          title1="Borrow"
          description1="2000"
          title2="Earn"
          description2="20%"
          title3="Timeframe"
          description3="30 days"
        />
      </Card>
    </div>
  );
};

export default Cards;
