import { gql, useSubscription } from '@apollo/client'
import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import DetailResep from '../component/DetailResep'



const GetDetail= gql `
subscription MySubscription($id: Int!) {
    misterk_resep(where: {id: {_eq: $id}}) {
      deskripsi
      id
      nama
      resep
    }
  }
  
`




const DetailResepContainer = () => {
    const navigate = useNavigate()
    const {id} = useParams ();
    const {data,loading} = useSubscription (GetDetail, {variables: {id}}
      );
    console.log (data)


  
const handleGoBack = ()=>{
      navigate(-1);
  }
  

    return (
        <DetailResep  resepData={data} 
        handleGoBack={handleGoBack}
        loading={loading}/> 
  )
}

export default DetailResepContainer