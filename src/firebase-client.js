import axios from 'axios';
import {useEffect, useLayoutEffect, useState} from "react";
import Router from "./Router";

const baseUrl = `http://localhost:3002`;


const AxiosClient = () => {

    const [token, setToken] = useState(undefined);
    const [myUsername, setMyUsername] = useState(undefined)
    const logOut = () => {
        setToken(undefined);
        setMyUsername(undefined);
    }

    const deleteAccount = () => {
        deleteUserApi();
        logOut();
    }

    const apiCall = ({ method, url, data }) => {
        return axios({
            method: method,
            url: `${baseUrl}${url}`,
            headers: {
                Authorization: token
            },
            data: data
        }).catch((error) => {
            throw error;
        })
    }

    const signUpApi = (username, password) => {
        return apiCall({
            url: '/signup',
            method: 'post',
            data: {username, password}
        }).then(({ data }) => {
            setToken(data.token);
            setMyUsername(data.username)
        }).catch((error) => alert(error.response.data.error));
    }

    const loginApi = (username, password) => {
        logOut();
        return apiCall({
            url: `/login`,
            method: 'post',
            data: {username, password}
        }).then(({ data }) => {
            setToken(data.token);
            setMyUsername(data.username);
        }).catch((error) => alert(error.response.data.error));
    }

    const getPostsApi = () => {
        return apiCall({
            url: `/posts`,
            method: 'get'
        }).catch((error) => alert(error.response.data.error));
    }

    const postPostApi = (post) => apiCall({
        method: 'post',
        url: `/posts`,
        data: post
    }).catch((error) => alert(error.response.data.error));

    const deletePostApi = (id) => apiCall({
        method: 'delete',
        url: `/posts/${id}`
    }).catch((error) => alert(error.response.data.error));

    const toggleLikePost = (post) => apiCall({
        method: 'patch',
        url: `/posts/${post._id}`,
        data: post
    }).catch((error) => alert(error.response.data.error));

    const deleteUserApi = () => apiCall({
        method: 'delete',
        url: `/posts/deleteuser`
    }).catch((error) => alert(error.response.data.error));

    const randomColour = () => {
        let letters = '0123456789ABCDEF';
        let colour = '#';
        for (let i = 0; i < 6; i++) {
            colour += letters[Math.floor(Math.random() * 16)];
        }
        return colour;
    }


    const client = {myUsername,
                    apiCall,
                    loginApi,
                    signUpApi,
                    getPostsApi,
                    postPostApi,
                    deletePostApi,
                    toggleLikePost,
                    logOut,
                    deleteAccount,
                    randomColour,};

    return <Router client={client}/>
}

export default AxiosClient;


