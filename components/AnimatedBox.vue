<template>
  <motion.div :style="scrollStyle">
    <div
      ref="animatedBoxRef"
      class="h-full w-full"
    >
      <slot />
    </div>
  </motion.div>
</template>

<script setup lang="ts">
import { motion, type ScrollOffset, useScroll, useMotionValueEvent } from 'motion-v'
import { onMounted, ref, nextTick, computed } from 'vue'

type TranslateXData = {
  translateXInitVal: number // +100 (outside left) -100(outside right)
  translateXMinVal: number // -100 (outside left) +100 (inside)
  translateXMaxVal: number
}

type Props = {
  translateXData?: TranslateXData
  rotationVal?: number
  offset?: ScrollOffset
  mobileOffset?: ScrollOffset
}

const props = defineProps<Props>()

const animatedBoxRef = ref<HTMLElement | null>(null)

const isMobile = ref(false)

// Check if a device is mobile on the client-side
onMounted(() => {
  isMobile.value = window.innerWidth < 768 // Common breakpoint for mobile devices

  // Update on resize
  window.addEventListener('resize', () => {
    isMobile.value = window.innerWidth < 768
  })
})

// Determine which offset to use based on a device type
const currentOffset = computed<ScrollOffset>(() => {
  if (isMobile.value && props.mobileOffset) {
    return props.mobileOffset
  }
  return props.offset ?? ['start end', 'start 0.3']
})

const scrollStyle = ref({
  transform: `translateX(${props.translateXData?.translateXInitVal ?? 0}%)`,
})

onMounted(() => {
  nextTick(() => {
    const { scrollYProgress: progress } = useScroll({
      target: animatedBoxRef,
      offset: currentOffset.value, // Use computed offset based on the device type
    })

    useMotionValueEvent(progress, 'change', (latest) => {
      let transformStyle = ''

      if (props.translateXData) {
        const { translateXMinVal, translateXMaxVal } = props.translateXData
        const translateXValue = translateXMinVal + (latest * (translateXMaxVal - translateXMinVal))
        transformStyle += `translateX(${translateXValue}%) `
      }

      if (props.rotationVal) {
        const rotationValue = props.rotationVal - (latest * props.rotationVal)
        transformStyle += `rotate(${rotationValue}deg)`
      }

      scrollStyle.value = {
        transform: transformStyle,
      }
    })
  })
})
</script>
