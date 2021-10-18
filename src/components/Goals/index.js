import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory, useParams } from "react-router";

const Goals = ({ goal }) => {
  const history = useHistory();

  const { group } = useParams();

  const [goals, setGoals] = useState();

  const token = localStorage.getItem("token");

  const handleDelete = () => {
    axios
      .delete(`https://kenzie-habits.herokuapp.com/goals/${goal.id}/`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(history.go(0))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    axios.get(`https://kenzie-habits.herokuapp.com/goals/${group}/`);
  }, []);

  return (
    <>
      <h2>Metas</h2>
      <ul>
        {goals.map((meta) => (
          <li>{meta.id}</li>
        ))}
      </ul>
    </>
  );
};

export default Goals;
