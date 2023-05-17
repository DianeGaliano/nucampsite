import { Routes, Route } from 'react-router-dom';
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import CampsiteDetailPage from './pages/CampsiteDetailPage';
import CampsitesDirectoryPage from './pages/CampsitesDirectoryPage';
import AboutPage from './pages/AboutPage';
import { useEffect } from 'react';
import { useDispatch } from 'reactredux';
import { fetchCampsites } from './features/campsites/campsitesSlice';
import './App.css';

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchCampsites());
    }, [dispatch]);
    
    return (
        <div className='App'>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='contact' element={<ContactPage />} />
                <Route path='directory' element={<CampsitesDirectoryPage />} />
                <Route
                    path='directory/:campsiteId'
                    element={<CampsiteDetailPage />}
                />
                <Route path='about' element={<AboutPage/>} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;