<template>
  <div class="slider">
    <div class="slides-container" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
      <div class="slide" v-for="(item, index) in items" :key="index">
        <div v-if="item.type === 'image'">
          <img :src="item.src" alt="Slide" />
        </div>
        <div v-else-if="item.type === 'video'">
          <iframe :src="item.src" frameborder="0" allowfullscreen></iframe>
        </div>
      </div>
    </div>
    <button class="prev-btn" @click="prevSlide"><i class="fas fa-chevron-left"></i></button>
    <button class="next-btn" @click="nextSlide"><i class="fas fa-chevron-right"></i></button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { type: 'image', src: 'https://via.placeholder.com/800x400' },
        { type: 'video', src: 'https://www.youtube.com/embed/MuvWvA-Fg9o?si=VAke5Nom5bJWttJm' },
        { type: 'image', src: 'https://via.placeholder.com/800x400' },
        { type: 'video', src: 'https://www.youtube.com/embed/MuvWvA-Fg9o?si=VAke5Nom5bJWttJm' }
      ],
      currentIndex: 0
    };
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.items.length;
    },
    prevSlide() {
      this.currentIndex = (this.currentIndex - 1 + this.items.length) % this.items.length;
    }
  }
};
</script>

<style scoped>
.slider {
  position: relative;
  overflow: hidden;
}

.slides-container {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  flex: 0 0 auto;
}

.slide img {
  width: 100%;
  height: auto;
}

.slide iframe {
  width: 100%;
  height: 400px; /* Set the height for the video */
}

.prev-btn, .next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}
</style>
