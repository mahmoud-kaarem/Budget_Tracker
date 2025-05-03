import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import MainPage from './pages/MainPage';
import InsightsPage from './pages/InsightsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/main" />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/insights" element={<InsightsPage />} />  
      </Routes>
    </Router>
  );
}

export default App;
