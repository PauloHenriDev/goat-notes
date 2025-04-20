import Image from "next/image";
import Link from "next/link";

import { shadow } from "@/lib/utils";
import { Button } from "./ui/button";

function Header() {
  const user = null;
   
  return (
    <header className="relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8"
    style={{
      boxShadow: shadow,
    }}
    >
      <Link href="/" className="flex items-end gap-2">
          <Image src="/goatius.png" 
          height={60} 
          width={60} 
          alt="Logo" 
          className="rounded-full" 
          priority/>

          <h1 className="flex flex-col pb-1 text-2x1 font-semibold leading-6">
            GOAT <span>Notes</span>
          </h1>
      </Link>

      <div className="flex gap-4">
        { user ? (
          "Logout"
        ) : 
        (
          <>
            <Button asChild>
              <Link href="/sign-up" className="hidden sm:block">Sign Up</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/login">Login</Link>
            </Button>
          </>
        )
        }
      </div>

    </header>
  )
}

export default Header;