import { useState } from "react"

const priorityList = {
  low: "Low",
  medium: "Medium",
  high: 'High'
}

const filterList = [
  { key: 'all', label: 'All' },
  { key: 'high', label: 'High' },
  { key: 'medium', label: 'Medium' },
  { key: 'low', label: 'Low' },
]

function App() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState("");
  const [taskPriority, setTaskPriority] = useState("medium");
  const [currentFilter, setCurrentFilter] = useState('all');
  const [currentEditId, setCurrentEditId] = useState(null);
  const [editingTitle, setEditingTitle] = useState("");

  const handleAddTask = () => {
    const newTask = {
      id: Date.now(),
      title: taskName,
      priority: taskPriority
    }

    setTasks([...tasks, newTask]);
    setTaskName("");
    setTaskPriority("medium");
  }

  const handleFilterTasks = (filter) => {
    setCurrentFilter(filter);
  }

  const handleDeleteTask = (id) => {
    if (confirm("Are you sure?")) {
      setTasks(currentState => currentState.filter(task => task.id !== id));
    }
  }

  const handleStartEditing = (task) => {
    setCurrentEditId(task.id);
    setEditingTitle(task.title);
  }

  const handleCancelEditing = () => {
    setEditingTitle("");
    setCurrentEditId(null);
  }

  const handleSaveEditing = (id) => {
    setTasks(currentState => currentState.map(task => task.id === id ? { ...task, title: editingTitle } : task));
    setEditingTitle("");
    setCurrentEditId(null);
  }

  const filteredTasks = currentFilter === 'all' ? tasks : tasks.filter(task => task.priority === currentFilter);

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">
          <h1 className="card-title">Todo list</h1>
          <p className="card-description">Description</p>
        </div>
        <div className="card-content">
          <div className="form-grid">
            <div className="form-row">
              <div className="form-group">
                <label className="label">Task name</label>
                <input value={taskName} onChange={(e) => setTaskName(e.target.value)} type="text" className="input" placeholder="Enter task name" />
              </div>
              <div className="form-group">
                <label className="label">Priority</label>
                <select className="select" value={taskPriority} onChange={(e) => setTaskPriority(e.target.value)}>
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
              <button className="btn btn-default" onClick={handleAddTask}>Add task</button>
            </div>
          </div>
          <div className="filter-container">
            <div className="filter-buttons">
              {filterList.map(filter => {
                const isActive = currentFilter === filter.key ? 'active' : null
                return (
                  <button onClick={() => handleFilterTasks(filter.key)} className={`filter-btn ${isActive}`} key={filter.key}>{filter.label}</button>
                )
              })}
            </div>
          </div>
          <div>
            {filteredTasks.length === 0 ? (
              <div className="empty-state">
                <h3>There are no tasks</h3>
                <p>Add your first task</p>
              </div>
            ) : (
              filteredTasks.map(task => {
                const isEditing = task.id === currentEditId;
                return (
                  <div key={task.id} className="todo-item">
                    <div className="todo-content">
                      {isEditing ? <input className={`edit-input ${isEditing ? 'active' : null}`} value={editingTitle} onChange={(e) => setEditingTitle(e.target.value)} type="text" /> : <div className="todo-text">{task.title}</div>}
                    </div>
                    <div className="todo-meta">
                      <span className={`badge badge-${task.priority}`}>{priorityList[task.priority]}</span>
                      <div className="todo-actions">
                        {isEditing ? (
                          <>
                            <button onClick={() => handleSaveEditing(task.id)} className="btn btn-sm btn-outline">Save</button>
                            <button onClick={handleCancelEditing} className="btn btn-sm btn-destructive">Cancel</button>
                          </>
                        ) : (<>
                          <button onClick={() => handleStartEditing(task)} className="btn btn-sm btn-outline">Edit</button>
                          <button onClick={() => handleDeleteTask(task.id)} className="btn btn-sm btn-destructive">Delete</button>
                        </>)}

                      </div>
                    </div>
                  </div>
                )
              })
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
