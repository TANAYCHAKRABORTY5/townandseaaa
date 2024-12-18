import Header from "./components/Header";
import Slider from "./components/Slider";

import Shop from "./components/Shop";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Slider />
              <Shop />
            </>
          }
        />
        <Route path="/Shop" element={<Shop />} />
      </Routes>
    </>
  );
}

export default App;
