import { AxiosResponse } from "axios";

export type CrudErrorInfo<T> = Array<Record<keyof T, string>>;

export type PrismaMutationError<T> = {
    code: string;
    message: string;
    data: CrudErrorInfo<T>;
    response: AxiosResponse;
};
