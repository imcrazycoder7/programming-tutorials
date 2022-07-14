import { Container } from "react-bootstrap"
import CustomCard from "../components/Card";
import Row from 'react-bootstrap/Row';
const Home = () => {
    const data = [
        {
            image: "images/js.png",
            title: "Javascript Tutorials",
            body: "javascript is programming languague",
            path: '/javascript/javascript_introduction'
        },
        {
            image: "images/selenium.jpg",
            title: "Selenium Tutorials",
            body: "Selenium is programming languague",
            path: '/selenium'
        },
        {
            image: "images/angular.png",
            title: "Angular Tutorials",
            body: "Angular is programming languague",
            path: '/angular'
        },
        {
            image: "images/React.png",
            title: "React Tutorials",
            body: "React is programming languague"
        },
        {
            image: "images/python.png",
            title: "Python Tutorials",
            body: "Python is programming languague",
            path: '/python'
        },
        {
            image: "images/vue1.jpg",
            title: "VueJs Tutorials",
            body: "VueJs is programming languague",
            path: '/vue'
        },
        {
            image: "images/ionic.png",
            title: "ionic Tutorials",
            body: "ionic is programming languague",
            path: '/ionic'
        },
        {
            image: "images/nodejs.jpg",
            title: "NodeJS Tutorials",
            body: "NodeJs is programming languague",
            path: '/node'
        }
    ]
    return (
        <Container>
            <Row>
                {data.map((item, index) => <CustomCard key={index} {...item} />)}
            </Row>
        </Container>
    );
}

export default Home;