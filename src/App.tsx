import { useState } from 'react';
import './style.css';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

function App() {

  const [list,setList] = useState<Item[]>([]);

const handleAddTask = (taskName:string) => {

  let newList = [...list];
  newList.push({ id:list.length +1 , name: taskName, done: false});
  setList(newList);

}

const handleDeleteTask = (id:number) =>{
  let newList = [...list];
  for(let i = 0; i < list.length; i++){
    if(newList[i].id === id){

      newList.splice(i, 1);
      setList(newList);
     
    }
  }
}
  return (

   <div className='container'>
     <div className='area'>
       <div className='header'><h1>Lista de Tarefas</h1></div>

       <AddArea onEnter ={handleAddTask} />
      
         
         { list.map((item,index) =>(
           <ListItem key={index} item={item} excluir={handleDeleteTask}/>
          ))
       } 
     </div>
   </div>

  );
}

export default App;
