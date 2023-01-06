import { PrismaMutationError } from "../types/error.types";

export function handleInternalApiError<T>(error: PrismaMutationError<T>) {
    if (error instanceof Error) {
        const newError: Partial<PrismaMutationError<T>> = new Error(error.message);
        newError.message = error.message;
        newError.data = error.response.data.errors;
        throw newError;
    }
}