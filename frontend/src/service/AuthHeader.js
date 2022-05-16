export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    const cookie = document.cookie;

    if (user && cookie) {
        return { Cookie: cookie }; // for Spring Boot back-end
    } else {
        return {};
    }
}
