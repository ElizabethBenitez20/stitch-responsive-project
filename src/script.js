const texts = ["My favorite character...", "The friend we all wish we had..."];
let textIndex = 0;
let charIndex = 0;

function typeWriterEffect() {
  const element = document.getElementById("text");

  if (charIndex < texts[textIndex].length) {
    element.textContent += texts[textIndex][charIndex];
    charIndex++;
    setTimeout(typeWriterEffect, 100);
  } else {
    setTimeout(() => {
      element.textContent = "";
      charIndex = 0;
      textIndex = (textIndex + 1) % texts.length;
      typeWriterEffect();
    }, 1500);
  }
}

typeWriterEffect();
