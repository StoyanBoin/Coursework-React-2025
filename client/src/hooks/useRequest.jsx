import { useContext } from "react";
import UserContext from "../context/UserContext.jsx";

// const baseUrl = 'http://localhost:3030';

export default function useRequest() {
    const { user, isAuthenticated } = useContext(UserContext)

    const request = async (url, method, data, confic = {}) => {
        let options = {};

        if (method) {
            options.method = method;
        }

        if (data) {
            options.headers = {
                'content-type': 'application/json',
            };

            options.body = JSON.stringify(data);
        }

        if (confic.accessToken || isAuthenticated) {
            options.headers = {
                ...options.headers,
                'X-Authorization': confic.accessToken || user.accessToken,
            };
        }
        console.log(user);
        
        const response = await fetch(url, options);

        if (!response.ok) {
            throw response.statusText;
        }

        if (response.status === 204) {
            return {};
        }

        const result = await response.json();

        return result;
    }

    return {
        request,
    }
}