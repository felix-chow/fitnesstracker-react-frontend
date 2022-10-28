const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api/';

export const fetchActivities = async () => {
    const result = await fetch(baseURL + "/activities", {
        headers: {
          'Content-Type': 'application/json',
        },   
    })
    const { data } = await result.json()
    console.log("data: ", data);
    return data;
};

export const createActivities = async(token, name, description, price, location, postId) => {
    const result = await fetch(baseURL + `/posts/${postId}`, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          post: {
            name,
            description,
          }
        }),
    })
    const { data } = await result.json()
    console.log("data: ", data);
};

export const deletePosts = async(token, postIdToDelete) => {
    const result = await fetch(baseURL + `/posts/${postIdToDelete}`, {
        method: "DELETE",
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
    })
    const data = await result.json()
    console.log("data: ", data);
};

export const register = async (username, password) => {
    const result = await fetch(baseURL + "/users/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: {
                username,
                password,
            }
        }),
    })

    const { data } = await result.json()
    return data;
};

export const login = async (username, password) => {
    const result = await fetch(baseURL + "/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            user: {
                username,
                password,
            }
        }),
    })

    const { data } = await result.json()
    return data;
};

export const fetchUser = async (token) => {
    const result = await fetch(baseURL + "/users/me", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    })

    const { data } = await result.json()
    return data;
};