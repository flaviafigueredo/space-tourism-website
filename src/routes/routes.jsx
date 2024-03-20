import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from '../components/header/header'
import { Home } from '../components/home/home';
import { Destination } from '../components/destination/destination';
import { Crew } from '../components/crew/crew';
import { Technology } from '../components/technology/technology';

export const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/destination" element={<Destination />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/technology" element={<Technology/>} />
        </Routes>
      </div>
    </Router>
  );
};