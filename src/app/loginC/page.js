import Link from "next/link";


export default function Page() {
  return (
    <>
      <div className="flex flex-col text-center m-12">
      <h1>
        <div className="font-bold text-3xl m-8">
          Login
        </div>
      </h1>
      <div className="flex flex-col">

      <form >
        <div className="text-bold m-8">

        <label>
          Email :
          <input name="email"type="email"  />
        </label>
        </div>
        <div className="text-bold m-8 border-dashed"> 
        <label>
          Password :
          <input name="pw" type="password" className=""/>
        </label>
        </div> 
        <Link href="/BookNurse" className="btn btn-primary mt-4 bg-red-500 rounded-full hover:bg-red-700 border border-red-500 hover:border-red-700 text-white ">Submit</Link>
      </form>
      </div>
    </div>
    </>
  );
}