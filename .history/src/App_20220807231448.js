import { BrowserRouter as Routes, Router, Route } from 'react-router-dom';
import Shop from './pages/Shop';
import News from './pages/News';
import About from './pages/About';
import Sale from './pages/Sale';
import Contact from './pages/Contact';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes><
                    <Route path="/" element={<Shop/>} />
                    <Route path="/Sale" element={<Sale/>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
