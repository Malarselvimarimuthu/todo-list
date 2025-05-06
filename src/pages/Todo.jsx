import React, { useEffect, useState } from 'react'
import axios from 'axios'; 
const Todo = () => {

  const[todo,setTodo] = useState('');
  const[db,setDb] = useState([]);
 
  
  function posts(){
    axios.post("http://localhost:3000/posts",{ todo })
    .then(() => {
      alert('Data is stored properly');
    }).catch(() => {
      alert('Data not stored');
    })
  }

    function get(){
      axios.get("http://localhost:3000/posts")
      .then((res)=> {
        setDb(res.data);
      })
      .catch((err)=>{
        console.error(err);
      })
    }
    console.log(db);  

    useEffect(()=>{
      get();
    },[todo]);

  function update(data,id){
    axios.put(`http://localhost:3000/posts/${id}`,{ todo: data })
    .then(() =>{
      get();
    })
    .catch((err) => {
      console.error(err);
    })
  }

  function deletedata(id){
    axios.delete(`http://localhost:3000/posts/${id}`)
    .then(()=>{
      get();
    })
    .catch((err)=>{
      console.error(err);
    })
  }
  return (
    <div style={{margin: '100px'}}>
          <label htmlFor="todo">Todo</label>
          <input type="text" value={todo} onChange={(e)=> setTodo(e.target.value)}/>
          <button onClick={posts}>POST</button>
          {/* {todo}   */}
          
          <ul>
              
              {
                
                              db.map((data)=> (
                               <li key = {data.id}>
                                  {data.todo}
                                <button onClick ={()=>{
                                  const item = prompt("Enter the Data",data.todo).trim();
                                  update(item,data.id)} 
                                } >Update
                                </button>
                                <button onClick={()=>{
                                  
                                }}></button>
                                </li>
                              ))
                }
            </ul>
          {/* <ul>
            {
              db.map((item)=>{
                return <li key={item.id}>{item.todo}</li>
              })
            }
          </ul> */}


    </div>


  )
}

export default Todo;