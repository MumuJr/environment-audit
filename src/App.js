
import './App.css';

import {
  Route,
  Routes
} from "react-router-dom";

import { routes } from './routes';
import Navbar from './components/navbar/navbar';

function App() {
  return <div>
    <Navbar/>
    <Routes>
        {routes.map((route, index) => <Route
            key={index}
            path={route.path}
            element={route.component}
        />)}
    </Routes>
  </div>
  
}

export default App;
