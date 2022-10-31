import { useState } from "react";

const UpdateRoutineForm = ({ data, routines, setRoutines, routineId, setRoutineId }) => {
    const [name, setName] = useState([]);
    const [goal, setGoal] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("name", "goal", name, goal);
        console.log("Routine Id: ", routineId);
        if (data & data.title) {
            const newRoutines = routines.map(routine => {
                if (routine.id === routineId) {
                    return data;
                } else {
                    return routine;
                }
            });

            setRoutines(newRoutines);
            setName("");
            setGoal("");
            setRoutineId(null);
        }
    }

    return <>
        <h1>Update Post</h1>
        <form onSubmit={handleSubmit}>
            <input value={name} onChange={e => setName(e.target.value)} name="name" placeholder="name" type="text" className="form-control" />
            <input value={goal} onChange={e => setGoal(e.target.value)} name="goal" placeholder="goal" type="text" className="form-control" />
            <button type="submit" className="btn btn-primary mt-4">Submit</button>
        </form>
    </>
}

export default UpdateRoutineForm