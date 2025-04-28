"use client"

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const variantStyles = {
    success: "bg-emerald-700 text-white",
    error: "bg-red-700 text-white",
    default: "bg-gray-700 text-white",
  }

function LogOutButton() {
    const router = useRouter();

    const [loading, setLoading] = useState(false);

    const handleLogOut = async () => {
        setLoading(true)
        
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const errorMessage = null;

        if (!errorMessage) {
            toast.success("You have been successfully logged out", {
              description: "Logged out successfully",
              className: variantStyles.success, // Aplica a classe de variante de sucesso
            });
            router.push("/");
          } else {
            toast.error("Error", {
              description: errorMessage,
              className: variantStyles.error,
            });
          }

        setLoading(false);
    };

    return(
        <Button 
        variant="outline"
        onClick={handleLogOut}
        disabled={loading}
        className="w-24"
        > 
            { loading ? <Loader2 className="animate-spin" /> : "Log Out" }
        </Button>
    );
}

export default LogOutButton;