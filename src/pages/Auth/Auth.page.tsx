import { FC, memo } from "react";
import { Route, Switch } from "react-router";
import LoginPage from "./Login.page";
import SignupPage from "./Signup.page";

interface Props {}

const Auth: FC<Props> = (props) => {
  return (
    <div>
      <Switch>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
      </Switch>
    </div>
  );
};

Auth.defaultProps = {};

export default memo(Auth);
