export interface User {
    uid: string;
    email: string | null;
    emailVerified: boolean | null;
    phoneNumber: string | null;
}