export type UserID = number;

export type Email = string;

export interface User {
	userID: UserID;
	userName: string;
	userEmail: Email;
}
