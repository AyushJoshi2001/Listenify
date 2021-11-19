import { useContext, useState } from "react";
import { FC, memo } from "react";
import { updateProfile } from "../../api/auth";
import AuthContext from "../../context/auth.context";

interface Props {}

const Profile: FC<Props> = (props) => {
  const { user } = useContext(AuthContext);

  const saveChanges = () => {
    updateProfile(data.name);
  };

  let name = "";
  let email = "";
  let emailVerified = "";
  if (user != null) {
    name = user!.displayName ? user.displayName : "";
    email = user!.email ? user.email : "";
    emailVerified = user!.emailVerified ? "Yes" : "No";
  }

  const [data, setData] = useState({ name: name });
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  return (
    <div className="w-full min-h-screen ">
      <div className="max-w-3xl mx-auto mt-10 text-white bg-gray-500 rounded-lg bg-opacity-30">
        <div className="p-5">
          <h3 className="font-semibold ">GENERAL INFORMATION</h3>
          <div className="flex flex-col pt-16 pb-8 divide-gray-400 md:px-16 md:flex-row md:divide-x-2">
            <div className="flex flex-col items-center justify-center flex-shrink-0 md:pr-10 ">
              <img
                className="object-cover rounded-lg w-28 h-28"
                // add user profile photo
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg"
                alt="profile"
              />
              <p className="pt-3 text-primary">Upload Picture</p>
            </div>
            <div className="flex flex-col pt-10 space-y-10 md:pl-10 ">
              <div className="flex flex-col space-y-3">
                <label htmlFor="name" className="text-sm ">
                  Name :
                </label>
                <input
                  className="px-2 py-2 bg-transparent border border-white rounded-lg outline-none "
                  name="name"
                  value={data.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Name"
                />
              </div>
              <div className="flex flex-col space-y-3">
                <label htmlFor="email" className="text-sm ">
                  Email :
                </label>
                <p>{email}</p>
              </div>

              <div className="flex flex-col space-y-3">
                <label htmlFor="email" className="text-sm ">
                  Email Verified :
                </label>
                <p>{emailVerified}</p>
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="px-5 py-1 text-white bg-green-600 rounded-lg"
              onClick={saveChanges}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Profile.defaultProps = {};

export default memo(Profile);
