import axios from "axios";
import { API_URL } from "../utils";

export const deleteArtistCall = (id: number) => {
  return axios.delete(`${API_URL}/artist/${id}`);
}

export const editUserCall = (id: number, userParams: object, headers: object) => {
  return axios.patch(`${API_URL}/user/${id}`, userParams, headers);
}

export const getArtist = (id: number) => {
  return axios.get(`${API_URL}/artist/${id}`);
}

export const getArtistList = (id: number) => {
  return axios.get(`${API_URL}/artist-list/${id}`);
}

export const getUserArtists = (id: number, headers: object) => {
  return axios.get(`${API_URL}/user/${id}`, { headers });
}

export const getArtistsFromSpotify = (params: object) => {
  return axios.post(`${API_URL}/spotify`, params);
}

export const getTracksCall = (params: object) => {
  return axios.post(`${API_URL}/spotify/searchById`, params);
}

export const loginUser = (params: object) => {
  return axios.post(`${API_URL}/login`, params);
}

export const registerUser = (params: object) => {
  return axios.post(`${API_URL}/register`, params);
}

export const refreshTokenCall = (params: object) => {
  return axios.post(`${API_URL}/token/refresh`, params);
}

export const saveArtistCall = (payload: object) => {
  return axios.post(`${API_URL}/artist`, {...payload});
}
