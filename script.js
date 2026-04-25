const canvas = document.getElementById('aurora-bg');
const ctx = canvas.getContext('2d');

let width = 0;
let height = 0;

const blobs = Array.from({ length: 5 }, (_, i) => ({
  x: Math.random(),
  y: Math.random(),
  r: 140 + i * 36,
  vx: (Math.random() - 0.5) * 0.0012,
  vy: (Math.random() - 0.5) * 0.0012,
  color: i % 2 ? '99,230,212' : '134,166,255'
}));

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

function animateBackground() {
  ctx.clearRect(0, 0, width, height);

  blobs.forEach((blob) => {
    blob.x += blob.vx;
    blob.y += blob.vy;

    if (blob.x < -0.2 || blob.x > 1.2) blob.vx *= -1;
    if (blob.y < -0.2 || blob.y > 1.2) blob.vy *= -1;

    const px = blob.x * width;
    const py = blob.y * height;

    const gradient = ctx.createRadialGradient(px, py, 0, px, py, blob.r);
    gradient.addColorStop(0, `rgba(${blob.color},0.25)`);
    gradient.addColorStop(1, `rgba(${blob.color},0)`);

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(px, py, blob.r, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animateBackground);
}

function revealOnScroll() {
  const targets = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  targets.forEach((el) => observer.observe(el));
}

function countUp() {
  const numbers = document.querySelectorAll('.num');
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  numbers.forEach((el) => {
    const target = Number(el.dataset.target || 0);
    let startTime = null;
    const duration = 1400;

    const update = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const value = Math.round(target * easeOut(progress));
      el.textContent = value.toString();

      if (progress < 1) requestAnimationFrame(update);
    };

    requestAnimationFrame(update);
  });
}

window.addEventListener('resize', resize);
resize();
animateBackground();
revealOnScroll();
countUp();
