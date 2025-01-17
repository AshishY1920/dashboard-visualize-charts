import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./app.scss";
import Loader from "./components/Loader";

const categoryDistribution = {
  small_talk: 300,
  technical_support: 450,
  sales_inquiries: 350,
  customer_service: 400,
};

const Dashboard = lazy(() => import("./pages/Dashboard"));

const App = () => {
  return (
    <Router>
      <Suspense
        fallback={
          <Loader color={"rgba(1, 18, 34, 1)"} size={42} height={true} />
        }
      >
        <Routes>
          <Route path="/" element={<Dashboard data={categoryDistribution} />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
