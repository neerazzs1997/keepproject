import React, { useState, useEffect } from 'react'
import { Modal, ModalFooter, ModalBody, ModalHeader, Button } from 'reactstrap';


const EditTask = ({ modal, toggle, TaskObj, upDateTask }) => {
    const [Task, setTask] = useState("")
    const [Description, setDescription] = useState("")
    const [Status, setStatus] = useState("")
    const [Date, setDate] = useState("")
    const [Deadline, setDeadline] = useState("")

    const ChangeHandlers = (event) => {
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

    useEffect(() => {
        setTask(TaskObj.Task)
        setTask(TaskObj.Description)
        setTask(TaskObj.Status)
        setTask(TaskObj.Date)
        setTask(TaskObj.Deadline)
    }, [])


    const UpdateHandler = (e) => {
        e.preventDefault();
        let tempobj = {}
        tempobj["Task"] = Task
        tempobj["Description"] = Description
        tempobj["Status"] = Status
        tempobj["Date"] = Date
        tempobj["Deadline"] = Deadline
        upDateTask(tempobj)
    }




    return (
        <Modal toggle={toggle} isOpen={modal} >
            <ModalHeader toggle={toggle}>
                Create Task
            </ModalHeader>
            <ModalBody  >
                <form action="">
                    <div className="form-group">
                        <label htmlFor="">Update Title</label>
                        <input type="text" className="form-control" value={Task} onChange={ChangeHandlers} name="Task" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Update Description</label>
                        <textarea name="" id="" cols="30" rows="5" className="form-control" value={Description} onChange={ChangeHandlers} name="Description"  ></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Update Status</label>
                        <input type="text" className="form-control" value={Status} onChange={ChangeHandlers} name="Status" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="">Update Creation Date</label>
                        <input type="date" name="" id="" className="form-control" value={Date} onChange={ChangeHandlers} name="Date" />
                    </div>
                    <div className="form-group" >
                        <label htmlFor=""> Update Deadline</label>
                        <input type="date" name="" id="" className="form-control" value={Deadline} onChange={ChangeHandlers} name="Deadline" />
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button
                    color="primary"
                    onClick={UpdateHandler}>
                    UpDate
                </Button >
                {' '}
                <Button onClick={toggle} >
                    Cancel
                </Button>
            </ModalFooter>
        </Modal>
    )
}

export default EditTask
