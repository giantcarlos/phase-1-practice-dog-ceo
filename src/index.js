const container = document.querySelector("div")
const imgUrl = "https://dog.ceo/api/breeds/image/random/4"

fetch(imgUrl)
.then((resp) => resp.json())
.then((dogImageData) => appendImages(dogImageData.message))

function appendImages(dogImages) {
    dogImages.forEach(image => {
        const img = document.createElement('img');
        img.src = image;
        container.append(img);
    });
}

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
const ul = document.querySelector('ul')

fetch(breedUrl)
.then((res) => res.json())
.then((breedsData) => {
    breeds = Object.keys(breedsData.message);
    renderBreeds(breeds);
});

function renderBreeds(breeds) {
    for (let breed of breeds) {
        const li = document.createElement('li');
        li.textContent = breed
        li.addEventListener('click', (event) => {
            event.target.style.color = "purple";
        })
        ul.appendChild(li)
    }
}

const dropDown = document.querySelector('select')

dropDown.addEventListener("change", filterBreeds);

function filterBreeds(event) {
    let letter = event.target.value;
    let filteredBreeds = breeds.filter((breed) => {
        return breed[0] === letter
    });
    ul.innerHTML = "";
    renderBreeds(filteredBreeds);
}