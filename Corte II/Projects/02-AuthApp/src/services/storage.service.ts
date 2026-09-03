import type { IUser } from "../models/auth.model";

export class StorageService {

    private readonly USERS_KEY = "users";
    private readonly SESSION_KEY = "session";

    public getUsers(): IUser[] {
        const users = localStorage.getItem(this.USERS_KEY);
        if (!users) return [];
        return JSON.parse(users);
    }

    public saveUsers(users: IUser[]): void {
        localStorage.setItem(this.USERS_KEY, JSON.stringify(users));
    }

    public getSession(): IUser | null {
        const session = localStorage.getItem(this.SESSION_KEY);
        if (!session) return null;
        return JSON.parse(session);
    }

    public saveSession(user: IUser): void {
        localStorage.setItem(this.SESSION_KEY, JSON.stringify(user));
    }

    public clearSession(): void {
        localStorage.removeItem(this.SESSION_KEY);
    }

}