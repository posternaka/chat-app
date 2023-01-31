import axios from "axios";
import { URL } from "../types/url";

export const createConversation = async (body) => {
    console.log(body);
    try {
        return await axios.post(`${URL}/conversation`, body);
    } catch (error) {
        console.log(error);
    }
}

export const createUser = async (body) => {
      try {
          return await axios.post(`${URL}/users`, body);
      } catch (error) {
          console.log(error);
      }
}

export const getUsers = async () => {
    try {
      return await axios.get(`${URL}/users`);
    } catch (error) {
      console.log(error);
    }
};

export const getConversation = async () => {
    try {
      return await axios.get(`${URL}/conversation`);
    } catch (error) {
      console.log(error);
    }
  };