import Carousel from 'react-bootstrap/Carousel';
import '../Css/Carousol.css';
import React from 'react';

const CarouselHome = () => {
  return (
    <div>
   <Carousel className='container d-flex'>
      <Carousel.Item interval={2000}>
        <img
          className="d-flex"
          src={require('../Img/sate.png')}
          alt="First slide"
          width={500} height={500}
        />
        <Carousel.Caption>
          <h3>Sate Lilit</h3>
          <p>Dibakar dengan kualitas arang terbaik, menghasilkan paduan aroma serta rasa yang sempurna</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className='p-5'
          src={require('../Img/gado-gado.png')}
          alt="Second slide"
          width={500} height={500}
        />
        <Carousel.Caption>
          <h3>Gado-Gado</h3>
          <p>Terbuat dari sayuran terbaik indonesia, menjadikan gado-gado sebagai salad terlezat se Asia</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          src={require('../Img/ayam bakar.png')}
          alt="Third slide"
          width={500} height={500}
        />
        <Carousel.Caption>
          <h3>Ayam Bakar Taliwang</h3>
          <p>
           Diproses dengan cara yang terbaik, dipadukan dengan kualitas bahan pilihan, menjadikan ayam bakar taliwang sebagai ayam bakar terlezat saat ini.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className='p-3'
          src={require('../Img/beefsteak.png')}
          alt="Third slide"
          width={500} height={500}
        />
        <Carousel.Caption>
          <h3>Beefsteak</h3>
          <p>
            Diproses dengan penuh ketelitian, serta kualitas daging terbaik, menjadikan beef steak menjadi salah satu masakan terlezat di dunia saat ini.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className='p-3'
          src={require('../Img/salad.png')}
          alt="Third slide"
          width={500} height={500}
        />
        <Carousel.Caption>
          <h3>Routatuli Salad</h3>
          <p>
           Salah satu salad istimewa yang sangat di sukai warga eropa.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
 
  )
}

export default CarouselHome