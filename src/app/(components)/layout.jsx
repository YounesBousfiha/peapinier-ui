// app/layout.tsx
import Sidebar from "./SideBar";
import Navbar from "./NavBar";

export default function Layout({ children }) {
    return (
        <div className="h-full relative">
            <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
                <Sidebar />
            </div>
            <div className="md:pl-72">
                <Navbar />
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}