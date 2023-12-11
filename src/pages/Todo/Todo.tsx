import React, { useState } from 'react'
import Styles from './Todo.module.css'

interface Task {
  id: number
  name: string
}

const Todo = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [tasks, setTasks] = useState<Task[]>([])
  const [newTask, setNewTask] = useState<string>('')

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setNewTask('')
    setIsModalOpen(false)
  }

  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value)
  }

  const handleAddTask = () => {
    if (newTask.trim().length > 0) {
      const newId = tasks.length > 0 ? Math.max(...tasks.map((task) => task.id)) + 1 : 1
      setTasks([...tasks, { id: newId, name: newTask }])
      handleCloseModal()
    }
  }

  const handleDeleteTask = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  return (
    <>
      <div className={Styles.centeredContainer}>
        <div className={Styles.todoContainer}>
          <div className={Styles.todoHeader}>TODO List</div>
          <ul className={Styles.todoList}>
            {tasks.map((task) => (
              <li key={task.id} className={Styles.todoItem}>
                <input type="checkbox" id={`todo-${task.id}`} />
                <label htmlFor={`todo-${task.id}`}>{task.name}</label>
                <button
                  className={Styles.deleteButton}
                  onClick={() => handleDeleteTask(task.id)}
                >
                  ×
                </button>
              </li>
            ))}
          </ul>
          <button className={Styles.addButton} onClick={handleOpenModal}>
            +
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className={Styles.newTodoModalContainer} onClick={handleCloseModal}>
          <div className={Styles.newTodoModal} onClick={(e) => e.stopPropagation()}>
            <div className={Styles.newTodoContent}>
              <div className={Styles.newTodoHeader}>新規登録</div>
              <input
                type="text"
                className={Styles.newTodoInput}
                placeholder="タスクを入力してください"
                value={newTask}
                onChange={handleTaskChange}
              />
              <div className={Styles.buttonList}>
                <button
                  className={Styles.newTodoSubmit}
                  onClick={handleAddTask}
                  disabled={newTask.trim().length === 0}
                >
                  追加
                </button>
                <button className={Styles.newTodoCancel} onClick={handleCloseModal}>
                  キャンセル
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Todo
