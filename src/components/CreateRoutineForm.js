import { useState } from "react";

const CreateRoutineForm = ({ routines, data, setRoutines }) => {
    // Use states for name and goal
    const [name, setName] = useState([]);
    const [goal, setGoal] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("name, goal: ", name, goal);
        setRoutines([data, ...routines]);
    }

    return (
        <>
            <h1>Create a Routine</h1>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={e => setName(e.target.value)} name="name" placeholder="name" type="text" className="form-control" />
                <input value={goal} onChange={e => setGoal(e.target.value)} name="goal" placeholder="goal" type="text" className="form-control" />
                <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
        </>
    )
}

export default CreateRoutineForm