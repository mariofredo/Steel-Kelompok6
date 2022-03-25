function changepage(nama, sandi) {
  var userid = document.querySelector(`#${nama}`).value;
  var sandinya = document.querySelector(`#${sandi}`).value;

  let akun = [
    { username: "fox22", sandipass: "123" },
    { username: "fox23", sandipass: "456" },
    { username: "fox24", sandipass: "789" },
  ];

  let flag = false;
  for (let i = 0; i < akun.length; i++) {
    if (akun[i].username == userid && akun[i].sandipass == sandinya) {
    //   document.querySelector(`#${asal}`).style.display = "none";
    //   document.querySelector(`#${tujuan}`).style.display = "flex";
      flag = true;
      break;
    }
  }

  if(flag === true){
      window.location.href = "store.html"
  }

  if (flag === false) {
    return alert(`password dan sandi salah`);
  }
}
