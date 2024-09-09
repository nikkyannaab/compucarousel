import { Route, Routes } from "react-router-dom";
import HomePage from "../homePage";
import AdminPage from "../admin";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/admin" element={<AdminPage/>} />
    </Routes>
  );
};

export default AppRouter;
