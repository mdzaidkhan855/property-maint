import Link from "next/link";

export default function Header() {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">
          <Link href="/payment/add">
            Pay Rent
          </Link>
        </div>
        <div className="space-x-4 ml-10">
          <Link href="/">
            Home
          </Link>
          
        </div>
      </div>
    </nav>
  );
}
