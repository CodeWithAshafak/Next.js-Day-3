import Link from "next/link"


const Header = () => {
  return (
     <>
      <div className="mx-auto bg-gray-400 border-indigo-200 bg-blue-50 flex h-20 p-5 justify-center gap-10" >
        <Link  href='/'  className="text-black text-lg">Home</Link>
        <Link href='/about'  className="text-black text-lg">About</Link>
        <Link href='/insert' className="text-black text-lg">Insert</Link>
        <Link href='/display' className="text-black text-lg">Display</Link>
      </div>
     </>
  )
}

export default Header