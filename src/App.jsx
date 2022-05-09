import Home from "./pages/Home";
// import Product from "./pages/Product";
// import Cart from "./pages/Cart";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import ProductList from "./pages/ProductList";
import { BrowserRouter as Router ,Routes,Route} from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";

const App = () => {
  return <div>
    <Router>
      <Routes>
      <Route path="/" element={ <Home/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />

      </Routes>
    
    </Router>
    
    </div>;
};

export default App;