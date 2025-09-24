import { createContext, useState } from "react";

// Named export
export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState(null);

    function login(username, password) {
        if (username === "admin" && password === "1234") {
            setUser("admin");
            setIsAuthenticated(true);
        }
    }

    function logout() {
        setUser(null);
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}
