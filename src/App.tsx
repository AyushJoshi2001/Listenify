import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { TOKEN_ID } from "./api/auth";
import AuthContext from "./context/auth.context";
import { auth } from "./firebase";
import { User } from "./models/User";
import AppContainerPage from "./pages/AppContainer/AppContainer.page";
import AuthPage from "./pages/Auth/Auth.page";
import NotFoundPage from "./pages/NotFound.page";

function App() {
  const [user, setUser] = useState<User>();
  const token = localStorage.getItem(TOKEN_ID);

  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      if (u != null) {
        // console.log("user: ", u);
        setUser(u);
      }
    });
  }, []);

  if (token && !user) {
    return (
      <div className="flex items-center justify-center min-w-full min-h-screen">
        <ImSpinner9 className="w-20 h-20 text-blue-500 animate-spin " />
      </div>
    );
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            {user ? <Redirect to="/home" /> : <Redirect to="/login" />}
          </Route>
          <Route
            path={["/home", "/about", "/contact", "/profile", "/play/:musicId"]}
            exact
          >
            {user ? <AppContainerPage /> : <Redirect to="/login" />}
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
