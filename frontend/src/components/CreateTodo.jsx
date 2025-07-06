import React, { useState } from "react";

export function CreateTodo(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    return (
        <div className="create-todo">
            <h2>Create a New Todo</h2>
            <input
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc"
                }}
                type="text"
                placeholder="Enter todo title"
                value={title}
                onChange={e => setTitle(e.target.value)}
            /> <br />
            <textarea
                style={{
                    width: "100%",
                    padding: "10px",
                    marginBottom: "10px",
                    borderRadius: "5px",
                    border: "1px solid #ccc"
                }}
                placeholder="Enter todo description"
                value={description}
                onChange={e => setDescription(e.target.value)}
            ></textarea>
            <button
                style={{
                    padding: "10px 15px",
                    borderRadius: "5px",
                    border: "none",
                    backgroundColor: "#28a745",
                    color: "#fff",
                    cursor: "pointer"
                }}
                onClick={() => {
                    fetch('http://localhost:3000/todo', {
                        method: 'POST',
                        body: JSON.stringify({
                            title: title,
                            description: description
                        }),
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                        .then(async function(res) {
                            await res.json();
                            alert("Todo Added");
                            setTitle("");
                            setDescription("");
                            if (props.onTodoAdded) props.onTodoAdded();
                        });
                }}
            >Add Todo</button>
        </div>
    );
}