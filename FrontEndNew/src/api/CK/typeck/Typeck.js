const baseApi = "http://localhost:5000/api/checkList/CK_Type";

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

   

export const Typeck = () => {
    const createTypeCheckList = (createTypeCheckListInputs) => {
        return fetch(baseApi , { 
            method: "POST",
            headers,
            body: JSON.stringify(createTypeCheckListInputs),
        }).then((res) => {

            if (!res.ok) return Promise.reject();
            return res.json().then((res) => res);
        });
    };
    const getCK = (currentPage = 1, pageSize = 10) => {
        return fetch(baseApi + '?skip=${pageSize * (currentPage - 1)}&take=${pageSize}', {
            method: "GET",
            headers: {
                ...headers,
            },
        }).then((res) => {
            if (!res.ok) return Promise.reject();
            return res.json().then((res) => res);
        });
    };
    const removeType = (id) => {
        return fetch(baseApi + `/${id}`, {
            method: 'DELETE',
            headers: {
                ...headers
            }
        }).then((res) => {
            if (!res.ok) return Promise.reject();
            return res.json().then((res) => res);
        });
    };
    const updateType = (id, payload) => {
        return fetch(baseApi + `/${id}`, {
            method: 'PATCH',
            headers: {
                ...headers
            },
            body: JSON.stringify(payload)
        }).then((res) => {
            if (!res.ok) return Promise.reject();
            return res.json().then((res) => res);
        });
    };
    return { createTypeCheckList, getCK,removeType,updateType };
};
    

