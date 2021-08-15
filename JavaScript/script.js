"use strict";
//Переписать функцию indexOf чтобы она возвращала значения в конце 
 // indexOf - вычесляет значения в массиве.

 function indexOf(arr, value){
     for(let i in arr){
         if(arr[i] === value){
             return i
         }

         }        
        }

 let massiv = indexOf([0,1,2,3,4,5,6,7],7);
 console.log(massiv);

