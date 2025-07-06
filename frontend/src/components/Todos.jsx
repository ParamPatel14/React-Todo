export function Todos({ todos }) {
    if (!todos || todos.length === 0) {
        return <div>No todos yet!</div>;
    }
    return (
        <div>
            {todos.map(function(todo, idx) {
                return (
                    <div className="todos" key={todo._id || idx}>
                        <h1 style={{
                            padding: "20px",
                            backgroundColor: "lightblue",
                            borderRadius: "10px",
                            textAlign: "center",
                            cursor: "pointer",
                        }}>{todo.title}</h1>
                        <h2 style={{
                            padding: "20px",
                            backgroundColor: "lightgreen",
                            borderRadius: "10px",
                            textAlign: "center",
                            cursor: "pointer",
                        }}>{todo.description}</h2>
                        <button style={{
                            padding: "15px 13px",
                            borderRadius: "8px",
                            border: "none",
                            backgroundColor: "#28a745",
                            color: "#fff",
                            cursor: "pointer"
                        }}>{todo.completed ? "Completed" : "Mark as Completed"}</button>
                    </div>
                )
            })}
        </div>
    );
}