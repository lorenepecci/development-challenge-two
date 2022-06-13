import React, {useContext} from 'react'
import Context from '../../hooks/context';
import Card from '../Card/Card';

export default function ListOfPatientsCards () {
  const { listPatients } = useContext( Context )
  
  return (
    <div >
      { listPatients.length &&
        listPatients.map( ( item, i ) => (
          <div key={ i }>
             <Card item={item} />
          </div>
        ))
      }
    </div>
  )
}
