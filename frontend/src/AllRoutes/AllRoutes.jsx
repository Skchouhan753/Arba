
import { Route, Routes } from "react-router-dom";
import Signup from "../component/signup/Signup";
import Login from "../component/login/Login";

function AllRoutes() {
  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        {/* <Route path="/products" element={<Products />} /> */}
      </Routes>
    </>
  );
}
export default AllRoutes;
