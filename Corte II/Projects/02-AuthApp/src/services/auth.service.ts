import type { ILogin, IRegister, IUser } from "../models/auth.model";
import { StorageService } from "./storage.service";
import { UtilsService } from "./utils.service";

export class AuthService {

    private readonly storageService = new StorageService();

    public login({ email, password }: ILogin){
        const users = this.storageService.getUsers();
        const user = users.find((user) =>
            user.email === email &&
            user.password === password
        );
        if(!user) return false;
        this.storageService.saveSession(user);
        return true;
    }

    public register(data: IRegister){
        const users = this.storageService.getUsers();
        const userExists = users.some(user => user.email === data.email);
        if (userExists) return false;
        users.push(data);
        this.storageService.saveUsers(users);
        return true;
    }

    public logout(){
        this.storageService.clearSession();
        UtilsService.redirecTo("/");
    }

    public getUser(): IUser | null {
        return this.storageService.getSession();
    }

}