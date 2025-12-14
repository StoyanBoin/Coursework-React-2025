import { createContext, useContext, useState } from "react";
import useRequest from "../hooks/useRequest.jsx";

const UserContext = createContext({
    isAuthenticated: false,
    user: {
        _id: '',
        username: '',
        email: '',
        password: '',
        _createdOn: '',
        accessToken: '',
    },
    registerHandler: () => { },
    loginHandler: () => { },
    logoutHandler: () => { },
});

export function UserProvider({
    children,
}) {
    const [user, setUser] = useState(null);
    const { request } = useRequest();

    const registerHandler = async (username, email, password) => {
        const newUser = { username, email, password };

        const result = await request('http://localhost:3030/users/register', 'POST', newUser);

        setUser(result);
    };

    const loginHandler = async (user) => {
        const result = await request('http://localhost:3030/users/login', 'POST', user);

        setUser(result);
    }

    const logoutHandler = () => {
        return request('http://localhost:3030/users/logout', 'GET', null, { accessToken: user?.accessToken })
            .finally(() => setUser(null));
    }

    const userContextValue = {
        user,
        isAuthenticated: !!user?.accessToken,
        registerHandler,
        loginHandler,
        logoutHandler,
    };

    return (
        <UserContext.Provider value={userContextValue} >
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext() {
    const context = useContext(UserContext);

    if (context === undefined) {
        throw new Error('useUserContext must be used within a UserProvider');
    }

    return context;
}


export default UserContext;