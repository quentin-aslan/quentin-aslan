<template>
  <motion.div :style="scrollStyle">
    <div
      ref="animatedBoxRef"
    >
      <slot />
    </div>
  </motion.div>
</template>

<script setup lang="ts">
import { motion, type ScrollOffset, useScroll } from 'motion-v'
import { onMounted, ref, nextTick } from 'vue'

type TranslateXData = {
  translateXInitVal: number // +100 (outside left) -100(outside right)
  translateXMinVal: number // -100 (outside left) +100 (inside)
  translateXMaxVal: number
}

type Props = {
  translateXData?: TranslateXData
  rotationVal?: number
  offset?: ScrollOffset
}

const props = defineProps<Props>()

const animatedBoxRef = ref<HTMLElement | null>(null)

const scrollStyle = ref({
  transform: `translateX(${props.translateXData?.translateXInitVal ?? 0}%)`,
})

onMounted(() => {
  nextTick(() => {
    const { scrollYProgress: progress } = useScroll({
      target: animatedBoxRef,
      offset: props.offset ?? ['start end', 'start 0.3'], // https://motion.dev/docs/vue-use-scroll#offset
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
