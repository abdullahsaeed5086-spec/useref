import React, { useCallback, useState } from 'react'
import Todas from './Todas';





    


const UseCallback = () => {
 
        const[count,setCount] = useState(0);
        const[add,setAdd]=useState(0);
        const[todos,setTodos]=useState([]);
        const increment =()=>{
            setCount((c)=> c +1);
        };
        const decreament =()=>{
            setAdd((c)=>c-1);
        };
        const addTodo = useCallback(()=>{
            setTodos((t) => [...t, "New Todo"])
        }, [todos]);
    
  return (
    <div>
          
        
       <>
        <Todas todos={todos} addTodo={addTodo}/>
        <div>
            Count:{count}
            <button onClick={increment}>+</button><br/>
            add:{add}
                       <button onClick={decreament}>+</button>
        </div>
        <div>
            {count}
        </div>
        </>
    </div>
  )
}

export default UseCallback
