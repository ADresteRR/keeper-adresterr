import { useState } from "react";

function CreateArea(props) {
    const [task, setTask] = useState({
        title: "",
        content: ""
    });
    function handleChange(e) {
        const { name, value } = e.target;
        setTask(() => {
            return {
                ...task,
                [name]: value
            }
        })
    }
    function handleSubmit(e) {
        props.addNote(task);
        setTask({ title: "", content: "" });

        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="title" placeholder="Title" value={task.title} onChange={handleChange} />
                <textarea name="content" placeholder="Take a note..." rows="3" value={task.content} onChange={handleChange
                } />
                <button>Add</button>
            </form>
        </div>
    );
}

export default CreateArea;
