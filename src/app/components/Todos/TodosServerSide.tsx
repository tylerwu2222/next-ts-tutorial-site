import React from 'react'
import styles from './Todos.module.css';

interface TodoType{
  createdAt:string,
  title:string,
  bug:string,
  description:string,
  id:string
}

export default async function TodosServerSide() {
  const todosResponse = await fetch('https://66e366cd494df9a478e51d2e.mockapi.io/api/todos', { cache: "force-cache" });
  const todosData = await todosResponse.json()

  // this will log in the server (VS code) console
  console.log('todos json', todosData.length, todosData[0]);

  return (
    <div className={styles.todosContainer}>
      <b>Todos (server-side):</b>
      {todosData.map((todo:TodoType) => {
        return (
          <div>
            <p>{todo.title}</p>
          </div>
        )
      })}
    </div>
  )
}
