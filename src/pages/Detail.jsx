import { useParams } from 'react-router-dom';
import CenterRateCard from '../components/centerRateCard/CenterRateCard';

const Detail = () => {
    const { commodity } = useParams();
    return (
        <div className='container'>
            <h2>Detail Page for {commodity.charAt(0).toUpperCase() + commodity.slice(1)}</h2>
            <p>More information about {commodity} will be displayed here.</p>
            <CenterRateCard />
        </div>
    );
  };
  
  export default Detail;