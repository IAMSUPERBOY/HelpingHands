
import { addDoc} from "firebase/firestore";
import { Timestamp,collection } from "firebase/firestore";
import { db } from "@/databse api/firebase";
import { redirect } from "next/navigation";
import Image from "next/image";
import logo from "../../Assets/logo.svg";
import data from "../../Assets/state.json";

async function readFormData(formData)
{
    "use server";
    const name=formData.get('UName')?.toString();
    const DOB=formData.get("DOB");
    const Gender=formData.get("gender");
    const email=formData.get("mail_id")?.toString();
    const Phone=formData.get("phone")?.toString();
    const Pincode=formData.get("Pincode")?.toString();
    const History=formData.get("history")?.toString();
    try {
        const docRef = await addDoc(collection(db, "users"), {
          name: name,
          DOB: Timestamp.fromDate(new Date(DOB)),
          Gender: Gender,
          Email: email,
          user_history: History,
          phone: Phone,
          Pincode:Pincode,
          customer: true
        });
        console.log("Document written with ID: ", docRef.id);
    
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      redirect("/");
}
export default function Page() {
  "use client"
  
  return (
    <>
      <div className="flex justify-center align-center mt-12">
        <Image width={175} height={175} src={logo}/>
      </div>

      <div className="font-bold text-center text-4xl mt-10">Create your Customer Account</div>
    
      <form className=" flex flex-row m-6 justify-center" action={readFormData}>
        {/* -------------------------------- */}
        <div className="flex flex-col">
          <div className="m-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Name</span>
              </div>
              <input required
                type="text"
                name="UName"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
          </div>
          <div className="m-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Date of Birth</span>
              </div>
              <input required
                type="date"
                placeholder="Type here"
                name="DOB"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
          </div>
          <div className="m-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Gender</span>
              </div>
              <select required name="gender" id="gender" className="border rounded">
                <option value="MALE">Male</option>
                <option value="FEMALE">Female</option>
               
              </select>
              <div className="label"></div>
            </label>
          </div>
        </div>
        {/* -------------------------------- */}
        <div className="flex flex-col">
          <div className="m-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Email</span>
              </div>
              <input required
                type="email"
                name="mail_id"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
          </div>
          <div className="m-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Phone</span>
              </div>
              <input required
                type="text"
                name="phone"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
          </div>
          <div className="m-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Address</span>
              </div>
              <input required
                type="text"
                name="address"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
          </div>
          <button type="submit" className="btn btn-primary mt-4 bg-red-500 rounded-full hover:bg-red-700 border border-red-500 hover:border-red-700 text-white ">Submit</button>
        </div>
   
        {/* ----------------------- */}
        <div className="flex flex-col">
          <div className="m-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">Pincode</span>
              </div>
              <input required
                type="text"
                name="Pincode"
                placeholder="Type here"
                className="input input-bordered w-full max-w-xs"
              />
              <div className="label"></div>
            </label>
          </div>
          <div className="m-4">
            <label className="form-control w-full max-w-xs">
              <div className="label">
                <span className="label-text">History</span>
              </div>
              <textarea required name="history" className="textarea textarea-bordered" placeholder="Enter your personal details (Patient history etc...)"></textarea>
              <div className="label"></div>
            </label>
          </div>
          
        </div>
      
      </form>
      
    </>
  );
}
