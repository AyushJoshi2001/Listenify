import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthContext from "./context/auth.context";
import { User } from "./models/User";
import AppContainerPage from "./pages/AppContainer/AppContainer.page";
import AuthPage from "./pages/Auth/Auth.page";
import LoginPage from "./pages/Auth/Login.page";
import NotFoundPage from "./pages/NotFound.page";

function App() {
  const [user, setUser] = useState<User>();

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <LoginPage />
          </Route>
          <Route path={["/home", "/about", "/contact", "/profile"]} exact>
            <AppContainerPage />
          </Route>
          <Route path={["/login", "/signup"]} exact>
            <AuthPage />
          </Route>
          <Route>
            <NotFoundPage />
          </Route>
        </Switch>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
