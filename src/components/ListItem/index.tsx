import * as C from './style'
import {Item} from '../../types/Item'
import { useState } from 'react';

type Props = {
    item: Item;
    excluir: (id:number) => void;
}

export const ListItem = ({item,excluir}:Props) =>{

    const [isChecked,setIsChecked] = useState(item.done);

    const clickDelete = (id:number) =>{

      excluir(id);
        
    }


    return(
            <>
            <C.Container done = {isChecked}>
            <div>
            <input type="checkbox"
             checked = {isChecked} 
             onChange ={e=>setIsChecked(e.target.checked)} />
            <label >{item.name}</label>
            </div>
            
            <div><label onClick={() => clickDelete(item.id)}>Excluir</label></div>
          
           
            </C.Container>
            
          
             </>
    );
}