import { FC, memo } from "react";
import { Route, Switch } from "react-router";
import Footer from "../../components/Footer";
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
      <div className="flex mx-auto max-w-screen-2xl">
        <Sidenav className="flex-shrink-0" />
        <div className="w-full bg-black">
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
      <Footer />
    </>
  );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);
