import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, ChecKout, ProductPage, Header, Footer } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="product/:id" element={<ProductPage />} />
        <Route path="/checkout" element={<ChecKout />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
