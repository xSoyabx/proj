// import React from "react";
// import Header from "./header";
// import { Helmet } from "react-helmet";
// import { Toaster } from "react-hot-toast";

// const Layout2 = ({ children, title, description, keywords, author }) => {
//   return (
//     <div>
//       <Helmet>
//         <meta charSet="utf-8" />
//         <meta name="description" content={description} />
//         <meta name="keywords" content={keywords} />
//         <meta name="author" content={author} />
//         <title>{title}</title>
//       </Helmet>
//       <Header />
//       <main style={{ minHeight: "80vh" }}>
//         <Toaster />
//         {children}
//       </main>
//     </div>
//   );
// };

// Layout2.defaultProps = {
//   title: "Helmets",
//   description: "Helmets and other bike accesories",
//   keywords: "mern,react,node,express,react,helmets,bike",
//   author: "Rohini Helmet",
// };
// export default Layout2;

import React from "react";
import Header from "./header";
import { Helmet } from "react-helmet";
import { Toaster } from "react-hot-toast";

const Layout2 = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      <Header />
      <Toaster />
      {children}
    </div>
  );
};

Layout2.defaultProps = {
  title: "Helmets",
  description: "Helmets and other bike accessories",
  keywords: "mern, react, node, express, react, helmets, bike",
  author: "Rohini Helmet",
};

export default Layout2;
