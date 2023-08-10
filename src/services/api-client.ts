import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "639290d6be7047948929d35dda7b2857",
  },
});
