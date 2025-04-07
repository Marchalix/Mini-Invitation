// Simple Invite Letter Generator App using HTML + JavaScript
// This can be extended into an Electron app easily

const form = document.getElementById("invite-form");
const output = document.getElementById("output");
const preview = document.getElementById("preview");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const event = document.getElementById("event").value;
  const time = document.getElementById("time").value;
  const place = document.getElementById("place").value;
  const tone = document.getElementById("tone").value;

  let opening = "Dengan segala hormat dan rasa cinta kasih, kami mengundang Anda...";
  if (tone === "funny") {
    opening = `Hey ${name}! Waktunya datang ke acara super penting (katanya)`;
  } else if (tone === "romantic") {
    opening = `Kehadiranmu sangat berarti, ${name}. Tanpa kamu, acara ini tak sempurna.`;
  }

  const letter = `
    ${opening}

    📌 Acara: ${event}
    🕒 Waktu: ${time}
    📍 Tempat: ${place}

    Jangan lupa senyum ya! 😄
    `;

  preview.textContent = letter;
  output.style.display = "block";
});
