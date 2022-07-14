import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";
import './Card.css'
function CustomCard({ image, title, body, path }) {
	return (
		<Col md={3} className='mt-4'>
			<Link to={`${path}`} className='custom-card-link text-center'>
				<Card>
					<Card.Img height={150} variant="top" src={image} />
					<Card.Body>
						<Card.Title className='text-dark '>{title}</Card.Title>
						<Card.Text>
							{body}
						</Card.Text>
					</Card.Body>
				</Card>
			</Link>
		</Col>
	);
}

export default CustomCard;