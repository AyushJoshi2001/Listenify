import { auth, db } from "../firebase";

export const TOKEN_ID = "token";
export const ADMIN_UID = "iyuql15lWuSx6UOCc0Ao0ZirwU03";

interface Signup {
    email: string;
    password: string;
}

export const signup = (data: Signup) => {
    // console.log("Signup details : " , data);
    return auth.createUserWithEmailAndPassword(data.email, data.password).then((response) => {
        auth.currentUser?.sendEmailVerification();
        return response;
      });
    
}

interface Login {
    email: string;
    password: string;
}

export const login = (data: Login) => {
    // console.log("Login details : " , data);
    return auth.signInWithEmailAndPassword(data.email, data.password);
}

export const signout = () => {
    // console.log("signout...");
    auth.signOut();
    
    localStorage.removeItem(TOKEN_ID);
    window.location.href = "/login";
}  

export const fetchSongsData = () => {
    return db.collection("Songs/").get();
}


export const updateProfile = (name: string) => {
    auth.currentUser!.updateProfile({displayName: name});
}

interface ContactDetails{
    First_Name: string;
    Last_Name: string;
    Email: string;
    Mobile_Number?: string;
    Message: string;
}
export const submitContactMessage = (data: ContactDetails) => {
    db.collection("Messages").add(data).then(() => {
        alert("Message successfully sent!");
    })
    .catch((error) => {
        alert("Error writing Message: " + error);
    });
}

interface SongDetails {
    Artist: string;
    Download_URL: string;
    Img_URL: string;
    Song_Name: string;
    Year: string;
    Song_ID: string;
}
export const addSong = (data: SongDetails) => {
    db.collection("Songs").doc(data.Song_ID)
                .set(data)
                .then(() => {
                    alert("Song added successfully!");
                    window.location.href = "/admin";
                  
                })
                .catch((error: any) => {
                  alert("Error occured: " + error);
                });
}