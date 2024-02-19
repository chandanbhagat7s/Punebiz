import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import MainOut from "./Pages/MainOut";
import Home from "./Components/Home";

function App() {
  return (
    <>
      {/* <Menue />
      <CardDetails />
      <Reg />
      <Login />
      <ContactUS /> */}
      {/* <About />
      <Subscription /> */}
      {/* <AdminDash /> */}

      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainOut>
                <Home />
              </MainOut>
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
