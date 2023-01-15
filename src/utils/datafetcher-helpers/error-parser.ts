import { PrismaMutationError } from "../types/error.types";

export function handleInternalApiError<T>(error: Error) {
    console.log("🚀 | file: error-parser.ts:4 | error", error.message);
    if (error instanceof Error) {
        const newError: Partial<PrismaMutationError<T>> = new Error(error.message);
        newError.message = error.message;
        newError.data = error.response.data.errors;
        throw newError;
    }
}