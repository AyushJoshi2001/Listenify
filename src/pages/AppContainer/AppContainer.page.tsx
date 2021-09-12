import { FC, memo } from "react";
import { Route, Switch } from "react-router";
import Navbar from "../../components/Navbar";
import Sidenav from "../../components/Sidenav";
import AboutPage from "./About.page";
import ContactPage from "./Contact.page";
import HomePage from "./Home.page";
import PlayPage from "./Play.page";
import ProfilePage from "./Profile.page";

interface Props {}

const AppContainer: FC<Props> = (props) => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidenav className="flex-shrink-0" />
        <div className="w-full bg-gray-100">
          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>
            <Route path="/profile">
              <ProfilePage />
            </Route>
            <Route path="/about">
              <AboutPage />
            </Route>
            <Route path="/contact">
              <ContactPage />
            </Route>
            <Route path="/play/:musicId">
              <PlayPage />
            </Route>
          </Switch>
        </div>
      </div>
    </>
  );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);
