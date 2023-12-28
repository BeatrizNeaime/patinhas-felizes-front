import { ThrowToast } from "./toast.services";

export class DonationsServices {
    async createDonation(donation) {
        try {
            const url = "http://localhost:8080/api/v1/donations/create";
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(donation)
            };

            const a = await fetch(url, options);
            const b = await a.json();

            if (a.status !== 201) {
                ThrowToast.error("Erro ao criar doação");
                return false;
            }

            return true;

        } catch (error) {
            ThrowToast.error("Erro ao criar doação");
        }
    }

    async getDonations() {
        try {
            const url = "http://localhost:8080/api/v1/donations/get";
            const options = {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            };

            const a = await fetch(url, options);
            const b = await a.json();

            if (a.status !== 200) {
                ThrowToast.error("Erro ao buscar doações");
                return false
            }

            return b;

        } catch (error) {
            ThrowToast.error("Erro ao buscar doações");
        }
    }
}