// import { Wrapper, Status } from "@googlemaps/react-wrapper"; 
import { YMaps, Map } from '@pbe/react-yandex-maps';
import './AboutPage.css'

const AboutPage = () => {
  return (
    <YMaps>
    <div className='map'>
      <Map defaultState={{ center: [55.75, 37.57], zoom: 11 }} />
    </div>
  </YMaps>
  );
}

export default AboutPage;