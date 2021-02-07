export default class RestoService {
    url = "http://localhost:3004/menu";

    async getMenuItems() {
        const res = await fetch(this.url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${res.url}, status: ${res.status}`);
        }

        return await res.json();
    }
}