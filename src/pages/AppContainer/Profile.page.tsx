import { useContext } from "react";
import { FC, memo } from "react";
import AuthContext from "../../context/auth.context";

interface Props {}

const Profile: FC<Props> = (props) => {
  const { user } = useContext(AuthContext);
  // const [data, setData] = useState({ name: "", email: "" });
  // const handleChange = (
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) => {
  //   setData({ ...data, [event.target.name]: event.target.value });
  // };
  let name = "";
  let email = "";
  let emailVerified = "";
  if (user != null) {
    name = user!.displayName ? user.displayName : "";
    email = user!.email ? user.email : "";
    emailVerified = user!.emailVerified ? "Yes" : "No";
  }
  return (
    <div className="w-full min-h-screen bg-gray-200 ">
      <div className="mx-10 mt-10 bg-white rounded-lg">
        <div className="p-5">
          <h3 className="font-semibold text-gray-700">GENERAL INFORMATION</h3>
          <div className="flex flex-col pt-16 pb-8 md:px-16 xl:flex-row">
            <div className="flex-shrink-0 md:pr-10 lg:border-gray-300 xl:border-r">
              <img
                className="object-cover rounded-lg w-28 h-28"
                // add user profile photo
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                alt="profile"
              />
              <p className="pt-3 text-primary">Upload Picture</p>
            </div>
            <div className="flex flex-col pt-10 space-y-4 md:space-y-0 xl:pl-10 md:grid md:grid-cols-3 md:grid-rows-3 md:gap-x-5 md:gap-y-5 ">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-sm text-gray-500">
                  Name :
                </label>
                <input
                  className="p-2 border border-gray-500 rounded outline-none focus:border-primary focus:shadow-lg"
                  name="name"
                  value={name}
                  // onChange={handleChange}
                  type="text"
                  placeholder="Name"
                  required
                />
              </div>

              <div className="flex flex-col col-span-3">
                <label htmlFor="email" className="text-sm text-gray-500">
                  Email :
                </label>
                <input
                  className="w-full p-2 border border-gray-500 rounded outline-none focus:border-primary focus:shadow-lg"
                  name="email"
                  type="text"
                  value={email}
                  // onChange={handleChange}
                  placeholder="Email"
                ></input>
              </div>

              <div className="flex flex-col col-span-3">
                <label htmlFor="email" className="text-sm text-gray-500">
                  Email Verified :
                </label>
                <p>{emailVerified}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.defaultProps = {};

export default memo(Profile);
