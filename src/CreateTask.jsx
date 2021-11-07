import React, { useState } from 'react'

import { Modal, ModalFooter, ModalBody, ModalHeader, Button } from 'reactstrap';

const CreateTask = ({ modal, toggle,save}) => {
    const [Task, setTask] = useState("")
    const [Description, setDescription] = useState("")
    const [Status, setStatus] = useState("")
    const [Date, setDate] = useState("")
    const [Deadline, setDeadline] = useState("")

    const ChangeHandler = (event) => {
        const { name, value } = event.target

        if (name == "Task") {
            setTask(value)
        } else if (name == "Description") {
            setDescription(value)
        } else if (name == "Status") {
            setStatus(value)
        } else if (name == "Date") {
            setDate(value)
        } else {
            setDeadline(value)
        }
    }
    
    const clickhandler=()=>{
        let object={}
        object["Task"]=Task
        object["Description"]=Description
        object["Status"]=Status
        object["Date"]=Date
        object["Deadline"]=Deadline
        save(object)
     
    }

   

    return (
        <Modal toggle={toggle} isOpen={modal} >
            <ModalHeader toggle={toggle}>
                Create Task
            </ModalHeader>
            <ModalBody  >
                <form action="">
                    <div className="form-group">
                        <label htmlFor="">Title</label>
                        <input type="text" className="form-control" value={Task} onChange={ChangeHandler} name="Task" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Description</label>
                        <textarea name="" id="" cols="30" rows="5" className="form-control" value={Description} onChange={ChangeHandler} name="Description"  ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Status</label>
                        <input type="text" className="form-control" value={Status} onChange={ChangeHandler} name="Status" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Creation Date</label>
                        <input type="date" name="" id="" className="form-control" value={Date} onChange={ChangeHandler} name="Date" />
                    </div>
                    <div className="form-group" >
                        <label htmlFor="">Deadline</label>
                        <input type="date" name="" id="" className="form-control" value={Deadline} onChange={ChangeHandler} name="Deadline" />
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button
                    color="primary"
                    onClick={clickhandler}>
                    Create
                </Button>
                {' '}
                <Button onClick={toggle} >
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default CreateTask
