import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full">
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        <Link href="/">
          <Image
            src="/images/fav.png"
            alt="Business Thrve"
            width={100}
            height={50}
          />
        </Link>
        <div>
          <a
            href="#"
            className="bg-[#d17432] text-white px-6 py-4 rounded-[36px] text-sm font-medium hover:bg-[#6b615b] transition-all"
          >
            Download App
          </a>
        </div>
      </div>
    </nav>
  );
}
