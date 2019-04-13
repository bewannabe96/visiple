export type UserID = number;

export type Email = string;

export interface User {
	id: UserID;
	name: string;
	email: Email;
}
