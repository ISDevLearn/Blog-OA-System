export default function authHeader() {
    const cookie = JSON.parse(localStorage.getItem('user'));
    // const cookie = document.cookie;
    // console.log(cookie)

    if (cookie) {
        return { Cookie: cookie }; // for Spring Boot back-end
    } else {
        return {};
    }
}
