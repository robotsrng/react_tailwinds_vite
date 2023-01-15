export type BaseEntity = {
    id: number;
};

export type BaseEntityMetaData = {
    createdAt: number;
    updatedAt?: number;
    deletedAt?: number;
};