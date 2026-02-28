let health = 100;
let level = 5;

function attacked() {
  if (health > 0) {
    health -= 20;
    if (health < 0) health = 0;
    document.getElementById('health').textContent = health;
    if (health === 0) alert('Character Died');
  }
}

function levelUp() {
  level += 1;
  document.getElementById('level').textContent = level;
}