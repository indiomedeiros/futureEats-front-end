import axios from "axios";

export const api = axios.create({
  baseURL: "https://us-central1-missao-newton.cloudfunctions.net/futureEatsA",
});
