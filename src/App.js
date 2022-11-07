import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/home";
import { fetchRoutines, fetchActivities, fetchRoutineActivity, fetchUser, Authenticate } from "./api";
import Activities from "./components/activities";
import AccountForm from "./components/AccountForm";
import Routines from "./components/routines";
import './App.css';
import MyRoutines from "./components/my_routines";

const App = () => {
  const [routines, setRoutines] = useState({});
  const [routineId, setRoutineId] = useState([]);

  const [activities, setActivities] = useState([]);
  const [activityId, setActivityId] = useState([]);

  const [routineActivities, setRoutineActivities] = useState([]);
  const [routineActivityId, setRoutineActivityId] = useState([]);

  const routineIdToDelete = useState(null);
  const activityIdToDelete = useState(null);
  const routineActivityIdToDelete = useState(null);

  const [token, setToken] = useState(window.localStorage.getItem("token") || "");
  const [user, setUser] = useState(null || {});

  const navigate = useNavigate();

  const logout = () => {
    setToken("");
    setUser(null);
    navigate("/");
  }

  useEffect(() => {
    fetchActivities();
    fetchRoutines();
  }, [token]);

  useEffect(() => {
    if (token) {
          const fetchUser = async () => {
            const user = await Authenticate({path: "/users/me", token});
            setUser(user);
          }
          fetchUser();
        }
  }, [token]);

  useEffect(() => {
    window.localStorage.setItem("token", token);
  }, [token]);

  useEffect(() => {
    const getActivities = async () => {
      const activities = await fetchActivities();
      setActivities(activities);
    }
    getActivities();
  }, []);

  useEffect(() => {
    const createActivities = async () => {
      const activities = await createActivities();
      setActivities(activities);
      setActivityId(activityId);
    }
    createActivities();
  }, []);

  useEffect(() => {
    const updateActivities = async () => {
      const activities = await updateActivities();
      setActivities(activities);
      setActivityId(activityId);
    }
    updateActivities();
  }, []);

  useEffect(() => {
    const deleteActivities = async () => {
      const activities = await deleteActivities();
      setActivities(activities);
      setActivityId(activityIdToDelete);
    }
    deleteActivities();
  }, []);


  useEffect(() => {
    const getRoutines = async () => {
      const routines = await fetchRoutines();
      setRoutines(routines);
    }
    getRoutines();
  }, []);

  useEffect(() => {
    const createRoutines = async () => {
      const routines = await createRoutines();
      setRoutines(routines);
      setRoutineId(routineId);
    }
    createRoutines();
  }, []);

  useEffect(() => {
    const updateRoutines = async () => {
      const routines = await updateRoutines();
      setRoutines(routines);
      setRoutineId(routineId);
    }
    updateRoutines();
  }, []);

  useEffect(() => {
    const deleteRoutines = async () => {
      const routines = await deleteRoutines();
      setRoutines(routines);
      setRoutineId(routineIdToDelete);
    }
    deleteRoutines();
  }, []);

  useEffect(() => {
    const getRoutineActivities = async () => {
      const routineActivities = await fetchRoutineActivity();
      setRoutineActivities(routineActivities);
      setRoutineActivityId(routineActivityId);
    }
    getRoutineActivities();
  }, []);

  return (
    <>
      <div className="p-3">
        <nav className="d-flex justify-content-between mb-4">
          <span>
            <Link className="navbar-brand text-decoration-none" style={{ fontSize: "26px" }} to="/">FitnessTrac.ker</Link>
          </span>
          <div>

            <Link className="text-secondary text-decoration-none" to="/routines"><button>Routines</button></Link>
            <Link className="text-secondary m-4 text-decoration-none" to="/activities"><button>Activities</button></Link>
            {
              token ?
                <>
                  <Link className="text-secondary me text-decoration-none" to="/users/:username/routines"><button>My Routines</button></Link>
                  <button className="text-secondary m-4 text-decoration-none" onClick={logout}>Log out</button>
                </> :
                <>
                  <Link className="text-secondary text-decoration-none" to="/users/login"><button>Login</button></Link>
                  <Link className="text-secondary m-4 text-decoration-none" to="/users/register"><button>Register</button></Link>
                </>
            }

          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/activities" element={<Activities token={token} activities={activities} setActivities={setActivities} setActivityId={setActivityId} />} />
          <Route path="/routines" element={<Routines routines={routines} />} />
          <Route path="/users/:action" element={<AccountForm setToken={setToken} />} />
          <Route path="/users/:username/routines" element={<MyRoutines routines={routines} setRoutines={setRoutines} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
