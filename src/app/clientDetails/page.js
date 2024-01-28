import {
  collection,
  deleteDoc,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/databse api/firebase";
import img1 from "../../Assets/avatar.png";
import Image from "next/image";

export default async function Page() {

  const usersRef = collection(db, "users");
  const q = query(usersRef, where("customer", "==", true));
  const querySnapshot = await getDocs(q);
  return (
    <div>
     

      {querySnapshot.docs.map((doc) => (
        <div key={doc.id}>
          {/* Render content based on doc data here */}
          <p>Name: {doc.data().name}</p>
          <p>Job: {doc.data().job}</p>
          <p>Favorite Color: {doc.data().Email}</p>
          {/* ... other relevant data */}
          
        </div>
      ))}
    </div>
  );




}
