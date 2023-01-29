const baseApi = "http://localhost:5000/api/checkList/CK_Contenu";

const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
};

   

export const Contenuck = () => {
    const createContenuCheckList = (createContenuCheckListInputs) => {
        return fetch(baseApi + "/", {
            method: "POST",
            headers,
            body: JSON.stringify(createContenuCheckListInputs),
        }).then((res) => {

            if (!res.ok) return Promise.reject();
            return res.json().then((res) => res);
        });
    };
    const getContenuCK = (currentPage = 1, pageSize = 10) => {
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
    const removeContenu = (id) => {
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
    const updateContenu = (contenuId, payload) => {
        return fetch(baseApi + `/${contenuId}`, {
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

    return { createContenuCheckList, getContenuCK,removeContenu,updateContenu };
};
    

