import { createContext } from "react";

const UserContext = createContext({
    isAuthenticated: false,
    user: {
        _id: '',
        username: '',
        email: '',
        password: '',
        _createdOn: '',
        accessToken: ''
    },
    registerHandler: () => { },
    loginHandler: () => { },
    logoutHandler: () => { },
});

export default UserContext;