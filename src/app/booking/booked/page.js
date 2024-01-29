import {
    collection,
    deleteDoc,
    getDocs,
    query,
    where,
  } from "firebase/firestore";
  import { db } from "@/databse api/firebase";
  import img1 from "../../../Assets/avatar.png";
  import Image from "next/image";
  import Link from "next/link";


// `app/page.js` is the UI for the `/` URL
// /* export default function Page() {
//     return (<>
//     <div className="text-center font-bold mt-4">
//         We've recieved your request and a nurse will be calling you shortly.
//     </div>
//     <div>
//         Name : Sura
//     </div>
// </>)
//   } */

  export default async function Page() {

    const usersRef = collection(db, "users");
    const q = query(usersRef, where("customer", "==", false));
    const querySnapshot = await getDocs(q);
    // const {tester}= UserAuth();
    // console.log(tester);
    
    return (
      <div className="flex flex-row">
        
        <div className="text-center font-bold m-16 text-3xl">
             We've recieved your request and a nurse will be calling you shortly.
        </div>
        <div className="text-center font-mono m-20">
          The Partner XYZ would be soon coming to your aid.
      </div>
        </div>
    );
  
  
  
  
  }
  