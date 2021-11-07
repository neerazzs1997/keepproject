import React, { useEffect, useState } from 'react'
import CreateTask from './CreateTask';
import CreateList from './CreateList';



const TodoTask = () => {
    const [modal, setmodal] = useState(false)
    const [TaskList, setTaskList] = useState([])



    const toggle = () => {
        setmodal(!modal)
    }

    useEffect(()=>{
        let arr = localStorage.getItem("TaskList")
    
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    },[])

    const saveTask = (object) => {
        let tempfile = TaskList;
        tempfile.push(object)
        localStorage.setItem("TaskList",JSON.stringify(tempfile))
        setTaskList(tempfile)
        setmodal(false)
    }

    const TaskDelete = (index) => {
        let tempfile = TaskList;
        tempfile.splice(index, 1);
        localStorage.setItem("TaskList",JSON.stringify(tempfile))
        setTaskList(tempfile)
        window.location.reload()
    }
    const updateListArrays=(obj,index)=>{
         let templist=TaskList
         templist[index]=obj
         localStorage.setItem("TaskList",JSON.stringify(templist))
         setTaskList(templist)
         window.location.reload()
         
          
    }

   
    return (
        <>
            <div className="main_container">
                <div className="container">

                    <div className="box_todo">
                        <div className="box_todo_content">
                            <h1>Todo List</h1>
                            <input type="text" />
                        </div>
                        <button className="btns" onClick={() => {
                            setmodal(true)
                        }} >
                            Create Task
                        </button>
                    </div>
                </div>


                <div className="containers">
                    {
                        TaskList.map((obj,index) => {
                            return (

                                <CreateList TaskObj={obj} index={index}  TaskDelete={TaskDelete} updateListArray={updateListArrays} />

                            )
                        })
                    }
                </div>
            </div>


            <CreateTask modal={modal} toggle={toggle} save={saveTask} />

        </>
    )
}

export default TodoTask
