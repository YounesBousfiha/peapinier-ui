import { Toaster } from "sonner";


export default function AuthLayout({ children }) {
    return (
        <>
            <Toaster position="top-left" expand={true} visibleToasts={99}/>
            {children}
        </>
    );
}