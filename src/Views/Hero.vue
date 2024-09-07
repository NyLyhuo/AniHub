<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";

// Slide data
const slides = ref([
  {
    image:
      "https://imgsrv.crunchyroll.com/cdn-cgi/image/fit=contain,format=auto,quality=85,width=1200,height=675/catalog/crunchyroll/a249096c7812deb8c3c2c907173f3774.jpg",
    title: "One Piece",
    description:
      "Monkey D. Luffy refuses to let anyone or anything stand in the way of his quest to become the king of all pirates. With a course charted for the treacherous waters of the Grand Line and beyond, this is one captain who'll never give up until he's claimed the greatest treasure on Earth: the Legendary One Piece!",
  },
  {
    image:
      "https://uchi.imgix.net/general/anime2.png?crop=focalpoint&domain=uchi.imgix.net&fit=crop&fm=pjpg&fp-x=0.5&fp-y=0.5&h=558&ixlib=php-3.3.1&q=82&usm=20&w=992",
    title: "Dragon Ball",
    description:
      "On the brink of a third World War, superheroes appeared on Earth. Gifted with powers, their appearance brings peace to the world. The heroes each selected a country in which they would reside, serve, and protect its citizens.",
  },
  {
    image:
      "https://www.emp.co.uk/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw61b11fcc/images/5/1/3/1/513105.jpg?sw=1000&sh=800&sm=fit&sfrm=png",
    title: "Naruto",
    description:
      "Koshi Torako has everyone fooled. Her classmates see her as the perfect honor student, unaware of her secret delinquent past. But her new picturesque school life is thrown into chaos when she bumps into Shikanoko Noko, a",
  },
  {
    image: "https://dashgamer.com/wp-content/uploads/2021/10/dslayerhero.jpg",
    title: "Demon Slayer",
    description:
      "Koshi Torako has everyone fooled. Her classmates see her as the perfect honor student, unaware of her secret delinquent past. But her new picturesque school life is thrown into chaos when she bumps into Shikanoko Noko, a",
  },
]);

const currentIndex = ref(0);
const isTransitioning = ref(false);
const transitionDuration = 500;
let intervalId: number | null = null;

const cloneSlides = () => {
  return [
    slides.value[slides.value.length - 1],
    ...slides.value,
    slides.value[0],
  ];
};

const totalSlides = ref(cloneSlides());
const startAutoplay = () => {
  intervalId = setInterval(nextSlide, 5000);
};

const stopAutoplay = () => {
  if (intervalId) clearInterval(intervalId);
};

const nextSlide = () => {
  if (!isTransitioning.value) {
    isTransitioning.value = true;
    currentIndex.value++;
    setTimeout(() => {
      if (currentIndex.value === totalSlides.value.length - 1) {
        currentIndex.value = 1;
        disableTransition();
      }
      isTransitioning.value = false;
    }, transitionDuration);
  }
};

const prevSlide = () => {
  if (!isTransitioning.value) {
    isTransitioning.value = true;
    currentIndex.value--;
    setTimeout(() => {
      if (currentIndex.value === 0) {
        currentIndex.value = totalSlides.value.length - 2;
        disableTransition();
      }
      isTransitioning.value = false;
    }, transitionDuration);
  }
};

const disableTransition = () => {
  const slider = document.querySelector(".slider") as HTMLElement;
  slider.style.transition = "none";
  setTimeout(() => {
    slider.style.transition = "";
  }, 20);
};

onMounted(() => {
  startAutoplay();
});

onBeforeUnmount(() => {
  stopAutoplay();
});
</script>

<template>
  <div
    class="relate w-full h-screen overflow-hidden"
    @mouseenter="stopAutoplay"
    @mouseleave="startAutoplay"
  >
    <div
      class="slider flex transition-transform duration-500 ease-in-out"
      :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
    >
      <div
        v-for="(slide, index) in totalSlides"
        :key="index"
        class="w-full flex-shrink-0"
      >
        <img :src="slide.image" class="w-full object-cover h-screen" />
      </div>
    </div>
    <button
      @click="prevSlide"
      class="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
    >
      <font-awesome-icon icon="fa-solid fa-chevron-left" />
    </button>
    <button
      @click="nextSlide"
      class="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75"
    >
      <font-awesome-icon icon="fa-solid fa-chevron-right" />
    </button>
  </div>
</template>

<style scoped>
.slider {
  width: 100%;
  display: flex;
}
</style>
