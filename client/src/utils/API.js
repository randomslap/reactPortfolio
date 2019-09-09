import axios from "axios";

export default {
	getAllProjects: function() {
		return axios.get("/api/projects/all");
    }
};
