import axios from "axios";

const BASE_URL = "https://api.themoviedb.org/3";
const TMDB_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxYTYxMzYxY2RiZGQ4YTRkZGI3MWU0NWMzNmJhMzUxOCIsInN1YiI6IjY0N2QzYmY2Y2Y0YjhiMDEwMzFmMDY1MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.RDs1Zy124tAm2A7pv1MIXFexk0EeZ9GbLl8UYG1v64s";

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL + url, {
            headers,
            params,
        });
        return data;
    } catch (err) {
        console.log(err);
        return err;
    }
};
