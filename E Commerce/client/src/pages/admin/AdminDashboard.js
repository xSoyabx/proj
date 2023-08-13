import React from "react";

import Layout from "../../components/layout/layout";
import AdminMenu from "../../components/layout/AdminMenu";

const AdminDashboard = () => {
  return (
    <Layout>
      <div className="conatiner-fluid m-3 p3">
        <div className="row">
          <div className="col-md-3">
           <AdminMenu />
          </div>
          <div className="col-md-9">content</div>
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;
