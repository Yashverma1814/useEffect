import React from "react";

const Todos = () => {
    const [inputValue, setInputValue] = React.useState("");
    const[todos, setTodos] = React.useState([]);

    React.useEffect(()=>{
        getTodos();
    },[])

    const getTodos = () =>{
        fetch("http://localhost:3001/posts")
            .then((res) => res.json())
            .then((res) => setTodos(res))
            .catch((err) => console.log(err))
    }

    const handelAdd = () =>{
        console.log(inputValue);
        const payload = {
            title: inputValue,
            status: false,
        }
        const payloadjson = JSON.stringify(payload);

        fetch("http://localhost:3001/posts",{
        method: "POST",
        body: payloadjson,
        headers:{
            "content-type" : "application/json"
        }
        }).then((res)=>{
            console.log(res);
        });
    };

    

    return(
        <div>
            <input 
            type="text" 
            placeholder="Add TODOS" 
            value={inputValue} 
            onChange = {(e) => setInputValue(e.target.value)}
            />
            <button onClick={handelAdd}>SAVE</button>
            {todos.map((item)=>{
                return <div>{item.title}</div>
            })
            }
        </div>
    );
}
export default Todos;