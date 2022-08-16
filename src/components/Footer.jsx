import { Container } from "react-bootstrap";


const Footer = ({content}) => {
    return <Container fluid className="p-3 bg-white-transparent text-white sticky-bottom">
                <Container className="fw-semibold p-3">
                    {content}
                </Container>
           </Container>
}

export default Footer;