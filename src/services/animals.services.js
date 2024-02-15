import { ThrowToast } from "./toast.services";

export class AnimalServices {

    async createHealthProblem(animal) {
        try {
            let medicines = [null]

            if (animal.medicines) {
                let m = animal.medicines.split(",");

                for (let i = 0; i < m.length; i++) {
                    medicines.push(m[i]);
                }
            }
            const url2 = "http://localhost:8080/api/v1/animals/hp/create";
            const options2 = {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    animal_id: b.id,
                    health_problem: animal.health_problems,
                    medicines: JSON.stringify(medicines)
                })
            };

            const c = await fetch(url2, options2);
            const d = await c.json();

            if (c.status !== 201) {
                ThrowToast.error("Erro ao criar problema de saúde");
                return false;
            }

            return true;

        } catch (error) {

        }

    }

    async createAnimal(animal) {
        var today = new Date();
        var date = new Date(animal.birthday);

        if (date > today) {
            ThrowToast.error("Data de nascimento inválida");
            return false;
        }

        var age = today.getFullYear() - date.getFullYear();
        animal.age = age;
        animal.adopted = 0;

        animal.health_problems = animal.health_problems ? 1 : 0;



        const url = "http://localhost:8080/api/v1/animals/create";
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: animal.name,
                species: animal.species,
                breed: animal.breed,
                age: animal.age,
                birthday: animal.birthday,
                adopted: animal.adopted,
                health_problems: animal.health_problems,
                size: animal.size,
            })
        };

        try {
            const a = await fetch(url, options);
            const b = await a.json();
            let c = false

            if(animal.health_problems) {
                c = await this.createHealthProblem(animal);
            }

            console.log(c)

            if (a.status !== 201) {
                return false;
            }

            //return true;

        } catch (error) {
            ThrowToast.error("Erro ao criar animal");
            console.error(error);
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

    async countAnimals() {
        try {
            const a = await this.getAnimals();
            const b = await a.json();

            if (a.status !== 200) {
                ThrowToast.error("Erro ao buscar animais");
                return false;
            }

            return b.length;

        } catch (error) {
            ThrowToast.error("Erro ao buscar animais");
        }
    }

}