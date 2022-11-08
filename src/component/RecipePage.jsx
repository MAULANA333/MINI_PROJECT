import React from 'react'
import NavbarTop from './NavbarTop'
import { Form, Button, Stack } from 'react-bootstrap';
import CardResepContainer from '../container/CardResepContainer';
import '../Css/Background.css'

const RecipePage = ({

  formData,
  handleSubmit,
  handleChangeFormData
}) => {
  const {id,nama, resep, deskripsi } = formData;
  return (
    <>
    <NavbarTop/><br/><br/><br/>
   <div className='container-fluid d-flex flex-row flex-wrap justify-content-center'>
        <Stack gap={4} className="d-flex flex-column justify-content-center align-items-center">
            <Form onSubmit={handleSubmit}>
              <Stack direction="horizontal" gap={3}>
                      <Form.Group>
                          <Form.Label className='text-label'>Id</Form.Label>
                          <Form.Control 
                          required
                          value={id}
                          onChange={(ev) => handleChangeFormData("id", ev.currentTarget.value)} />
                      </Form.Group>
                      <Form.Group>
                          <Form.Label className='text-label'>Nama</Form.Label>
                          <Form.Control 
                          required
                          value={nama} 
                          onChange={(ev) => handleChangeFormData("nama", ev.currentTarget.value)} />
                      </Form.Group>
                      <Form.Group>
                          <Form.Label className='text-label'>Resep</Form.Label>
                          <Form.Control
                          value={resep}
                          onChange={(ev) => handleChangeFormData("resep", ev.currentTarget.value)} />
                      </Form.Group>
                      <Form.Group>
                          <Form.Label className='text-label'>Deskripsi</Form.Label>
                          <Form.Control
                          value={deskripsi} 
                          onChange={(ev) => handleChangeFormData("deskripsi", ev.currentTarget.value)}/>
                      </Form.Group>
                      <Button className='button-submit' type="submit"  >
                      Submit</Button>
              </Stack>
            </Form>
          </Stack>
        </div><br/><br/><br/>
        <div className='container-fluid d-flex flex-row flex-wrap justify-content-center'> 
          <CardResepContainer/>
        </div>
    </>
  )
}

export default RecipePage