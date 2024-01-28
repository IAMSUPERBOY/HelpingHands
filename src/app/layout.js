"use client"
import { Mulish } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import {useRouter} from 'next/navigation'; 
import { useState } from "react";
const inter = Mulish({ subsets: ["latin"] });

/* export const metadata = {
  title: "Helping Hands",
  description: "To serve the world with care",
}; */

export default function RootLayout({ children }) {
  const [customer_page,setStatus]=useState(true);
  const Handler=()=>{setStatus(!customer_page);}

  return (
    <html lang="en">
      <body className={inter.className}>
      <main>
      <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">Helping Hands</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal ">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <details className="w-256">
              <summary>Sign In</summary>
              <ul className="p-2 w-15">
                <li>
                  <a href="/loginCustomer">Customer Login</a>
                </li>
                <li>
                  <a href="/loginProvider">Nurse Login</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link href="/About">About us</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {customer_page?<Link href="/clientDetails"className="btn" onClick={Handler}>Switch to Service</Link>:<Link href="/" className="btn" onClick={Handler}>Switch to Customer</Link>}
      </div>
    </div>
        {children}  
        
      </main>
        
        </body>
    </html>
  );
}
