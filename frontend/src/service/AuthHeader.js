export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Token': user.token, 'Username': user.username }; // for Spring Boot back-end
    } else {
        return {};
    }
}
