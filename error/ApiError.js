class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status;
        this.message = message;
    }

    static internal(message) {
        return new ApiError(500, message);
    };

    static badRequest(message, messages = []) {
        return new ApiError(404, message, messages);
    };

    static forbidden(message) {
        return new ApiError(403, message);
    };
};

export default ApiError;