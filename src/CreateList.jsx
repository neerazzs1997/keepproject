import React,{useState} from 'react'
import EditTask from './EditTask';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

const CreateList = ({TaskObj,index,TaskDelete,updateListArray}) => {
    const [modal, setmodal] = useState(false)

    const toggle=()=>{
        setmodal(!modal)
    }

    const updateTask=(obj)=>{
        updateListArray(obj,index)
    }


    const DeleteTask=()=>{
        TaskDelete(index)
    }
    return (
        <div>
            <div className="box">
                <div className="box_content">

                    <p>Task:- {TaskObj.Task}</p>
                    <p>Description:- {TaskObj.Description}</p>
                    <p>Status:- {TaskObj.Status}</p>
                    <p>Date:- {TaskObj.Date}</p>
                    <p>Deadline:- {TaskObj.Deadline}</p>
                    <span className="icon" onClick={()=>{
                        setmodal(true)
                    }} ><EditIcon/></span>
                    <span className="icon" onClick={DeleteTask} ><DeleteIcon  /></span>

                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} upDateTask={updateTask} TaskObj={TaskObj} />
        </div>
    )
}

export default CreateList
