import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';

const CampsiteCard = ({ campsite }) => {
    const { id, image, name } = campsite;
    return (
<<<<<<< HEAD
        <Link to={`${id}`}>
            <Card>
                <CardImg width='100%' src={image} alt={name} />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
=======
        <Card>
            <CardImg 
                width='100%' 
                src={image} 
                alt={name} 
            />
            <CardImgOverlay>
                <CardTitle>{name}</CardTitle>
            </CardImgOverlay>
        </Card>
>>>>>>> cd2ffcaaa1ec98647debd301fce1b263e68d87dd
    );
};
export default CampsiteCard;