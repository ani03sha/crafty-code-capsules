export const validateInputs = (input: unknown, maxLength: number) => {
    if (!input || typeof input !== "string" || maxLength < input.length) {
        return false;
    }
    return true;
}

export const getErrorMessage = (error: unknown): string => {
    let errorMessage: string
    if (error instanceof Error) {
        errorMessage = error.message;
    } else if (error && typeof error === "object" && "message" in error) {
        errorMessage = String(error.message);
    } else if (typeof error === "string") {
        errorMessage = error;
    } else {
        errorMessage = "Something went wrong";
    }
    return errorMessage;
}