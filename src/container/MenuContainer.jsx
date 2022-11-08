import { gql, useSubscription } from '@apollo/client'
import React from 'react'
import MenuPage from '../component/MenuPage'


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

const MenuContainer = () => {
  const {data,loading} = useSubscription(GetResep)
  
  return (
    <MenuPage  reseps ={data} loading={loading}/> 
  )
}

export default MenuContainer