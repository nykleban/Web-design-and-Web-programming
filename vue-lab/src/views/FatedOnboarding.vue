<template>
  <div class="min-h-screen flex items-center justify-center bg-white">
    <div
      class="w-[375px] h-[812px] border-2 border-black flex flex-col items-center justify-between p-6 box-border"
    >

      <div class="w-[300px] mt-16">
        <img
          :src="currentSlide.image"
          :alt="currentSlide.badge"
          class="w-[370px] max-h-[250px] object-contain mx-auto -ml-[5px] mt-24"
        />
      </div>

      <!-- Текстова частина -->
      <div class="w-full flex flex-col items-center">
        <div
          class="bg-brand text-white flex items-center justify-center rounded text-[12px] font-bold text-center mt-[70px] mx-auto px-4 py-3 tracking-[0.05em]"
          style="width: auto; min-width: 120px;"
        >
          {{ currentSlide.badge }}
        </div>

        <p
          class="text-ink text-center leading-[14px] text-[10px] font-normal max-w-[280px] mt-[47px]"
        >
          {{ currentSlide.text }}
        </p>
      </div>

      <!-- Навігація -->
      <div class="w-full flex items-center justify-between mb-4">
        <button
          type="button"
          class="h-[30px] w-[70px] rounded flex items-center justify-center text-[12px] bg-faint text-ink"
          @click="goToAuth"
        >
          SKIP
        </button>

        <div class="flex items-center gap-5">
          <button
            v-for="(slide, index) in slides"
            :key="slide.id"
            type="button"
            class="h-2.5 w-2.5 rounded-sm"
            :class="index === currentIndex ? 'bg-brand' : 'bg-faint'"
            @click="setSlide(index)"
          />
        </div>

        <button
          type="button"
          class="h-[30px] w-[70px] rounded flex items-center justify-center text-[12px] bg-brand text-white"
          @click="nextSlide"
        >
          NEXT
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'

// Заміни шляхи до зображень так, як у тебе організовані assets
import img1 from '@/assets/img1.jpg'
import img2 from '@/assets/img2.jpg'
import img3 from '@/assets/img3.jpg'

const router = useRouter()

const slides = [
  {
    id: 1,
    image: img1,
    badge: 'MEET NEW PEOPLE',
    text:
      'Select the Text tool (T) and add a new text element. Change the font style to Regular, ' +
      'lower the size to 10 and the letter spacing to 0%, increase the line height to 1.4, and ' +
      'then add some paragraphs, as shown in the image. Don’t forget to change the text color to #5A5A64.',
  },
  {
    id: 2,
    image: img2,
    badge: 'CHAT WITH EASE',
    text:
      'Click the name of your first frame to select it and duplicate it. Replace the illustration, ' +
      'adjust the text and swap the colors used for the rounded squares, as shown in the second image.',
  },
  {
    id: 3,
    image: img3,
    badge: 'FIND YOUR MATCH',
    text:
      'Select the Text tool (T) and add a new text element. Change the font style to Regular, lower the size to 10, ' +
      'keep letter spacing at 0%, increase the line height to 14 and add the paragraphs with color #5A5A64.',
  },
]

const currentIndex = ref(0)

const currentSlide = computed(() => slides[currentIndex.value])

const setSlide = (index) => {
  currentIndex.value = index
}

const goToAuth = () => {
  router.push({ name: 'FatedAuth' })
}

const nextSlide = () => {
  if (currentIndex.value < slides.length - 1) {
    currentIndex.value++
  } else {
    goToAuth()
  }
}
</script>
