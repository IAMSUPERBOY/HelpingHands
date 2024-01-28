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
      <div>
        
        <div className="text-center font-bold m-8">
             We've recieved your request and a nurse will be calling you shortly.
        </div>
        <div className="text-center font-mono mt-2">

        {querySnapshot.docs.map((doc) => (
            <div key={doc.id}>
            {/* Render content based on doc data here */}
            <p>Name: {doc.data().name}</p>
            <p>Job: {doc.data().job}</p>
            <p>Email {doc.data().Email}</p>
            {/* ... other relevant data */}
            <Link href="/patientProfile">View Details</Link>
          </div>
        ))}
      </div>
        </div>
    );
  
  
  
  
  }
  