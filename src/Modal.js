 import React from 'react'

 export default function Modal({open,children}){
     if(!open) return null
     return (
      //add comment to madal
         <div>
             {children}
         </div>
     )
 }
