import React from "react";
import Layout from "../components/layout/layout";
import { useAuth } from "../context/Auth";

const HomePage = () => {
  const [auth, setAuth] = useAuth();
  return (
    <Layout title={"Home"}>
      <h1>HomePage</h1>
      <pre>{JSON.stringify(auth, null, 4)}</pre>
    </Layout>
  );
};

export default HomePage;
