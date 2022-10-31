import { useState } from "react";
import { createActivities } from "../api";

const CreateActivityForm = ({ activities, data, setActivities, token }) => {
    const [name, setName] = useState([]);
    const [description, setDescription] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data = await createActivities(token, name, description);
            console.log(data);
            setActivities((prev) => [data, ...prev]);
            console.log(setActivities);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <h1>Create an Activity</h1>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={e => setName(e.target.value)} name="name" placeholder="name" type="text" className="form-control" />
                <input value={description} onChange={e => setDescription(e.target.value)} name="description" placeholder="description" type="text" className="form-control" />
                <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
        </>
    )
}

export default CreateActivityForm