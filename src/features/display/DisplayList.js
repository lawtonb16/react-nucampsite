import { Col, Row} from 'reactstrap';
import DisplayCard from './DisplayCard';
import { selectFeaturedCampsite } from '../campsites/campsiteSlices';
import { selectFeaturedPromotion } from '../promotions/promotionSlice';
import { selectFeaturedPartner } from '../partners/partnersSlice';

const DisplayList = () => {
    const items = [selectFeaturedCampsite(),selectFeaturedPromotion(),selectFeaturedPartner()];

    return ( 
        <Row>
            {items.map((item,idx) => <Col md className='m-1' key={idx}><DisplayCard item={item} /></Col> )}
        </Row>
     );
}
 
export default DisplayList;