import { useEffect, useState } from "react";
import { ImSpinner9 } from "react-icons/im";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { ADMIN_UID, fetchSongsData, TOKEN_ID } from "./api/auth";
import AuthContext from "./context/auth.context";
import queryContext from "./context/query.context";
import SongContext from "./context/songs.context";
import { auth } from "./firebase";
import { User } from "./models/User";
import AdminPage from "./pages/Admin/Admin.page";
import AppContainerPage from "./pages/AppContainer/AppContainer.page";
import AuthPage from "./pages/Auth/Auth.page";
import NotFoundPage from "./pages/NotFound.page";

function App() {
  const [user, setUser] = useState<User>();
  const [songs, setSongs] = useState<any[]>([]);
  const [query, setQuery] = useState("");
  const token = localStorage.getItem(TOKEN_ID);

  useEffect(() => {
    auth.onAuthStateChanged((u) => {
      if (u !== null) {
        // console.log("user: ", u);
        setUser(u);
        fetchSongsData().then((snapshot) => {
          if (snapshot.docs.length > 0) {
            let temp = snapshot.docs.reduce((prev: any, doc: any) => {
              return [...prev, doc.data()];
            }, []);
            setSongs(temp);
            // console.log(temp);
          }
        });
      }
    });
  }, []);
  // console.log("app render...");

  if (token && !user) {
    return (
      <div className="flex items-center justify-center min-w-full min-h-screen">
        <ImSpinner9 className="w-20 h-20 text-blue-500 animate-spin " />
      </div>
    );
  }

  return (
    <queryContext.Provider value={{ query, setQuery }}>
      <SongContext.Provider value={{ songs, setSongs }}>
        <AuthContext.Provider value={{ user, setUser }}>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact>
                {user ? <Redirect to="/home" /> : <Redirect to="/login" />}
              </Route>
              <Route
                path={[
                  "/home",
                  "/about",
                  "/contact",
                  "/profile",
                  "/play/:musicId",
                ]}
                exact
              >
                {user ? <AppContainerPage /> : <Redirect to="/login" />}
              </Route>
              <Route path={["/login", "/signup"]} exact>
                {user ? <Redirect to="/" /> : <AuthPage />}
              </Route>
              <Route path={"/admin"} exact>
                {user && user.uid === ADMIN_UID ? (
                  <AdminPage />
                ) : (
                  <div className="flex items-center justify-center min-w-full min-h-screen text-4xl font-bold bg-red-600 ">
                    You don't have admin access.
                  </div>
                )}
              </Route>
              <Route>
                <NotFoundPage />
              </Route>
            </Switch>
          </BrowserRouter>
        </AuthContext.Provider>
      </SongContext.Provider>
    </queryContext.Provider>
  );
}

export default App;
