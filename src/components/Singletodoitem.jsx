import { MdDelete } from "react-icons/md";
let Singletodoitem = ({ tododate, todoname, inDeleteButton }) => {
    return (
        <div className="grid grid-cols-3 bg-slate-400 ">
            <div className="name w-full mb-1 flex items-center justify-center">
                <span>{todoname}</span>
            </div>
            <div className="date w-full  mb-1 flex items-center justify-center">
                <span>{tododate}</span>
            </div>
            <div className="addbutton w-full mb-1">
                <button type="button" className="focus:outline-none text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-xl px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={() => inDeleteButton(todoname)}><MdDelete /></button>
            </div>
        </div>
    )
}

export default Singletodoitem