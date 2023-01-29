const baseApi = "http://localhost:5000/api/Remorque";

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

   

export const Remorque = () => {
    
    const getRemorque = (currentPage = 1, pageSize = 10) => {
        return fetch(baseApi + `?skip=${pageSize * (currentPage - 1)}&take=${pageSize}`, {
            method: "GET",
            headers: {
                ...headers,
            },
        }).then((res) => {
            if (!res.ok) return Promise.reject();
            return res.json().then((res) => res);
        });
    };
    
    return { getRemorque };
};
    

