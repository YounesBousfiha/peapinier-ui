"use client";

import { LogOut } from "lucide-react";
import { useAuthStore } from "../../store/useAuth";
import { authService } from "../../services/AuthServices";
import { useRouter } from "next/navigation";
import { getCookie, deleteCookie } from "cookies-next";

export default function LogOutForm() {
    const router = useRouter();
    const logout = useAuthStore((state) => state.logout); // Correctly access logout from Zustand store

    const handleLogout = async () => {
        try {
            // Call the logout service to invalidate session on the server
            await authService.logout();

            // Check for auth cookie
            const authCookie = getCookie("token");

            if (authCookie) {
                logout(); // Clear auth state in Zustand store
                deleteCookie("token"); // Remove the token cookie
                router.push("/login"); // Redirect to login page
            } else {
                router.push("/login"); // Redirect even if no cookie exists
            }
        } catch (error) {
            console.error("Logout failed:", error);
            router.push("/"); // Redirect to homepage or error page on failure
        }
    };

    return (
        <button
            onClick={handleLogout}
            className="absolute bottom-0 left-0 w-full p-3 bg-white text-slate-900 hover:bg-gray-100 transition-colors flex items-center justify-center font-medium"
        >
            <LogOut className="w-5 h-5 mr-2" />
            Logout
        </button>
    );
}