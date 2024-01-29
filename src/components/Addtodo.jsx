import { useRef, useState } from "react"
import { IoAddCircleOutline } from "react-icons/io5";

let Addtodo = ({ inAddButton }) => {

    // const [todoName, setTodoName] = useState("")
    // const [todoDate, setTodoDate] = useState("")
    const todoNameElem = useRef();
    const dueDateElem = useRef();

    // const handleNameChange = (event) => {
    //     setTodoName(event.target.value)
    // }
    // const handleDateChange = (event) => {
    //     setTodoDate(event.target.value)
    // }

    const handleAddButtonClicked = (event) => {
        event.preventDefault();
        const todoName = todoNameElem.current.value;
        const todoDate = dueDateElem.current.value;
        console.log(`Name: ${todoName} Date:${todoDate}`)
        inAddButton(todoName, todoDate)
        todoNameElem.current.value = ""
        dueDateElem.current.value = ""
        // setTodoName("")
        // setTodoDate("")
    }

    return (
        <form className="grid grid-cols-3 bg-slate-400" onSubmit={handleAddButtonClicked}>
            <div className="name">
                <input ref={todoNameElem} className="md:w-full w-32" type="text" placeholder="Enter todo here" />
            </div>
            <div className="date">
                <input ref={dueDateElem} className="md:w-full w-32" type="date" />
            </div>
            <div className="addbutton">
                <button className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2"><IoAddCircleOutline /></button>
            </div>
        </form>
    )
}

export default Addtodo