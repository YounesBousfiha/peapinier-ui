// components/Sidebar.tsx
"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '../../lib/utils';
import {
    Leaf,
    LayoutDashboard,
    ListOrdered,
    PackageSearch,
    LogOut,
} from 'lucide-react';
import LogOutForm from './LogOutForm'
import {authService} from "../../services/AuthServices";
import { toast } from "sonner";
import Cookie from 'js-cookie';
import { useRouter } from 'next/navigation';

export default function Sidebar() {

    const router = useRouter();

    const handleLogout = async () => {
        try {
            toast.loading("Logging out...");
            const response = await authService.logout();
            toast.dismiss();
            toast.success("Logged out successfully!");
            Cookie.remove('token');
            router.push('/login');
        } catch (error) {
            toast.error("Error logging out. Please try again.");
        }
    }
    const pathname = usePathname();

    const routes = [
        {
            label: 'Dashboard',
            icon: <LayoutDashboard className="w-5 h-5" />,
            href: '/dashboard',
        },
        {
            label: 'Categories',
            icon: <PackageSearch className="w-5 h-5" />,
            href: '/categories',
        },
        {
            label: 'Orders',
            icon: <ListOrdered className="w-5 h-5" />,
            href: '/orders',
        },
        {
            label: 'Plants',
            icon: <Leaf className="w-5 h-5" />,
            href: '/plants',
        },
    ];

    return (
        <div className="space-y-4 py-4 flex flex-col h-full bg-slate-900 text-white py-4">
            <div className="px-3 py-2">
                <h2 className="mb-2 px-4 text-lg font-semibold">
                    Admin Dashboard
                </h2>
                <div className="space-y-1">
                    {routes.map((route) => (
                        <Link
                            key={route.href}
                            href={route.href}
                            className={cn(
                                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                                pathname === route.href ? "text-white bg-white/10" : "text-zinc-400"
                            )}
                        >
                            <div className="flex items-center flex-1">
                                {route.icon}
                                <span className="ml-3">{route.label}</span>
                            </div>
                        </Link>
                    ))}
                </div>
                <LogOutForm />
            </div>
        </div>
    );
};