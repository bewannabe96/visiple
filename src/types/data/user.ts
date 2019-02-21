export type UserID = string;

export type Email = string;

export interface User {
	userID: UserID;
	userName: string;
	userEmail: Email;
}
