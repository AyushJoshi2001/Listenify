import { FC, memo, useContext } from "react";
import { signout } from "../../api/auth";
import AuthContext from "../../context/auth.context";

interface Props {}

const Home: FC<Props> = (props) => {
  const { user } = useContext(AuthContext);
  return (
    <div>
      <button
        type="button"
        className="px-5 py-1 bg-red-500 rounded"
        onClick={() => {
          signout();
        }}
      >
        SignOut
      </button>
      <p>Hello! {user?.email}</p>
      <p>This is home page.</p>
    </div>
  );
};

Home.defaultProps = {};

export default memo(Home);
