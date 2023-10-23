import { User } from "./User"

export interface AuthResponce {
	accessToken: string
	refreshToken: string
	user: User
}