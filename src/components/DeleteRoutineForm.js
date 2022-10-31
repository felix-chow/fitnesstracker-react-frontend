import { useState } from "react";

const DeleteRoutineForm = ({ data, routines, setRoutines, routineIdToDelete }) => {
    const [name, setName] = useState([]);
    const [goal, setGoal] = useState([]);

    const handleDelete = async (routinetIdToDelete) => {
        console.log("routinetIdToDelete: ", routinetIdToDelete);
        if (data) {
            const newRoutines = routines.filter(routines => routines.id !== routineIdToDelete)
            setRoutines(newRoutines);
        }
    }

    return <>
        <h1>Delete Post</h1>
        <form onSubmit={handleDelete}>
                <input value={name} onChange={e => setName(e.target.value)} name="name" placeholder="name" type="text" className="form-control" />
                <input value={goal} onChange={e => setGoal(e.target.value)} name="goal" placeholder="goal" type="text" className="form-control" />
                <button type="submit" className="btn btn-primary mt-4">Submit</button>
            </form>
    </>
}

export default DeleteRoutineForm