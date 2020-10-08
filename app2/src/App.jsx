import React, { Suspense } from "react";

const Header = React.lazy(() => import("app1/Header"));

const App = () => (
  <Suspense fallback={<div>"Loading the header component"</div>}>
    <Header>Hi there, I'm React from Webpack 5.</Header>
  </Suspense>
);

export default App;
