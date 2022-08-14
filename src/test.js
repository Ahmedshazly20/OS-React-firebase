import React from 'react';
import{db}from './firebase';
import {useCollectionData} from'react-firebase-hooks/firestore'
import { collection } from '@firebase/firestore';
import ChildrenList from './ChildrenList';
import AddNew from './AddNew';
export default function Tesi() {
    const query =collection(db,"oses");
    const [docs, loading, error] = useCollectionData(query);
    

  return (
    <div>
       <h2>
          {loading && "loading..."}

          <ul>
            {docs?.map((doc) =>(<div key={Math.random()}>
               <li> {doc.name}</li>
                <ChildrenList path={`oses/${doc.name}/children`}/>
              </div>))}
          </ul>
          <AddNew path="oses" />
       </h2>
       
    </div>
  )
}
