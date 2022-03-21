import Axios from "axios";
import React from "react";

const apiUrl = "https://randomuser.me/api/?";



export const fetchUsers = (args ="results=20") => {
 return Axios.get(apiUrl + args) .then(resp => resp.data);

}