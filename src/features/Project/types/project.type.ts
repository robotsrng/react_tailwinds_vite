import { BaseEntity } from "src/utils/types/baseEntity";

type TProject = {
    domain: "project";
    title: string;
    content: string;
    imageUrl: string;
    image?: File | string;
} & BaseEntity;


export type TProjectCreate = Omit<TProject, "id" | "createdAt" | "updatedAt">;
export type TProjectUpdate = Omit<TProject, "createdAt" | "updatedAt">;

export default TProject;

