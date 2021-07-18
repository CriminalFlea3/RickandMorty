import React from "react";
import Carousel from "react-multi-carousel";
import Card from "../Cards/Card";

export default function SecondCards({ characters }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <>
      <Carousel
        responsive={responsive}
        infinite={true}
        transitionDuration={1000}
        className='h-auto pb-11'
      >
        <Card
          img="https://rickandmortyapi.com/api/character/avatar/671.jpeg"
          h={"h-96"}
          w={"w-96"}
          pt={"pt-20"}
          pl={"pl-10"}
        />
        {characters.results?.map((card) => (
          <Card
            img={card.image}
            key={card.id}
            h={"h-96"}
            w={"w-96"}
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
      </Carousel>
      <div className="flex justify-center pt-16">
        <p className="text-gray-300 font-extrabold">
          ___________________________________________________________________________________________________________________________________________________
        </p>
      </div>
    </>
  );
}
