import "./style.css";

import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/Auth";
import { useUser } from "../../providers/User";
import { useHistory } from "react-router-dom";
import HabitsForm from "../../components/HabitsForm";
import Habit from "../../components/Habit";

const Habits = () => {
  const history = useHistory();

  const { user } = useUser();
  const { auth } = useAuth();
  const [habits, setHabits] = useState();

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get("https://kenzie-habits.herokuapp.com/habits/personal/", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => setHabits(response.data))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {auth ? (
        <div>
          <h1>
            ID: {user.id}; Nome: {user.username}; E-mail: {user.email}
          </h1>
          <ul>
            {habits?.map((habit) => {
              return (
                <li key={habit.id}>
                  <Habit habit={habit} />;
                </li>
              );
            })}
          </ul>
          <HabitsForm />
        </div>
      ) : (
        history.push("/login")
      )}
    </>
  );
};

export default Habits;
