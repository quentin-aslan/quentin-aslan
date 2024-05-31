<template>
  <div class="background-aurora"></div>
</template>

<style>
:root {
  --stripe-color: #fff;
  --bg: var(--stripe-color);
  --maincolor: var(--bg);
}

@keyframes smoothBg {
  from {
    background-position: 50% 50%, 50% 50%;
  }
  to {
    background-position: 350% 50%, 350% 50%;
  }
}

.background-aurora {
  opacity: 0.3;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  display: flex;
  place-content: center;
  place-items: center;
  --stripes: repeating-linear-gradient(
      100deg,
      var(--stripe-color) 0%,
      var(--stripe-color) 7%,
      transparent 10%,
      transparent 12%,
      var(--stripe-color) 16%
  );

  --rainbow: repeating-linear-gradient(
      100deg,
      #B0D6A7 10%,
      #436e91 25%,
      #00549A 40%,
      #B0D6A7 50%
  );

  background-image: var(--stripes), var(--rainbow);
  background-size: 300%, 200%;
  background-position: 50% 50%, 50% 50%;
  filter: blur(10px) invert(100%);
  will-change: background-position, transform;

  mask-image: radial-gradient(ellipse at 100% 0%, black 40%, transparent 70%);
}

.background-aurora::after {
  z-index: 0;
  content: "";
  position: absolute;
  inset: 0;
  background-image: var(--stripes), var(--rainbow);
  background-size: 200%, 100%;
  animation: smoothBg 40s linear infinite;
  background-attachment: fixed;
  mix-blend-mode: difference;
}

:has(:checked) {
  --stripe-color: #000;
}

:has(:checked) .background-aurora,
:has(:checked) .background-aurora::after {
  filter: blur(10px) opacity(50%) saturate(200%);
}
</style>
