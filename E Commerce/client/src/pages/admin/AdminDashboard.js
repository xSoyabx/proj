import React from "react";
import Layout from "../../components/layout/layout";
import AdminMenu from "../../components/layout/AdminMenu";
import { useAuth } from "../../context/Auth";

const AdminDashboard = () => {
  const [auth] = useAuth()
  return (
    <Layout>
      <div className="conatiner-fluid m-3 p3">
        <div className="row">
          <div className="col-md-3">
           <AdminMenu />
          </div>
          <div className="col-md-9">
            <div className="card">
              <h1>{auth?.user?.name}</h1>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
