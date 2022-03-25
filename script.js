let obj = [
  {
    id: 1,
    name: "GTA-V",
    imageURL:
      "https://awsimages.detik.net.id/community/media/visual/2020/06/12/gta-v_169.jpeg?w=700&q=90",
  },
  {
    id: 2,
    name: "Fortnite",
    imageURL:
      "https://loghi-famosi.com/wp-content/uploads/2021/02/Fortnite-Logo-2012-2014.png",
  },
  {
    id: 3,
    name: "Dota2",
    imageURL:
      "https://cdn.akamai.steamstatic.com/steam/apps/570/capsule_616x353.jpg?t=1645731580",
  },
  {
    id: 4,
    name: "Apex-Legends",
    imageURL:
      "https://media.contentapi.ea.com/content/dam/apex-legends/images/2019/01/apex-featured-image-16x9.jpg.adapt.crop16x9.1023w.jpg",
  },
  {
    id: 5,
    name: "PUBG",
    imageURL:
      "https://images.bisnis-cdn.com/posts/2020/11/13/1317522/games-pubg.jpg",
  },
];

let wishList = [];
let wishListId = [];

function klik(id){
  // console.log(id);
  // console.log(Number(id));
  let flag = false;
  for(let i = 0; i < wishList.length; i++){
    if(id === wishList[i].id){
      flag = true;
    }
  }
  if(!flag){
    console.log(flag);
    wishList.push(obj[Number(id) - 1]);
    console.log(wishList);
    displayWish();  
  }
  
    
//   let contentLibrary = document.querySelector("#library")
//   contentLibrary.innerHTML += `<div class="rowLib" id="id-${count}"><div class="col">
//   <img src="${obj[Number(id) - 1].imageURL}" alt="GTA-V"></div>
// <div class="col">${obj[Number(id) - 1].name}</div><div class="col">
// <button class="tombolWish" type="button" onclick="klikDel(${count})">Delete Game</button>
// </div>
// </div> `
  // localStorage.setItem("id", id);
  // return id;
}

function displayWish(){

  let contentLibrary = document.querySelector("#library")
  contentLibrary.innerHTML = "";
  for(let i = 0; i < wishList.length; i++){
    contentLibrary.innerHTML += `<div class="rowLib" id="id-${wishList[i].id}"><div class="col">
    <img src="${wishList[i].imageURL}" alt="GTA-V"></div>
  <div class="col">${wishList[i].name}</div><div class="col">
  <button class="tombolWish" type="button" onclick="klikDel(${wishList[i].id})">Delete Game</button>
  </div>
  </div> `
  }
}

function klikDel(id){
  let del = document.querySelector(`#id-${id}`)
  for(let i = 0; i < wishList.length; i++){
    if(id === wishList[i].id){
      wishList.splice(i,1);
    }
  }
  // console.log(del)
  // delete wishList[Number(id) - 1];
  console.log(wishList);
  del.remove();
}

const store = document.querySelector("#store");
for (let i = 0; i < obj.length; i++) {
  store.innerHTML += `<div class="row"><div class="col">
  <img src="${obj[i].imageURL}" alt="GTA-V"></div>
<div class="col">${obj[i].name}</div>
<div class="col">
  <button class="tombol" type="button" onclick="klik(${obj[i].id})">Add Game</button>
</div>
</div> ` 
}
// const library = document.querySelector("library");
// for(let j = 0; j < obj.length; j++){
//   library.innerHTML += `<div class="row"><div class="col">
//   <img src="${obj[i].imageURL}" alt="GTA-V"></div>
// <div class="col">${obj[i].name}</div>
// </div> `
// }

function changePage(asal, tujuan){
  document.querySelector(`#${asal}`).style.display = "none"
  document.querySelector(`#${tujuan}`).style.display = "flex"
  // console.log("test")
}
// let x = document.getElementsByTagName("div")
// console.log(x);

// let keyID = +localStorage.getItem("id");
// console.log(keyID);
// const gameLibrary = document.querySelector("#game-library");

//   gameLibrary.innerHTML += `<div class="row"><div class="col">
//   <img src="${obj[keyID].imageURL}" alt="GTA-V"></div>
// <div class="col">${obj[keyID].name}</div>
// </div> `;

//  <div class="col">
//           <img src="images/Acq8WQKCQAEd96M.png" alt="GTA-V">
//         </div>
//         <div class="col">
//           GTA-V
//         </div>
//         <div class="col">
//           <button class="btn" type="button">Buy Games</button>
//         </div>
//       </div>
