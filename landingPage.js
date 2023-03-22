const url = "https://rickandmortyapi.com/api/character";
const characters = document.getElementById("characters");

async function getCharacters() {
  // const a = fetch (url)
  // .then((response) => response.json())
  // .then((data) => console.log(data.results));
  // console.log(a);

  const response = await fetch(url);

  const result = await response.json();

  return result;
}

getCharacters().then((data) => {
  characters.innerHTML = data.results
    .map(
      (char) => `
        <div class="character">
        <span>${char.status}</span>
        <img src=${char.image} />

        <div onClick="clickedCharacter(${char.id})" class="character-info" data-characterID=${char.id}>
            <h3>${char.name}</h3>
        </div>
        </div>
    `
    )
    .join("");
});

function clickedCharacter(id) {
    sessionStorage.setItem("characterID", id)
    window.location.href = "/showMore.html"
}
