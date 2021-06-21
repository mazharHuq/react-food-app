import {useEffect, useState} from "react";

const meals=()=>{
   [meals,setmeal]= useState('');
    useEffect({

        fethchMeal();
    })
}
export default meals;