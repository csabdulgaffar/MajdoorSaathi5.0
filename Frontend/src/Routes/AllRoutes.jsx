import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminJobFormPage from "../Pages/AdminJobFormPage";
import AdminJobListingPage from "../Pages/AdminJobListingPage";
import Home from "../Pages/Home";
import LoginPage from "../Pages/LoginPage";
import SignUpPage from "../Pages/SignUpPage";
import UserAppliedJobs from "../Pages/UserAppliedJobs";
import UserJobsPage from "../Pages/UserJobsPage";
import PrivateRoute from "./PrivateRoute";
import Contact from "../Pages/Contact";
import About from "../Pages/About";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<SignUpPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />

        <Route
          path="/adminjobform"
          element={
            <PrivateRoute>
              <AdminJobFormPage></AdminJobFormPage>
            </PrivateRoute>
          }
        />
        <Route
          path="/adminjoblisting"
          element={
            <PrivateRoute>
              <AdminJobListingPage></AdminJobListingPage>
            </PrivateRoute>
          }
        />
        <Route
          path="/userjobspage"
          element={
            <PrivateRoute>
              <UserJobsPage></UserJobsPage>
            </PrivateRoute>
          }
        />
        <Route
          path="/userjobsapplied"
          element={
            <PrivateRoute>
              <UserAppliedJobs></UserAppliedJobs>
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default AllRoutes;
