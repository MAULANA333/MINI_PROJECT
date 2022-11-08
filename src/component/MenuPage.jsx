import React from 'react'
import NavbarTop from './NavbarTop'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import gado from '../Img/gado-gado.png';
import ikan from '../Img/ikanasammanis.jpg';
import ayam from '../Img/ayambakartaliwang.jpg';
import gurame from '../Img/guramebakar.jpg';
import { Container, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../Css/Background.css'


const MenuPage = ({
  reseps,
  loading,
}) => {
  const user = useSelector((state) => state.user.user)
  return (
    <>
    <NavbarTop/>
    
    <Container fluid className='p-3 d-flex flex-row flew-wrap justify-content-around mt-5'>
      <Card style={{ width: '20rem' }} className=''>
        <Card.Img className='p-1' variant="top" src={gado} width="150px" height="200px"/>
        <Card.Body>
          <Card.Title>Mixed Vegetables With the Peanut Sauce </Card.Title>
          <Card.Text>
            Mixed vegetables with the peanut sauce atau yang bahasa gaulnya gado-gado, merupakan makanan asli indonesia
            
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '20rem' }} className=''>
        <Card.Img className='p-1' variant="top" src={gurame} width="150px" height="200px"/>
        <Card.Body>
          <Card.Title>GRILLED GIANT GOURAMI </Card.Title>
          <Card.Text>
            Giant Gourami atau ikan gurame adalah adalah salah satu jenis ikan air tawar yang sangat sering kita jumpai pada menu-menu di restaurant, pada kesempatan kali ini kita mengolahnya menjadi gurame bakar.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '20rem' }} className=''>
        <Card.Img className='p-1' variant="top" src={ayam} width="150px" height="200px"/>
        <Card.Body>
          <Card.Title>GRILLED CHICKEN TALIWANG</Card.Title>
          <Card.Text>
          Ayam Taliwang adalah makanan khas yang berasal dari Taliwang, Sumbawa Barat. Makanan ini mulai dipopulerkan ke luar daerah pertama kali oleh masyarakat Taliwang yang tinggal di Kampung Taliwang, Kota Mataram, Nusa Tenggara Barat. Banyak yang salah mengartikan bahwa ayam taliwang ini adalah makanan khas Lombok
          </Card.Text>
        </Card.Body>
      </Card>
      <Card style={{ width: '20rem' }} className=''>
        <Card.Img className='p-1' variant="top" src={ikan} width="150px" height="200px"/>
        <Card.Body>
          <Card.Title>SWEET AND SOUR FISH</Card.Title>
          <Card.Text>
          Saus Asam Manis berasal dari China. Saus ini terbuat dari bahan-bahan seperti air, saus tomat, cuka, garam, gula, dan juga tepung. Tepung berperan untuk memberikan efek kental pada saus. Biasanya jenis tepung yang digunakan adalah tepung sagu atau tepung kentang.
          
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
    <div className='p-3 d-flex flex-row flew-wrap justify-content-evenly mt-4'>
      {
        loading
        ?
        <Spinner animation='border' variant='primary'/>
        :
        reseps?.misterk_resep.map((resep) => (
          <Card style={{ width: '23rem' }} className='m-2'>
            <div>
            <Card.Header>{resep.nama}<br/><span> By : {user}</span></Card.Header>
            </div>
            <Card.Body style={{height:'20vh'}} className='d-flex flex-column justify-content-between'>
            <div>{resep.deskripsi}<br/>
            Resep : {resep.resep}</div>
            <div className='d-flex flex-row'>
                  <Link to={`/resep/${resep.id}`} key={resep.id}>
                      <Button variant="primary">Resep!</Button>
                  </Link>
            </div>
            </Card.Body>
          </Card>
        ))
      }
    </div>
    </>
    
    
  )
}

export default MenuPage