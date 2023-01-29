const baseApi = "http://localhost:5000/api/checkList/CK_SousType";

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

   

export const SousTypeck = () => {
    const createSousTypeCheckList = (createSousTypeCheckListInputs) => {
        return fetch(baseApi + "/", {
            method: "POST",
            headers,
            body: JSON.stringify(createSousTypeCheckListInputs),
        }).then((res) => {

            if (!res.ok) return Promise.reject();
            return res.json().then((res) => res);
        });
    };
    const getSousTypeCK = (currentPage = 1, pageSize = 10) => {
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
    const removeSousType = (id) => {
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
    const updateSousType = (soustypeId, payload) => {
        return fetch(baseApi + `/${soustypeId}`, {
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

    return { createSousTypeCheckList, getSousTypeCK,removeSousType,updateSousType };
};
    

