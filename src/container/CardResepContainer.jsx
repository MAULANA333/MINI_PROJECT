import React from 'react'
import CardResep from '../component/CardResep'
import { gql, useMutation, useSubscription } from '@apollo/client'

const GetResep = gql` 
subscription MySubscription {
  misterk_resep {
    deskripsi
    id
    nama
    resep
  }
}

`
const DeleteResep = gql`
mutation MyMutation($id: Int! ) {
    delete_misterk_resep_by_pk(id: $id) {
      deskripsi
      nama
      id
      resep
    }
  }
`

const CardResepContainer = () => {
    const {data,loading} = useSubscription(GetResep)
    const [deleteResep, {loading: loadingDelete}] = useMutation(DeleteResep)

    const handleDelete =(idx) => {
        deleteResep({variables: {id:idx}})
    }


    return (
      <CardResep reseps ={data} loading={loading} handleDelete={handleDelete}/> 
    )
  }

export default CardResepContainer