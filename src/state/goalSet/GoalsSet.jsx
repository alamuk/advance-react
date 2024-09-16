import GoalForm from './GoalForm.jsx';
import { useState } from 'react';

export function GoalsSet() {
  const [allGoals, setAllGoals] = useState([]);

  function addGoal(goal) {
    setAllGoals([...allGoals, goal]);
    // console.log(goal);
  }
  //
  function ListOfGoals({ allGoals }) {
    return (
      <ul>
        {allGoals.map((g) => (
          <li key={g.goal}>
            <span>
              My Goal is to {g.goal}, by {g.by}
            </span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <div>
      <GoalForm onAdd={addGoal} />
      {/*{allGoals.map((g) => (*/}
      {/*  <li key={g.goal}>*/}
      {/*    <span>*/}
      {/*      My Goal is to finish {g.goal}, by {g.by}*/}
      {/*    </span>*/}
      {/*  </li>*/}
      {/*))}*/}
      <ListOfGoals allGoals={allGoals} />
    </div>
  );
}

export default GoalsSet;
