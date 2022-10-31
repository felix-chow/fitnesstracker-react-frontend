// import { Link } from "react-router-dom";
// import { useState } from "react";

import CreateRoutineForm from "./CreateRoutineForm";

const MyRoutines = ({ routines, setRoutines, setRoutineId }) => {

    return (
        <div className="routines">
            <h1>My Routines</h1>
            <CreateRoutineForm routines={routines} setRoutines={setRoutines} />
            {
                routines.map((routine) => {
                    return (
                        <div key={routine.id}>
                            <div className="card">
                                <div className="card-body">
                                    <h3 className="card-title">{routine.name}</h3>
                                    <p className="card-text">{routine.goal}</p>
                                    <p className="card-text">{routine.creatorName}</p>
                                    {
                                        routine.activities.map((activity) => {
                                            return (
                                                <div key={activity.id}>
                                                    <p className="card-text">{activity.name}</p>
                                                </div>
                                            )
                                        })
                                    }
                                    <button type="button" className="btn btn-outline-primary" onClick={() => setRoutineId(routine.id)}>Edit</button>
                                <button type="button" className="btn btn-outline-danger" onClick={() => setRoutineId(routine.id)}>Delete</button>
                                </div>
                            </div>

                        </div>
                    )


                })
            }


        </div>
    )
}

export default MyRoutines;