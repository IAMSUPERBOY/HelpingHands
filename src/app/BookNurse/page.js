"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import img1 from "../../Assets/home.png";


export default function Home() {
  const [loggedIn,setLogin]=React.useState(false);
  

  return (
    <>
    
      <div className="flex flex-row">
        <div className="flex flex-col m-10 h-screen w-screen bg-slate-300">
          <div className="m-10 font-bold text-3xl text-center ">Virtual healthcare for you.</div>
          <div className="m-5 text-sm font-light">
          At Helping Hands, we are committed to providing
            personalized and compassionate care to enhance your overall health.
            Our experienced team of healthcare professionals employs
            state-of-the-art technology and a patient-centric approach to
            deliver top-notch medical services. From preventive care to
            specialized treatments, we strive to meet your unique healthcare
            needs. Your journey to optimal health begins here, where we
            prioritize your comfort and satisfaction. Experience excellence in
            healthcare with us, where every individual receives the attention
            and care they deserve. Your health, our commitment.
          </div>
          <Link href="/booking" className="btn m-10 btn-md btn-outline bg-white">Book a Home Nurse</Link>
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
