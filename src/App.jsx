import "./App.scss";
import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import { Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { navMenuLists } from "./components/nav/menuItems/navMenuLists";
import { helpMenuLists } from "./components/footer/helpMenuList";
import { Suspense, useState } from "react";
import FloatingMenu from "./components/nav/menuItems/FloatingMenu";
import Overlay from "./components/backdrop-overlay/Overlay";
import ProductComparison from "./components/home/productComparison/ProductComparison";
import Checkout from "./components/home/checkout/Checkout";
import CartPage from "./components/home/cartPage/CartPage";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="App">
      <RecoilRoot>
        <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        {isMenuOpen && <Overlay actionOverlay={toggleMenu} />}
        <FloatingMenu isMenuOpen={isMenuOpen} />
        <Suspense fallsback={<div>Loading...</div>}>
          <Routes>
            {navMenuLists.map((route) => {
              return (
                <Route
                  key={route.id}
                  path={route.path}
                  element={route.component}
                />
              );
            })}

            {helpMenuLists.map((route) => {
              return (
                <Route
                  key={route.id}
                  path={route.path}
                  element={route.component}
                />
              );
            })}
            <Route
              path="/productComparison/:id"
              element={<ProductComparison />}
            />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<CartPage />} />
            <Route
              path="/productComparison/:id"
              element={<ProductComparison />}
            />
          </Routes>
        </Suspense>
        <Footer />
      </RecoilRoot>
    </div>
  );
}

export default App;
