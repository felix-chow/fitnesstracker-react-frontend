const baseURL = 'https://fitnesstrac-kr.herokuapp.com/api';

// Activities

export const fetchActivities = async () => {
    const result = await fetch(baseURL + "/activities");
    const data = await result.json()
    return data;
};

export const createActivities = async (token, name, description) => {
    const result = await fetch(baseURL + `/activities`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            name,
            description,
        }),
    })
    const data = await result.json()
    console.log("data: ", data);
};

export const updateActivities = async (token, name, description, activityId) => {
    const result = await fetch(baseURL + `/activities/${activityId}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            name,
            description,
        }),
    })
    const data = await result.json()
    console.log("data: ", data);
};

export const fetchRoutineActivity = async (activityId) => {
    const result = await fetch(baseURL + `/activities/${activityId}`);
    const data = await result.json()
    console.log("data: ", data);
    return data;
};

// // Routines

export const fetchRoutines = async () => {
    const result = await fetch(baseURL + "/routines");
    const data = await result.json()
    return data;
};

export const createRoutine = async (token, name, goal, isPublic) => {
    const result = await fetch(baseURL + `/activities`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            name,
            goal,
            isPublic,
        }),
    })
    const { data } = await result.json()
    console.log("data: ", data);
};

export const updateRoutine = async (token, name, goal, isPublic) => {
    const result = await fetch(baseURL + `/activities`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            name,
            goal,
            isPublic,
        }),
    })
    const { data } = await result.json()
    console.log("data: ", data);
};

export const deleteRoutine = async (token, routineIdToDelete) => {
    const result = await fetch(baseURL + `/routines/${routineIdToDelete}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
    const data = await result.json()
    console.log("data: ", data);
};

export const attachActivityToRoutine = async (token, routineId, activityId, count, duration) => {
    const result = await fetch(baseURL + `/routines/${routineId}/activities`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            activityId,
            count,
            duration,
        }),
    })
    const { data } = await result.json()
    console.log("data: ", data);
};

// Routine Activities

export const updateCountOrDuration = async (token, routineId, count, duration) => {
    const result = await fetch(baseURL + `/routine_activities/${routineId}`, {
        method: "PATCH",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
            count,
            duration,
        }),
    })
    const { data } = await result.json()
    console.log("data: ", data);
};

export const deleteRoutineActivity = async (token, routineActivityIdToDelete) => {
    const result = await fetch(baseURL + `/routine_activities/${routineActivityIdToDelete}`, {
        method: "DELETE",
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
    })
    const data = await result.json()
    console.log("data: ", data);
};

// Users

export const Authenticate = async ({ method, path, token, body }) => {
    const options = {
        method: method ? method : "GET",
        headers: {
            "Content-Type": "application/json",
        },
    };

    if (token) {
        options.headers.Authorization = `Bearer ${token}`;
    }

    if (body) {
        options.body = JSON.stringify(body);
    }

    const result = await fetch(baseURL + path, options);
    const data = await result.json();
    if (data.error) {
        throw data.error;
    }
    return data;
};

export const fetchUser = async (token) => {
    const result = await fetch(baseURL + "/users/me", {
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
    })

    const data = await result.json()
    return data;
};