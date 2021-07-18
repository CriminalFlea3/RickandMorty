import React from "react";
import Carousel from "react-multi-carousel";

import Rows from "./Rows";

export default function Characters({ characters2, search }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
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
      <div className="">
        <p id='characters' className="text-4xl text-gray-800 font-bold pl-20 pt-16">
          Characters
        </p>
        <div
          style={{
            paddingBottom: "30px",
            position: "relative",
          }}
        >
          <Carousel
            responsive={responsive}
            infinite={true}
            showDots
            arrows={false}
            renderDotsOutside
          >
            {
              search
                ? <Rows characters={search} />
                : <Rows characters={characters2} />   
            }
            
          </Carousel>
        </div>
      </div>
    </>
  );
}
