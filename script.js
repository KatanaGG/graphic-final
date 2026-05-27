import { db, ref, onValue, set, runTransaction }
from "./firebase.js";

const MAX_HP = 1000;
const DAMAGE = 10;

let player = prompt("Enter Name");
if(!player) player = "Guest";

document.getElementById("playerName").innerText = player;

const bossRef = ref(db, "boss/hp");

// =====================
// ฟัง realtime HP
// =====================
onValue(bossRef, (snapshot) => {

  let bossHP;

  if(snapshot.exists()){
    bossHP = snapshot.val();
  } else {
    bossHP = MAX_HP;
    set(bossRef, bossHP);
  }

  document.getElementById("hpText")
    .innerText = "HP: " + bossHP;

  document.getElementById("hpFill")
    .style.width = (bossHP / MAX_HP) * 100 + "%";
});


// =====================
// ปุ่มตีบอส (MULTIPLAYER SAFE)
// =====================
document.getElementById("attackBtn").onclick = () => {

  runTransaction(bossRef, (currentHP) => {

    if(currentHP === null) return MAX_HP;

    let newHP = currentHP - DAMAGE;

    if(newHP < 0) newHP = 0;

    return newHP;
  });

};