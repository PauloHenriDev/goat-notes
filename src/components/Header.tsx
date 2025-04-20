import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <div>
        <Link href="/">
            <Image src="/goatius.png" height={60} width={60} alt="Logo" className="rounded-full" priority/>
        </Link>
    </div>
  )
}

export default Header;