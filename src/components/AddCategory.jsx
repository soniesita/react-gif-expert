import { useState } from 'react'


export const AddCategory = ({onNewCategory}) => {
  
  
  const [inputValue, setInputValue] = useState('');
  
  const onInputChange =({ target })=>{
    setInputValue(target.value);
  }

  const onSubmit = ( event ) => {
    event.preventDefault();//impide que e haga  un refresh del navegador web
   //si borrando los espacios adelanre y atras los caracteres son mayor o igual a 1 entonces que haga un retorn sino que salga de la funcion
    if( inputValue.trim().length<=1) return ;

    //setCategories([...categories, inputValue])//1.fomra
   // setCategories( categories => [ inputValue, ...categories]); //2. forma
   onNewCategory( inputValue.trim() );
    setInputValue('');
  }
  
    return (
   
  // <form onSubmit={ (event) => onSubmit(event) }> //primera forma
    <form onSubmit={ onSubmit }>
          <input
                type="text"  //propertys
                placeholder="Buscar gifs" //propertys
                value={ inputValue }  //propertys
                onChange={ onInputChange }// como aqui se recibe un solo parametro se puede obviar 
          />
    </form>    
  )
}

