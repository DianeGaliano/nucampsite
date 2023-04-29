import { Col } from "reactstrap";
import Partner from "./Parnter";
import { selectAllPartner } from '../partners/partnersSlice';

const PartnersList = () => {
    const partners = [ selectAllPartner() ];

    return (
        <Col className="mt-4">
            {partners.map((partner) => {
                return (
                    <div className="d-flex md-5" key={partner.id}>
                        <Partner partner={partner}/>

                    </div>
                );
            })}
        </Col>
    );

};

export default PartnersList;