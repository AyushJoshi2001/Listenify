import { FC, memo } from "react";
import { Route, Switch } from "react-router";
import AboutPage from "../About.page";
import ContactPage from "../Contact.page";
import HomePage from "../Home.page";
import ProfilePage from "../Profile.page";

interface Props {}

const AppContainer: FC<Props> = (props) => {
  return (
    <div>
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
      </Switch>
    </div>
  );
};

AppContainer.defaultProps = {};

export default memo(AppContainer);
