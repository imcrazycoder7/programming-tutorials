import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Tutorials from './pages/Tutorial';

const Layout = () => {
    return (
        <Router>
             <Routes>
                <Route exact path='/' element={<Home />}/>
                <Route exact path='/:name/:slug' element={<Tutorials />}/>
             </Routes>
        </Router>
    );
}
export default Layout;