import React, {useContext} from 'react'
import Context from '../hooks/context';
import Card from './Card';

export default function ListOfPatientsCards () {
  const { listPatients } = useContext( Context )
  console.log(listPatients.length)
  return (
    <div>
      ListOfPatientsCards
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
