import Singletodoitem from "./Singletodoitem"
let TodoItems = ({ todoItems, inDeleteButton }) => {
    return (
        <div className="p-5 md:px-16">

            {
                todoItems.map((item, index) => (
                    <Singletodoitem tododate={item.dueDate} todoname={item.name} key={index} inDeleteButton={inDeleteButton} />
                ))
            }
        </div>
    )
}

export default TodoItems