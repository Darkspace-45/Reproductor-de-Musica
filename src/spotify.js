import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientID = '0b2b68708e014e758475c58f52d41e51';
const redirectUrl = 'http://localhost:3000';
const scopes = ["user-library-read", "playlist-read-private", "user-top-read"];

export const loginEndpoint = `${authEndpoint}client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scopes.join(
    "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
    apiClient.interceptors.request.use((config) => {
        config.headers.Authorization = "Bearer " + token;
        return config;
    });
};

export const getToken = () => {
    return window.localStorage.getItem("token");
};

export const logout = () => {
    window.localStorage.removeItem("token");
};

export default apiClient;
