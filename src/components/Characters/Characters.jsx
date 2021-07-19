import React from "react";

import Rows from "./Rows";

export default function Characters({ characters2, search }) {
  
  return (
    <>
      <div className="">
        <p id='characters' className="text-4xl text-gray-800 font-bold pl-20 pt-16">
          Characters
        </p>
        <div>
            {
              search
                ? <Rows characters={search} />
                : <Rows characters={characters2} />   
            }
        </div>
      </div>
    </>
  );
}
