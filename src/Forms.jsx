import React, { useState } from 'react'

function Forms() {
    const [tasks, setTasks] = useState([])
    function forOnSubmit(e){
        e.preventDefault()
        const formData = new FormData(e.target)
        const taskName = formData.get("task-name")
        const taskTime = formData.get("task-time")

        const newTask = {
            name : taskName,
            time : taskTime
        }

        setTasks([...tasks, newTask])
        console.log(e);
        console.log(taskName);
    }
    return (
        <div style={{display:"flex", justifyContent:"center", gap:"130px"}}>
            <form onSubmit={forOnSubmit} >
                <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
                    <label htmlFor="task-name">Task Name</label>
                    <input type="text" id="task-name" name="task-name" />

                    <label htmlFor="task-time">Task Time</label>
                    <input type="time" id='task-time' name='task-time' />

                    <button type='submit'>Add</button>
                </div>
            </form>
            <div>
                <p>Tasks</p>
                {
                    tasks.map((el)=>{
                        return(
                            <div style={{display:"flex",gap:"10px"}}>
                                <p>{el.name}</p>
                                <p>-</p>
                                <p style={{fontWeight:"bold"}}>{el.time}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Forms