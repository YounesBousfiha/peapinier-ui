// components/Navbar.jsx
"use client";

import { LogOut, User } from "lucide-react";

export default function Navbar() {
    return (
        <div className="flex items-center justify-between p-4 border-b bg-white h-16">
            {/* Left side - Page Title */}
            <div className="flex items-center">
                <h1 className="text-xl font-semibold text-gray-900">Dashboard</h1>
            </div>

            {/* Right side - User Info & Logout */}
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-slate-900 flex items-center justify-center">
                        <User className="h-5 w-5 text-white" />
                    </div>
                    <span className="text-sm font-medium hidden md:block">
            Admin User
          </span>
                </div>
            </div>
        </div>
    );
}