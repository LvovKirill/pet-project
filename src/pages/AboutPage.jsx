// import { Wrapper, Status } from "@googlemaps/react-wrapper"; 
import { YMaps, Map } from '@pbe/react-yandex-maps';

const AboutPage = () => {
  return (
    <YMaps>
    <div >
      <Map className='map' defaultState={{ center: [55.75, 37.57], zoom: 9 }} />
    </div>
  </YMaps>
  );
}

export default AboutPage;