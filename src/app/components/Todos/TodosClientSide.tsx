'use client'
import React, { useEffect, useState } from 'react'
import styles from './Todos.module.css';

interface TodoType {
    createdAt: string,
    title: string,
    bug: string,
    description: string,
    id: string
}

export default function TodosClientSide() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const fetchTodos = async () => {
            const todosResponse = await fetch('https://66e366cd494df9a478e51d2e.mockapi.io/api/todos', { cache: "force-cache" });
            const todosData = await todosResponse.json()
            setTodos(todosData);
        };
        fetchTodos();
    }, []);

    // this will log in the client console
    console.log('todos json', todos.length, todos[0]);

    return (
        <div className={styles.todosContainer}>
            <b>Todos (client-side):</b>
            {todos.map((todo: TodoType, index: number) => {
                return (
                    <div key={index}>
                        <p>{todo.title}</p>
                    </div>
                )
            })}
        </div>
    )
}
