import { doc, setDoc } from 'firebase/firestore';
import React, { useRef } from "react";
import { db } from './firebase';

export default function AddNew({path}) {
    const name = useRef();

    const handelsubmit =async (e) =>{
        e.preventDefault();
      const docRef = doc(db, path, name.current.value);
      await setDoc(docRef, { name: name.current.value });



        
        e.target.reset();
    }

  return (
    <div>
       <form onSubmit={handelsubmit}>
         <input ref={name}/>
         <button type="submit">add new</button>
       </form>
    
    </div>
  )
}
