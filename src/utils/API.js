import axios from "axios";
const BASEURL = "https://randomuser.me/api/1.3";

export default {
            search: function () {
                return axios.get(BASEURL);
            }
    };
