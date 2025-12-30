/* TERMINAL TYPING */
const text = `
> Initializing SOC Console...
> Loading Analyst Profile...
> Name: Vishwa M
> Role: Cybersecurity Analyst
> Skills: SIEM | SOC | MITRE ATT&CK
> Status: READY
`;

let i = 0;
const typing = document.getElementById("typing");

function type() {
  if (i < text.length) {
    typing.textContent += text.charAt(i);
    i++;
    setTimeout(type, 40);
  } else {
    setTimeout(() => {
      document.querySelector(".terminal").style.display = "none";
      document.querySelector("main").classList.remove("hidden");
    }, 1000);
  }
}
type();

/* MATRIX EFFECT */
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const letters = "01";
const fontSize = 14;
const columns = canvas.width / fontSize;
const drops = Array(columns).fill(1);

function draw() {
  ctx.fillStyle = "rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle = "#00ff9c";
  ctx.font = fontSize + "px monospace";

  drops.forEach((y, i) => {
    const char = letters[Math.floor(Math.random() * letters.length)];
    ctx.fillText(char, i * fontSize, y * fontSize);
    if (y * fontSize > canvas.height && Math.random() > 0.95) drops[i] = 0;
    drops[i]++;
  });
}
setInterval(draw, 33);

/* COUNTER ANIMATION */
document.querySelectorAll(".stat h3").forEach(counter => {
  const target = +counter.dataset.count;
  let current = 0;
  const increment = Math.ceil(target / 60);

  const update = () => {
    current += increment;
    if (current < target) {
      counter.innerText = current;
      setTimeout(update, 40);
    } else {
      counter.innerText = target;
    }
  };
  update();
});
