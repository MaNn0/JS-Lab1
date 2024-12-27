fetch("./people.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("couldn't fetch data");
        }
        return response.json();
    })
    .then(value => {
        const selectOption = document.getElementById('selectOption');
        selectOption.addEventListener('change', (event) => {
            const selectedPerson = value.find(person => person.id == event.target.value); // Use == for loose comparison
            document.getElementById("contentSelect").innerHTML = selectedPerson
                ? `name: ${selectedPerson.name} <br> age: ${selectedPerson.age} <br> email: ${selectedPerson.email}`
                : "Person not found";
        });
    })
    .catch(error => console.error(error));