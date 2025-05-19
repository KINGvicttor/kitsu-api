import { Anime } from "@/types/Anime";
import axios from "axios";

const baseUrl = axios.create({
    baseURL: "https://kitsu.io/api/edge"
})

export const getFullAnimeList = async (): Promise<Anime[] | any> => {
    const res = await baseUrl.get('/anime');
    return res.data
}