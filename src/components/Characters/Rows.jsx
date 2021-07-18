import React from "react";
import Card from "../Cards/Card";

export default function Rows({ characters }) {
  return (
    <>
      <div className="grid grid-cols-5 bg-gray-100 ">
        {characters.results?.map((card) => (
          <Card
            img={card.image}
            key={card.id}
            h={"h-64"}
            w={"w-64"}
            pt={"pt-20"}
            pl={"pl-10"}
            name={card.name}
            species={card.species}
            status={card.status}
            gender={card.gender}
            location={card.location.name}
            origin={card.origin.name}
          />
        ))}
      </div>
    </>
  );
}
