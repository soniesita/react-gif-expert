import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

export const GitExpertApp = () => {

    const [categories, setCategories ] = useState([ 'One Punch']);
   

    const onAddCategory = ( NewCategory)=>{
     
     if ( categories.includes(NewCategory) ) return;   //valida que solo se inserten valores unicos
     
     //1. forma de hacer agregar un dato al listado
        setCategories ([...categories,NewCategory]);//para trabajar con arreglos se utiliza el operador spead ...
    
        //2. forma
      // setCategories( cat => [ ...cat, 'mio']);
    }




  return (
    <>
    
        <h1>GitExpertApp</h1>

   
        <AddCategory
            onNewCategory = { event => onAddCategory(event)}
        />

       
        { 
            categories.map( ( category )=> (
                <GifGrid key={ category } category ={category}/>
            ))
        }
     
    </>
  )
}
