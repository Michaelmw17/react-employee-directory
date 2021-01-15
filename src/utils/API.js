import axios from "axios";
const BASEURL = "https://randomuser.me/api/?results=50&inc=name,phone,picture,email,dob&nat=au";

export default {
            search: function () {
                return axios.get(BASEURL);
            }
    };
