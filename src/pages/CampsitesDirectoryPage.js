import { Container } from 'reactstrap';
import CampsitesList from '../features/campsites/CampsitesList';
import SubHeader from '../components/SubHeader';

const CampsitesDirectoryPage = () => {
    return (
        <Container>
            <CampsitesList />
            <SubHeader current={"Directory"} />
        </Container>
    );
};

export default CampsitesDirectoryPage;