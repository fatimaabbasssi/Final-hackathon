// import axios from "axios";
// import {getToken} from "../utils/auth.js";

// export let fetchUserFromServer = async () => {
//   const token = getToken();
//   if (!token) return null;

//   const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/auth/profile`, {
//     headers: { Authorization: `Bearer ${token}` },
//   });

//   return res.data.user;
// };