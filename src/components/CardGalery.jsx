

import Card from 'react-bootstrap/Card';

const CardGalery = ({imgSrc, imgWidth, justify}) => {

    return <Card style={{width:imgWidth, height:'auto'}} className={`ms-3 my-3 border-white-transparent-0 bg-white-transparent-0 ${justify} `} >
                <Card.Img variant="top" src={imgSrc} />
           </Card>
}

export default CardGalery;