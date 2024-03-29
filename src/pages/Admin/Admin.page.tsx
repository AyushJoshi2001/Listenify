import { FC, memo, useContext } from "react";
import { Link } from "react-router-dom";
import Dropdown from "../../components/Dropdown";
import logo from "../../img/Listenify_logo.png";
import * as yup from "yup";
import { useFormik } from "formik";
import { storage } from "../../firebase";
import { addSong, deleteSong } from "../../api/auth";
import SongContext from "../../context/songs.context";
import DeleteSongCard from "../../components/DeleteSongCard";
import Footer from "../../components/Footer";
import Sidenav from "../../components/Sidenav";

interface Props {}

const Admin: FC<Props> = (props) => {
  const { songs } = useContext(SongContext);

  const imageStorageRef = storage.ref("Image/");
  const songsStorageRef = storage.ref("Songs/");

  const formik = useFormik({
    initialValues: {
      Song_Name: "",
      Artist: "",
      Year: "",
      Song: null,
      Song_Image: null,
    },

    validationSchema: yup.object().shape({
      Song_Name: yup.string().required(),
      Artist: yup.string().required(),
      Year: yup.string().required(),
      Song: yup.mixed().required(),
      Song_Image: yup.mixed().required(),
    }),

    onSubmit: (data) => {
      let imageUrl: string;
      let songUrl: string;
      const fileRef = songsStorageRef.child(data.Song_Name);
      const imageRef = imageStorageRef.child(data.Song_Name);
      const uploadTask = fileRef.put(data.Song!);
      // console.log(data.Song);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          var progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
        },
        (error) => {
          // Handle unsuccessful uploads
          console.log("error occured... song");
          alert("Error occured while uploading the song.");
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            songUrl = downloadURL;
            console.log("File available at", downloadURL);

            // after successful upload of song now upload image.
            const imageUploadTask = imageRef.put(data.Song_Image!);
            imageUploadTask.on(
              "state_changed",
              (snap) => {
                var progress = (snap.bytesTransferred / snap.totalBytes) * 100;
                console.log("Upload is " + progress + "% done");
              },
              (error) => {
                // Handle unsuccessful uploads
                console.log("error occured... song");
              },
              () => {
                imageUploadTask.snapshot.ref
                  .getDownloadURL()
                  .then((downloadURL) => {
                    imageUrl = downloadURL;
                    console.log("File available at", downloadURL);

                    // upload details in fireStore
                    addSong({
                      Artist: data.Artist,
                      Download_URL: songUrl,
                      Img_URL: imageUrl,
                      Song_Name: data.Song_Name,
                      Year: data.Year,
                      Song_ID: data.Song_Name + data.Year,
                    });
                  });
              }
            );
          });
        }
      );
    },
  });

  return (
    <div className="bg-fixed bg-center bg-cover bg-admin-background">
      {/* navbar */}
      <div className="sticky top-0 z-10 justify-between hidden mx-auto bg-black bg-opacity-80 sm:flex max-w-screen-2xl">
        <div className="flex items-center px-5 py-2 space-x-6 text-lg font-semibold text-white md:space-x-16 md:text-xl ">
          <Link to="/">
            <div className="flex items-center justify-center px-5">
              <img className="w-16 h-16 rounded-full" src={logo} alt="logo" />
              <h1 className="px-2 text-4xl font-bold text-white">Listenify</h1>
            </div>
          </Link>
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/admin">Admin</Link>
        </div>
        <div className="flex items-center">
          <Dropdown />
        </div>
      </div>
      <Sidenav className="flex-shrink-0" />

      <div className="max-w-5xl mx-auto mt-10 text-white bg-black rounded-lg bg-opacity-80">
        <p className="px-5 pt-10 text-4xl font-bold">Add Song</p>
        <form className="px-5 py-10 space-y-8" onSubmit={formik.handleSubmit}>
          <div className="flex flex-col items-center space-y-3">
            <div className="flex flex-col space-y-3">
              <label htmlFor="Song" className="text-sm">
                Song File* (.MP3)
              </label>
              <input
                type="file"
                name="Song"
                accept=".mp3,audio/*"
                id="Song"
                onChange={(event) => {
                  formik.setFieldValue("Song", event.currentTarget.files![0]);
                }}
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="Song_Image" className="text-sm">
                Song Poster* (.jpg , .jpeg , .png)
              </label>
              <input
                type="file"
                name="Song_Image"
                accept=".png,.jpg,.jpeg"
                id="Song_Image"
                onChange={(event) => {
                  formik.setFieldValue(
                    "Song_Image",
                    event.currentTarget.files![0]
                  );
                }}
              />
            </div>
          </div>
          <div className="flex flex-col space-y-3">
            <label htmlFor="Song_Name" className="text-sm ">
              Song Name*
            </label>
            <input
              className="px-2 py-2 bg-transparent border border-white rounded-lg outline-none "
              type="text"
              onChange={formik.handleChange}
              name="Song_Name"
              value={formik.values.Song_Name}
              required
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label htmlFor="Artist" className="text-sm ">
              Artist*
            </label>
            <input
              className="px-2 py-2 bg-transparent border border-white rounded-lg outline-none "
              type="text"
              value={formik.values.Artist}
              onChange={formik.handleChange}
              name="Artist"
              required
            />
          </div>
          <div className="flex flex-col space-y-3">
            <label htmlFor="Year" className="text-sm ">
              Year*
            </label>
            <input
              name="Year"
              type="text"
              value={formik.values.Year}
              onChange={formik.handleChange}
              className="px-2 py-2 bg-transparent border border-white rounded-lg outline-none "
              required
            />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-transparent border-2 border-green-600 rounded-lg outline-none hover:border-red-600"
            >
              Add
            </button>
          </div>
        </form>
      </div>
      <div className="max-w-5xl px-10 mx-auto mt-20 text-white bg-black bg-opacity-80 rounded-xl">
        <p className="py-5 text-3xl font-semibold">Delete Songs</p>
        <div className="flex flex-wrap">
          {songs.map((song) => {
            return (
              <DeleteSongCard
                onClick={() => {
                  deleteSong(song.Song_ID!);
                }}
                key={song.Song_ID}
                songName={song.Song_Name!}
                imageUrl={song.Img_URL!}
                Artist={song.Artist!}
                Year={song.Year!}
              />
            );
          })}
        </div>
      </div>
      <Footer className="mt-10 bg-black bg-opacity-80" />
    </div>
  );
};

Admin.defaultProps = {};

export default memo(Admin);
