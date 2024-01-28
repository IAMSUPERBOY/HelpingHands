"use client";
import react, { useState } from "react";
import Link from "next/link";
export default function Page() {
    
    const [booked,SetBookingStatus]=useState(false);
    const ClickHandler=()=>
    {
        SetBookingStatus(true);
        
    }
  return (
    <>
      <div className="flex flex-row">
        <div className=" flex flex-col m-5">
          <h1 className="text-3xl text-center">Book a Home Nurse now</h1>
          <h2 className="text-sm font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Yet,
            from this chaos of unknowing, rose Aristotle, a man who built an
            intellectual palace to encompass the entirety of human experience.
           
          </h2>
        </div>
        <div className="flex flex-col my-5">
          <form> 
            <div>

          <label className="text-right font-bold my-5">Requirements</label>  
          <textarea name="requirements" className="textarea textarea-bordered" placeholder="Enter here..." ></textarea>
            </div>
            <div>

          <label className="text-right font-bold my-5">Hospital Preference</label>
          <input type="text" placeholder="Enter consulting hospital" className="input input-bordered w-full max-w-xs" />
            </div>
          <label className="text-right font-bold my-5">Other details</label>
          <label className="form-control">
  <textarea className="textarea textarea-bordered h-24" placeholder="Do you have anything else to specify"></textarea>
</label>
          </form>
        </div>
        <div className="flex flex-col align-middle m-32">
            <Link className="btn btn-primary" href="/booking/booked">
                Book Now
            </Link>
            
        </div>
      </div>
    </>
  );
}