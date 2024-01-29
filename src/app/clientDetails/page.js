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
import Link from "next/link";
// import { UserAuth } from "../context/AuthContext";

export default async function Page() {
  const usersRef = collection(db, "users");
  const q = query(usersRef, where("customer", "==", true));
  const querySnapshot = await getDocs(q);
  // const {tester}= UserAuth();
  // console.log(tester);

  return (
    <div className="m-28">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Patient Name</th>
              <th>Age</th>
              <th>Medical Condition</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        src={img1}
                        alt="Patient Avatar"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Alice Smith</div>
                    <div className="text-sm opacity-50">Cardiac patient</div>
                  </div>
                </div>
              </td>
              <td>55</td>
              <td>
                Heart Disease
                <br />
                <span className="badge badge-ghost badge-sm">Cardiology</span>
              </td>
              <th>
                <Link href="/clientId" className="btn btn-ghost btn-xs">details</Link>
              </th>
            </tr>
            {/* row 2 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        src={img1}
                        alt="Patient Avatar"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">John Doe</div>
                    <div className="text-sm opacity-50">Diabetes</div>
                  </div>
                </div>
              </td>
              <td>42</td>
              <td>
                Type 2 Diabetes
                <br />
                <span className="badge badge-ghost badge-sm">
                  Endocrinology
                </span>
              </td>
              <th>
               <Link href="/clientId" className="btn btn-ghost btn-xs">details</Link>
              </th>
            </tr>
            {/* row 3 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        src={img1}
                        alt="Patient Avatar"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Emily Johnson</div>
                    <div className="text-sm opacity-50">Elderly Care</div>
                  </div>
                </div>
              </td>
              <td>70</td>
              <td>
                Arthritis
                <br />
                <span className="badge badge-ghost badge-sm">Rheumatology</span>
              </td>
              <th>
               <Link href="/clientId" className="btn btn-ghost btn-xs">details</Link>
              </th>
            </tr>
            {/* row 4 */}
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <Image
                        src={img1}
                        alt="Patient Avatar"
                        width={100}
                        height={100}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Michael Brown</div>
                    <div className="text-sm opacity-50">Rehabilitation</div>
                  </div>
                </div>
              </td>
              <td>60</td>
              <td>
                Physical Therapy
                <br />
                <span className="badge badge-ghost badge-sm">
                  Rehabilitation Services
                </span>
              </td>
              <th>
               <Link href="/clientId" className="btn btn-ghost btn-xs">details</Link>
              </th>
            </tr>
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
}
