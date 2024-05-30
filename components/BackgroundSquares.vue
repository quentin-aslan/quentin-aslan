<template>
  <div class="absolute">
    <div class="relative z-0">
      <div
          v-for="(square, index) in squares"
          :key="square.x"
          class="relative"
          :class="{
            'animate-rotateRightAndScale': index % 1 === 0,
            'animate-rotateLeftAndScale': index % 2 !== 0,
            'animation-reverse': index % 2 !== 0
          }"
          :style="{ left: `${square.x}px`, top: `${square.y}px`, width: `${square.size}px`, height: `${square.size}px` }"
      >
        <div class="absolute inset-0 border-2 border-primary transform scale-1"></div>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>

type Props = {
  size?: number;
  maxWith?: number;
  maxHeight?: number;
}

const props: Props = defineProps<Props>();

type Square = {
  x: number;
  y: number;
  size: number;
}

const squares = ref<Square[]>([
]);

const isFadeOut = ref(false);

const createInfinitySquares = () => {
  squares.value = []
  const maxWith = props.maxWith ?? window.innerWidth
  const maxHeight = props.maxHeight ?? window.innerHeight

  for (let i = 0; i < props.size ?? 10; i++) {
    squares.value.push({
      x: Math.floor(Math.random() * maxWith),
      y: Math.floor(Math.random() * maxHeight),
      size: Math.floor(Math.random() * 50) + 10
    })
  }

  isFadeOut.value = !isFadeOut.value
  setTimeout(() => {
    createInfinitySquares()
  }, 5000)
}

onMounted(() => {
  createInfinitySquares()
})
</script>
