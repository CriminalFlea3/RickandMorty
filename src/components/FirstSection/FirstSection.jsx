import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Card from "../Cards/Card";

export default function FirstSection({ mitical }) {
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
      <div className="w-screen h-96 cardsContainer">
        <p className="text-4xl text-white font-bold pl-3 pt-16">
          Mythological Creatures
        </p>
        <Carousel
          responsive={responsive}
          infinite={true}
          transitionDuration={1000}
          className='h-auto pb-11'
        >
          <Card
            img="https://rickandmortyapi.com/api/character/avatar/368.jpeg"
            h={"h-44"}
            w={"w-80"}
            pt={"pt-5"}
            pl={"pl-20"}
          />
          {mitical.results?.map((card) => (
            <Card
              img={card.image}
              key={card.id}
              h={"h-44"}
              w={"w-80"}
              pt={"pt-5"}
              pl={"pl-20"}
              name={card.name}
              species={card.species}
              status={card.status}
              gender={card.gender}
              location={card.location.name}
              origin={card.origin.name}
              text={'text-sm'}
            />
          ))}
        </Carousel>
      </div>
    </>
  );
}
