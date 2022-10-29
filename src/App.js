import { Link, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Home from "./components/home";
import { fetchRoutines, fetchActivities, fetchRoutineActivity, fetchUser } from "./api";
import Activities from "./components/activities";
import AccountModal from "./components/modal/login";
import Routines from "./components/routines";

const App = () => {
  const [routines, setRoutines] = useState([]);
  const [activities, setActivities] = useState([]);
  const [routineActivities, setRoutineActivities] = useState([]);
  const routineIdToDelete = useState(null);
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
    if (token) {
      const getUser = async () => {
        const user = await fetchUser(token);
        setUser(user);
      }
      getUser();
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
    const getRoutines = async () => {
      const routines = await fetchRoutines();
      setRoutines(routines);
    }
    getRoutines();
  }, []);

  return (
    <>
      <div className="p-3">
        <nav>
          <span>
            <Link to="/">FitnessTrac.ker</Link>
          </span>
          <div>
            <Link to="/my_routines">My Routines</Link>
            <Link to="/routines">Routines</Link>
            <Link to="/activities">Activities</Link>
            {
              token ? <button onClick={logout}>Log out</button> :
                <>
                  <Link to="/users/login">Login</Link>
                  <Link to="/users/register">Register</Link>
                </>
            }
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/activities" element={<Activities activities={activities} />} />
          <Route path="/routines" element={<Routines routines={routines} />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
