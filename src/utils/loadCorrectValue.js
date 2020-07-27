import http from '../services/http';

export default async (url) => {
    try {
        const res = await http.get(url);
        let response;
        if (res.name) {
            response = res.name;
        }
        if (res.title) {
            response = res.title;
        }
        return response;
    } catch (err) {
        console.log(err)
    }
};