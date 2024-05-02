import React from "react";
import Card from "../Cards/cardComponent";
import SubCard from "../Cards/subComponents";

const Cards: React.FC = () => {
  return (
    <div className="md:grid md:grid-cols-3 gap-6 mx-6 my-6  ">
      <div className="bg-gray-800 text-black rounded-md p-2">
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
      <div className="bg-gray-800 text-black rounded-md p-2">
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
      <div className="bg-gray-800 text-black rounded-md p-2">
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
      <div className="bg-gray-800 text-black rounded-md p-2">
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
      <div className="bg-gray-800 text-black rounded-md p-2">
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
      <div className="bg-gray-800 text-black rounded-md p-2">
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
      <div className="bg-gray-800 text-black rounded-md p-2">
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
    </div>
  );
};

export default Cards;
