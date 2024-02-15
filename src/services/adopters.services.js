import { ThrowToast } from "./toast.services";

export class AdoptersServices {
    async getAdopters() {
        try {
            const url = "http://localhost:8080/api/v1/adopters/get";
            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }

            const a = await fetch(url, options);
            const b = await a.json();

            return b;

        } catch (error) {
            ThrowToast.error(error);
        }
    }

    async countAdopters() {
        try {
            const a = await this.getAdopters();

            return a.length;

        } catch (error) {
            ThrowToast.error(error);
        }
    }
}