import { BaseEntity, BaseEntityMetaData } from "src/utils/types/baseEntity";

type T[FTName] = {
    domain: "[FTName]";
    ...
    ...
    ...
} & BaseEntity & BaseEntityMetaData;


export type T[FTName]Create = Omit<T[FTName], "id" | "createdAt" | "updatedAt">;
export type T[FTName]Update = Omit<T[FTName], "createdAt" | "updatedAt">;

export default T[FTName];

