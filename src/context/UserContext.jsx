import { createContext , useState } from "react";

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem('auth')) || null
    );

    const storeUser = (user) => {
        localStorage.setItem('auth', JSON.stringify(user));
        setUser(user);
    }

    const removeUser = () => {
        localStorage.removeItem('auth');
        setUser(null);
    }

    return (
        <UserContext.Provider value={{user, storeUser, removeUser}}>
            {children}
        </UserContext.Provider>
    );
}