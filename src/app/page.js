"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "../Assets/home.png";
import data from "../Assets/state.json";
import { useState,useEffect } from "react";

export default function Home() {
  const [loggedIn,setLogin]=React.useState(false);
  
  return (
    <>
    
      <div className="flex flex-row">
        <div className="flex flex-col m-10 h-screen w-screen bg-slate-300">
          <div className="m-10 font-bold text-3xl text-center ">Virtual healthcare for you.</div>
          <div className="m-5 text-sm font-light">
            Beneath the moss-draped eaves of a forgotten observatory, moonlight
            pooled on a celestial map, its faded constellations whispering of
            whispered galaxies. A lone astronomer, his beard dusted with
            stardust, squinted through a tarnished telescope, searching for an
            echo in the cosmic dark, a tremor in the fabric of reality, a sign
            that he wasn't the only sentient speck amongst the infinite tapestry
            of stars.
          </div>
          {loggedIn?<Link href="/booking" className="btn m-10 btn-md btn-outline bg-white">Book a Home Nurse</Link>:<Link href="/loginCustomer" className="btn m-10 btn-md btn-outline bg-white">Sign In</Link>}
        </div>
        <Image
          width={500}
          height={300}
          priority
          src={img1}
          className="bg-inherit"
        />
      </div>
    </>
  );
}
