import { gql, useMutation } from '@apollo/client'
import React from 'react'
import { getReseps } from '../API/api'
import RecipePage from '../component/RecipePage'
import { useState, useEffect } from 'react'
import { Await } from 'react-router-dom'

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

const InsertResep =gql`
mutation MyMutation($objects: [misterk_resep_insert_input!] = {}) {
  insert_misterk_resep(objects: $objects) {
    returning {
      id
      deskripsi
      nama
      resep
    }
  }
}
`
const UpdateResep =gql`
mutation MyMutation($id: Int, $deskripsi: String = "", $nama: String = "", $resep: String = "") {
  update_misterk_resep(where: {id: {_eq: $id}}, _set: {deskripsi: $deskripsi, nama: $nama, resep: $resep}) {
    returning {
      deskripsi
      id
      nama
      resep
    }
  }
}
`

const RecipeContainer = () => {
  const [reseps, setReseps] = useState([]);
  const [insertResep, {loading: loadingInsert}] = useMutation(InsertResep);
  const [updateResep, {loading: loadingUpdate}] = useMutation(UpdateResep);
  const {loading, setLoading} = useState([true]);
  console.log(reseps)


  const [formData, setFormData] = useState({
    resep: "",
    id: "",
    deskripsi:"",
    nama:""
  });

  const handleChangeFormData = (label, newValue) => {
    setFormData({
      ...formData,
      [label]: newValue,
    });
  };

  useEffect(() => {
    getReseps()
      .then((res) => {
        setReseps(res);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [loading]);

const handleSubmit = async (evt) => {
  evt.preventDefault()
  const resepLocation = reseps.findIndex((resep) => resep.id === +formData.id);
  
    if (resepLocation >= 0){
      await updateResep({
        variables: {
            nama : formData.nama,
            resep : formData.resep,
            id : +formData.id,
            deskripsi : formData.deskripsi,
            
          }
      })

    } else{
      await insertResep({
        variables: {
          objects: {
            nama : formData.nama,
            resep : formData.resep,
            id : +formData.id,
            deskripsi : formData.deskripsi,
            
          }
        }
      })
        .then((res) => {
          setReseps(prevState => [...prevState, res.data.insert_misterk_resep.returning[0]])
        })
    }
  }
  
  return (
    <RecipePage   reseps={reseps}
    loading={loading}
    formData={formData}
handleChangeFormData={handleChangeFormData}
handleSubmit={handleSubmit}/> 
  )
}

export default RecipeContainer