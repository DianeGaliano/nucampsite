import { Col, Row, } from 'reactstrap';
import CampsiteCard from "./CampsiteCard";
import { selectAllCampsites } from './campsitesSlice';
import { useSelector } from 'react-redux';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const CampsitesList = () => {
    const campsites = useSelector(selectAllCampsites);
    console.log('campsites:', campsites);
    return (
        <Row className='ms-auto'>
            {campsites.map((campsite) => {
                return (
                    <Col md='5' className='m-4' key={campsite.id}>
                        <CampsiteCard campsite={campsite} />
                    </Col>
                );
            })}
        </Row>
    );
};
export default CampsitesList;