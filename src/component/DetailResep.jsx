import React from 'react'
import { Card, Spinner } from 'react-bootstrap'
import NavbarTop from './NavbarTop'
import '../Css/Background.css'

const DetailResep = ({
    handleGoBack,
    resepData,
    loading,
}) => {
  const renderData = () => (
    <>
    <div className='container w-50 d-flex flex-column justify-content-center'>
      <Card>
        <div>
        <Card.Header>{resepData.misterk_resep[0].nama}</Card.Header>
        </div>
        <Card.Body style={{height:'20vh'}} className='d-flex flex-column justify-content-between'>
        <div>{resepData.misterk_resep[0].deskripsi}</div><br/>
        <div>Resep : {resepData.misterk_resep[0].resep}</div>
        <div className='p-1 d-flex flex-row justify-content-end'>
            <button className="btn btn-primary w-30" onClick={handleGoBack}>Back</button>
        </div>
        </Card.Body>
      </Card>
    </div>
    </>
   )
  return (
   <>
   <div>
    <NavbarTop/>
   </div>
   <div className='container-fluid d-flex flex-column align-items-center'><br/>
    {
      loading
      ?
      <Spinner animation='border' variant='primary'/>
      :
      renderData()
    }
   </div>
   </>
    
   
  )
}

export default DetailResep