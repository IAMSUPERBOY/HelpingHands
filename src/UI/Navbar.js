
import Link from "next/link";
function Navbar() {
  return (
    
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
        <Link href="/clientDetails"className="btn">Switch to Service</Link>
      </div>
    </div>
   
  );
}

export default Navbar;
