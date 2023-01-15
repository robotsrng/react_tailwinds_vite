import { BaseEntity, BaseEntityMetaData } from "src/utils/types/baseEntity";

type TUser = {
    domain: "User";
    firstName: string;
    lastName: string;
    email: string;
    password: string;
} & BaseEntity & BaseEntityMetaData;


export type TUserCreate = Omit<TUser, "id" | "createdAt" | "updatedAt">;
export type TUserUpdate = Omit<TUser, "createdAt" | "updatedAt">;

export default TUser;

