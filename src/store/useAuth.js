import { create } from "zustand";


const useAuthStore = create((set) => ({
    isAuthenticated: false,
    user: null,
    token: null,

    login: (user, token) => set({ isAuthenticated: true, user, token }),
    logout: () => set({ isAuthenticated: false, user: null, token: null }),
}));

