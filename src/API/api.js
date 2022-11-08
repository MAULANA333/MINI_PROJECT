import axios from 'axios';

export const client = axios.create({
    baseURL: "https://helping-anteater-79.hasura.app/api/rest/resep",
    headers: {
        "x-hasura-admin-secret" : "gKRonPqsZwBl3phGcOVbQh0cWeT0UnVfVsmiEDaDMv23Y7txNO4fWHy6Btzr3e5g"
    }
});

export const getReseps = async () => {
    const response = await client.get("/")
        return response.data.misterk_resep;
};
