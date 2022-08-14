import React from 'react';
import{db}from './firebase';
import {useCollectionData} from'react-firebase-hooks/firestore';
import { collection } from '@firebase/firestore';
import AddNew from './AddNew';

export default function ChildrenList({path}) {
    const query =collection(db,path);
    const [docs, loading, error] = useCollectionData(query);
    


  return (
    <div>
    <ul>
        {loading && "Loading..."}

        {docs?.map((doc) => (
        <li key={Math.random()}>{doc.name}</li>
        ))}
        <AddNew path={path}/>
    </ul>
      
    </div>
  )
}
