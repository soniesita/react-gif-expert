import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  
     const [images, setImages]= useState( [] );
     const [isLoading, setIsloading] = useState (true);

     const getImages = async() =>{
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsloading(false);
     }

    //no volver a ejecutar las peticiones    
     useEffect ( () => { 
        getImages();
    }, [])
 
    
 

    return {
        images,//images: images,
        isLoading
    }
 
}
 