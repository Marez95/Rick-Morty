const charID = sessionStorage.getItem("characterID");
const body = document.body;

fetch(`https://rickandmortyapi.com/api/character/${charID}`)
  .then((res) => res.json())
  .then((data) => renderCharacter(data));

  function renderCharacter(obj){
    console.log(obj);
    body.innerHTML = `
    <div class=card>
    <h1>${obj.name}</h1>
    <img src=${obj.image}>
    <h2>Species: ${obj.species}</h2>
    <h2>Status: ${obj.status}</h2>
    <h2>Location: ${obj.location.name}</h2>
    <h2>Gender: ${obj.gender}</h2>
    <h2>Episodes: ${obj.episode.length}</h2>
    <h2>List of episodes:
    <ul>
        ${obj.episode.map(episode => `<li>${episode}<li>`)}
    </ul>
    
    
    </h2>
    </div>
    `
  }
