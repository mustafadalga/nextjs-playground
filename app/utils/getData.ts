import { cache } from 'react'
import axios from "axios"

export const getData = cache(async () => {
    const response = await axios.get("https://api.jsonstorage.net/v1/json/e414f4f4-9113-4761-8e21-8f8a063976e1/f6b9e242-d621-4bbf-ae23-672a5f825fff");
    return response.data;
})