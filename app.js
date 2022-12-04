
const gitUser = document.querySelector(".card-body")

fetch("https://api.github.com/users")
  .then((res) => {
    if (!res.ok) {
      throw new Error(`Something went wrong: ${res.status}`);
    }
    return res.json();
  })
  .then((data) => updateDom(data))
    .catch((err) => console.log(err));

const updateDom = (data) => {
  
  data.forEach((user) => {
    // const {login, avatar_url, html_url } = user; 
    gitUser.innerHTML += `
    <h3 class="text-dark my-3 ">Name : ${user.login}</h3>

    <img class="rounded-5" src=${user.avatar_url} width="60%" />

    <button class="my-3 bg-dark  rounded-3 text-white" ><a href="${user.html_url}" class="text-white text-decoration-none px-4" >link to github page </a> </button>

    <br><br>
  `; 
})};

