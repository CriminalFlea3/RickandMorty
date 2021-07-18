import React from "react";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

export default function Card(props) {
  return (
    <>
      <div className=''>
        <div
          className={`${props.pt} ${props.pl}`}
        >
          <Flippy flipOnHover={true} >
            <FrontSide className={`${props.w} ${props.h} rounded-2xl shadow-xl`}>
              <img
                src={props.img}
                alt=""
                className={`${props.w} ${props.h} rounded-2xl shadow-xl`}
              />
            </FrontSide>
            <BackSide
              style={{ backgroundColor: '#F4F9F4'}}>
              <p className='font-bold'>{props.name}</p>
              <p className={props.text}><span className='font-bold'>Species: </span>{props.species}</p>
              <p className={props.text}><span className='font-bold'>Status: </span>{props.status}</p>
              <p className={props.text}><span className='font-bold'>Gender: </span>{props.gender}</p>
              <p className={props.text}><span className='font-bold'>Location: </span>{props.location}</p>
              <p className={props.text}><span className='font-bold'>Origin: </span>{props.origin}</p>
            </BackSide>
          </Flippy>
          
        </div>
      </div>
    </>
  );
}
