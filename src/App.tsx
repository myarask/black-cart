import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  generatePath,
} from "react-router-dom";
import { paths } from "./constants";
import { ProductDetails } from "./pages";

const App = () => {
  const redirectURL = generatePath(paths.productDetails, { id: 1 });

  return (
    <BrowserRouter>
      <Switch>
        <Route path={paths.productDetails}>
          <ProductDetails />
        </Route>

        {/* Redirect for demo purposes */}
        <Redirect to={redirectURL} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
