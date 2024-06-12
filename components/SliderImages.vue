<template>
  <div class="testimonial-slider">
    <div
      class="slider-container"
      :style="{
        width: `${reviews.length * 300}px`,
        transform: `translateX(-${currentIndex * 300}px)`,
      }"
    >
      <div
        class="testimonial-slide"
        v-for="(review, index) in reviews"
        :key="index"
      >
        <div class="testimonial" style="width: 300px">
          <!-- <div class="avatar"><img :src="review.avatar" :alt="review.name" /></div> -->
          <div class="content">
            <div class="image" v-if="review.type === 'image'">
              <img :src="review.src" alt="Slide" />
            </div>
            <div v-else-if="review.type === 'video'">
              <iframe
                class="video"
                :src="review.src"
                frameborder="0"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
    <button class="prev-btn" @click="prevSlide">
      <i class="fas fa-chevron-left"></i>
    </button>
    <button class="next-btn" @click="nextSlide">
      <i class="fas fa-chevron-right"></i>
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      reviews: [
        { type: "image", src: "https://aothuatdanang.com/upload/ao-thuat-da-nang1.jpg" },
        {
          type: "video",
          src: "https://www.youtube.com/embed/MuvWvA-Fg9o?si=j2WGBFp5d-e31Ije",
        },
        { type: "image", src: "https://via.placeholder.com/800x400" },
        {
          type: "video",
          src: "https://www.youtube.com/embed/MuvWvA-Fg9o?si=j2WGBFp5d-e31Ije",
        },
        { type: "image", src: "https://aothuatdanang.com/upload/ao-thuat-da-nang1.jpg" },
        {
          type: "video",
          src: "https://www.youtube.com/embed/MuvWvA-Fg9o?si=j2WGBFp5d-e31Ije",
        },
        { type: "image", src: "https://via.placeholder.com/800x400" },
        {
          type: "video",
          src: "https://www.youtube.com/embed/MuvWvA-Fg9o?si=j2WGBFp5d-e31Ije",
        },
        { type: "image", src: "https://via.placeholder.com/800x400" },
        {
          type: "video",
          src: "https://www.youtube.com/embed/MuvWvA-Fg9o?si=j2WGBFp5d-e31Ije",
        },
        { type: "image", src: "https://via.placeholder.com/800x400" },
        {
          type: "video",
          src: "https://www.youtube.com/embed/MuvWvA-Fg9o?si=j2WGBFp5d-e31Ije",
        },
      ],
      currentIndex: 0,
      intervalId: null,
    };
  },
  created() {
    // for (let i = 0; i < 10; i++) {
    //   let reviews = [...this.reviews];
    //   this.reviews = [...this.reviews, ...reviews];
    // }
  },
  mounted() {
    this.startAutoSlide();
  },
  beforeDestroy() {
    clearInterval(this.intervalId);
  },
  methods: {
    nextSlide() {
      this.currentIndex = (this.currentIndex + 1) % this.reviews.length;
    },
    prevSlide() {
      this.currentIndex =
        (this.currentIndex - 1 + this.reviews.length) % this.reviews.length;
    },
    startAutoSlide() {
      // this.intervalId = setInterval(() => {
      //   this.nextSlide();
      // }, 5000); // Chuyển slide mỗi 3 giây
    },
  },
};
</script>

<style scoped lang="scss">
/* CSS cho slider */
.testimonial-slider {
  position: relative;
  overflow: hidden;
}

.slider-container {
  display: flex;
  transition: transform 0.5s ease;
}

.testimonial-slide {
  flex: 0 0 auto;
  .video{
    width: 100%;
  }
}

.testimonial {
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding: 2px;
  background-color: aliceblue;
  min-height: 200px;
  height: 200px;
  max-height: 200px;
  border-radius: 5px;
}

.name {
  font-weight: bold;
  margin-bottom: 5px;
}

.text {
  font-style: italic;
}

.prev-btn,
.next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  border: none;
  outline: none;
  cursor: pointer;
  padding: 10px;
  font-size: 16px;
  border-radius: 50%;
}

.prev-btn {
  left: 10px;
}

.next-btn {
  right: 10px;
}
.content {
  .image{
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
