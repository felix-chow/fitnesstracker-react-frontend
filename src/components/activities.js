// import { useEffect } from "react";
import CreateActivityForm from "./CreateActivityForm";

const Activities = ({ token, activities, setActivities, setActivityId }) => {
    // useEffect(() => {
    //     const createActivities = async () => {
    //         const activities = await createActivities();
    //         setActivities(activities);
    //         setActivityId(activityId);
    //     }
    //     createActivities();
    // }, []);

    console.log(activities);
    return (
        <div>
            <h1>Activities</h1>
            { token && <CreateActivityForm token={token} activities={activities} setActivities={setActivities} />     }
            {
                activities.map((activity) => (
                    <div key={activity.id}>
                        <div className="card">
                            <div className="card-body">
                                <h3 className="card-title">{activity.name}</h3>
                                <p className="card-text">{activity.description}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Activities;