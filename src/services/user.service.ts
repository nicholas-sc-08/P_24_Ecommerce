import { UpdateUserDTO, UserDTO } from "../utils/user.type";
import api from "./api";

export class UserService {

    async getAllUsers(): Promise<UserDTO[]> {

        try {

            const user = await api.get("/user");
            return user.data;

        } catch (error: any) {
            throw new Error(error);
        };
    };

    async getUser(id: number): Promise<UserDTO> {

        try {

            const user = await api.get(`/user/${id}`);
            return user.data;

        } catch (error: any) {
            throw new Error(error);
        };
    };

    async postUser(data: UserDTO): Promise<UserDTO> {

        try {

            const user = await api.post("/user", data);
            return user.data;

        } catch (error: any) {
            throw new Error(error);
        };
    };

    async putUser(id: number, data: UpdateUserDTO): Promise<UserDTO> {

        try {

            const user = await api.put(`/user/${id}`, data);
            return user.data;

        } catch (error: any) {
            throw new Error(error);
        };
    };

    async deleteUser(id: number): Promise<void>{

        try {

            await api.delete(`/user/${id}`);
            
        } catch (error: any) {
          throw new Error(error);  
        };
    };
};