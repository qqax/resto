export default class RestoService {
    _apiBase = "http://localhost:3004";

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${res.url}, status: ${res.status}`);
        }

        return await res.json();
    }

    async getMenuItems() {
        return await this.getResource("/menu/");
    }

    async sendOrder(customer, order) {
        const id = await this.getOrderNumber();
        const newOrder = {
            id,
            customer,
            order
        };
        const res = await fetch(`${this._apiBase}/orders`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(newOrder)
        });

        if (!res.ok) {
            console.log("ERROR");
            throw new Error(`Could not fetch ${res.url}, status: ${res.status}`);
        }
        return id;
    }

    async getOrderNumber() {
        const res = await this.getResource("/orders/");
        return res.length + 1;
    }
}