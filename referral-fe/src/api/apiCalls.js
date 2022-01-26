import axios from "axios";
import { API_BASE_URL } from "../Constants";


export const getAllByReferralCode = (ref) => {
    return axios.get(API_BASE_URL + "/api/user/" + ref);
};

export const getUserByUsername = (username) => {
    return axios.get(API_BASE_URL + "/api/user/username/" + username);
};

export const createUser = (post) => {
    return axios.post(API_BASE_URL + "/api/user", post);
};
