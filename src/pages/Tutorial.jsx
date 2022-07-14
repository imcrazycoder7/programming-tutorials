import { useParams, Link } from 'react-router-dom';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import ReactHtmlParser from 'react-html-parser';
import './Tutorial.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
const Tutorials = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [slug, setSlug] = useState('javascript_introduction');
    const [topics, setTopics] = useState([]);
    const params = useParams();
    console.log(params)
    const getTopics = async () => {
        const topicList = await axios.get(`http://localhost:8080/${params.name}`);
        setTopics(topicList.data);
    }

    const apiCall = async () => {
        const result = await axios.get(`http://localhost:8080/${params.name}/${slug}`);
        setData(result.data);
    }
    useEffect(() => {
        getTopics();
    }, []);
    useEffect(() => {
        apiCall();
        setLoading(false);
    }, [slug]);
    return (
        <Row className='padding-horizental'>
            {!loading && <>
                <Col md={3} className='side-menu'>
                    <ListGroup>
                        {topics.map((item, index) => {
                            return (
                                <ListGroup.Item key={index}>
                                    <Link onClick={() => setSlug(item?.slug)} to={`/${params.name}/${item?.slug}`}>{item?.title}</Link>
                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                </Col>
                <Col md={7}>
                    {ReactHtmlParser(data[0]?.contents)}
                </Col>
                <Col md={2}>
                </Col></>}
        </Row>
    )
}
export default Tutorials;