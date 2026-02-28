function next(page){
  document.getElementById("page"+page).classList.add("hidden");
  document.getElementById("page"+(page+1)).classList.remove("hidden");
}

function love(){
  alert("You just made me the happiest person alive 💖🥺");
}