export function isServer(req) {
    return !req.headers || !req.headers.host;
}