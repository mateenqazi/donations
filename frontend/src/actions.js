import axios from "axios";
import { GET_ALL_COMPAIGN, DONATION_SUBMISSION } from "./types";
// import { NotificationManager } from "react-notifications";

const backendServerURL = process.env.REACT_APP_BACKEND_URL;

export const getAllCampaignList = () => {
  return axios
    .get(`${backendServerURL}/${GET_ALL_COMPAIGN}`)
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return [];
    });
};

export const donationSubmission = (data) => {
  return axios
    .post(`${backendServerURL}/${DONATION_SUBMISSION}`, { data })
    .then((res) => {
      return res.data;
    })
    .catch(() => {
      return [];
    });
};
