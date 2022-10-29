// import { Link } from "react-router-dom";

const Activities = ({ activities, setActivities, setActivityId }) => {
    return (
        <div>
            <h1>Activities</h1>
            {
                activities.map((activity) => (
                    <div key={activity.id}>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">{activity.name}</h3>
                                <p className="card-text">{activity.description}</p>
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

export default Activities;