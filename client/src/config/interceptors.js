export function interceptorRequest(request) {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
        request.headers['Authorization'] = token
    }

    return request;

}