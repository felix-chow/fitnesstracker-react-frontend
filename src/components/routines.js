// import { Link } from "react-router-dom";
// import { useState } from "react";

const Routines = ({ routines, setRoutines, setRoutineId }) => {
    console.log(routines);
    return (
        <div>
            <h1>Routines</h1>
            {
                routines.map((routine) => (
                    <div key={routine.id}>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">{routine.name}</h3>
                                <p className="card-text">{routine.goal}</p>
                                <p className="card-text">{routine.creatorName}</p>
                                <p className="card-text">{routine.activities}</p>
                                {/* <button type="button" className="btn btn-outline-primary" onClick={() => setPostId(post.id)}>Edit</button>
                                <button type="button" className="btn btn-outline-danger" onClick={() => setPostId(post.id)}>Delete</button> */}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Routines;