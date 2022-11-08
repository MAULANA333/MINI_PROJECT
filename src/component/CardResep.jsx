import React from 'react'
import { Card, Button,Spinner } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const CardResep = ({
    reseps,
    loading,
    handleDelete

}) => {
  const user = useSelector((state) => state.user.user)
  return (
    <div className='d-flex flex-row flex-wrap'>
        {
        loading
        ?
        <Spinner animation="border" variant='primary'/>
        :
        reseps?.misterk_resep.map((resep) =>(
          <Card className="m-1" border="primary" style={{ width: '24rem' }}>
            <Card.Header >
                {resep.nama}<br/><span> By : {user}</span>
           </Card.Header>
            <Card.Body>
              <Card.Title>{resep.id}</Card.Title>
                <Card.Text className='d-flex flex-column justify-content-between' style={{height:'17vh'}}>
                  <div>Deskripsi : <br/>{resep.deskripsi}</div>
                  <div className='d-flex flex-row justify-content-between'>
                  <Link to={`/resep/${resep.id}`} key={resep.id}>
                      <Button variant="primary">Resep!</Button>
                  </Link>
                  <Button onClick={()=> handleDelete(resep.id)}
                 >
                  X</Button>
                  </div>
                </Card.Text>
            </Card.Body>
          </Card>
        ))
      }
    </div>
  )
}

export default CardResep