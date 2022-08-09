import React from 'react';
import styles from './Todofooter.module.css';


const TodoFooter = ({todos,onClear}) => {

  return (
    <div className={styles.dFlex} >
        <p className={styles.text}>You have  {todos.length} pending tasks</p>
        <div className={styles.btn}>
            <button onClick = {onClear}>Clear All</button>
        </div>
    </div>
  )
}

export default TodoFooter