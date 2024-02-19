import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import MainOut from "./Pages/MainOut";
import Home from "./Components/Home";
import Business from "./Components/Business";
import RegisterBusinesses from "./Components/RegisterBusinesses";
import About from "./Components/About";
import ContactUs from "./Components/ContactUs";
import Login from "./Components/Login";
import CardDetails from "./Components/CardDetails";
import AdminDash from "./Components/Admin/AdminDash";
import Advertisement from "./Components/Admin/EditCards";
import Users from "./Components/Admin/Users";
import AdminSub from "./Components/Admin/AdminSub";

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
        <Route
          path="/businesses"
          element={
            <>
              <MainOut>
                <Business />
              </MainOut>
            </>
          }
        ></Route>
        <Route
          path="/cardDetails"
          element={
            <>
              <MainOut>
                <CardDetails />
              </MainOut>
            </>
          }
        ></Route>
        <Route
          path="/login"
          element={
            <>
              <MainOut>
                <Login />
              </MainOut>
            </>
          }
        ></Route>
        <Route
          path="/about"
          element={
            <>
              <MainOut>
                <About />
              </MainOut>
            </>
          }
        ></Route>
        <Route
          path="/contactus"
          element={
            <>
              <MainOut>
                <ContactUs />
              </MainOut>
            </>
          }
        ></Route>
        <Route
          path="/registerBusinesses"
          element={
            <>
              <MainOut>
                <RegisterBusinesses />
              </MainOut>
            </>
          }
        ></Route>

        <Route
          path="/admin/home"
          element={
            <>
              <AdminDash />
            </>
          }
        ></Route>
        <Route
          path="/admin/businesses"
          element={
            <>
              <AdminDash />
            </>
          }
        ></Route>
        <Route
          path="/admin/advertisement"
          element={
            <>
              <Advertisement />
            </>
          }
        ></Route>
        <Route
          path="/admin/users"
          element={
            <>
              <Users />
            </>
          }
        ></Route>
        <Route
          path="/admin/subscription"
          element={
            <>
              <AdminSub />
            </>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
