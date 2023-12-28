import { ThrowToast } from "./toast.services";

export class AnimalServices {
    async createAnimal(animal) {
        var today = new Date();
        var date = new Date(animal.birthday);

        var age = today.getFullYear() - date.getFullYear();
        animal.age = age;
        animal.adopted = 0;

        animal.health_problems = animal.health_problems || null;

        console.log(animal);

        const url = "http://localhost:8080/api/v1/animals/create";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(animal)
        };

        try {
            const a = await fetch(url, options);
            const b = await a.json();

            if (a.status !== 201) {
                console.log(a.status)
                return false;
            }

            return true;

        } catch (error) {
            ThrowToast.error("Erro ao criar animal");
        }

    }

    async getSpecies() {
        const url = "http://localhost:8080/api/v1/animals/species";
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };

        try {
            const a = await fetch(url, options);
            const b = await a.json();

            if (a.status !== 200) {
                ThrowToast.error("Erro ao buscar espécies");
                return false;
            }

            return b;

        } catch (error) {
            ThrowToast.error("Erro ao buscar espécies");
        }

    }

    async getAnimals() {
        const url = "http://localhost:8080/api/v1/animals/get"
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        };

        try {
            const a = await fetch(url, options);
            const b = await a.json();

            if (a.status !== 200) {
                ThrowToast.error("Erro ao buscar animais");
                return false;
            }

            return b;

        } catch (error) {
            ThrowToast.error("Erro ao buscar animais");
        }

    }

}