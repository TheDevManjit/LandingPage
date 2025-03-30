import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Popup from './components/Popup';
import Footer from './components/Footer';
import CtaSection from './components/CtaSection';
import Home from './Pages/Home';
import WorkInProgress from './components/WorkInProcess'

function App() {
    return (
        <Router>
            <NavBar />
            <Popup />

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/learn-more" element={<WorkInProgress featureName="Learn More Page" />} />
                <Route path="*" element={<Home />} /> {/* Handles unmatched paths */}
            </Routes>

           
            <Footer />
        </Router>
    );
}

export default App;




