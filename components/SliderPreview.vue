<template>
  <div class="testimonial-slider">
    <div
      class="slider-container"
      :style="{
        width: `${reviews.length * 300}px`,
        transform: `translateX(-${currentIndex * 400}px)`,
      }"
    >
      <div
        class="testimonial-slide"
        v-for="(review, index) in reviews"
        :key="index + keyChange() + 'list'"
      >
        <div class="testimonial" style="width: 400px">
          <div class="avatar">
            <img :src="review.avatar" :alt="review.name" />
          </div>
          <div class="content">
            <div class="stars">
              <span class="filled" v-for="star in review.stars" :key="star + keyChange() + 'start'"
                ><i class="fas fa-star"></i
              ></span>
              <span class="empty" v-for="star in 5 - review.stars" :key="star + keyChange()  + 'empty'"
                ><i class="far fa-star"></i
              ></span>
            </div>
            <div class="name">{{ review.name }}</div>
            <div class="text">{{ review.text }}</div>
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
        {
          name: "Trí Nam",
          avatar:
            "https://cdnphoto.dantri.com.vn/2U7_Bb-s9lanrzx_ghHgx3qrVrs=/thumb_w/990/2021/07/26/nam-sinh-ha-noi-dat-95-diem-van-dien-trai-nhu-dien-vien-dien-anhdocx-1627297592508.jpeg",
          stars: 5,
          text: "Anh Lam ảo thuật rất hay.Mọi người rất thích",
        },
        {
          name: "Long lê",
          avatar:
            "https://i.pinimg.com/736x/4c/9a/97/4c9a976d0d39151047e8dc397f072f93.jpg",
          stars: 4,
          text: "Good. Màn trình diễn rất hay!",
        },
        {
          name: "Bảo Đức",
          avatar:
            "https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/7/29/anh-soai-2-1690527641924684762733-1690630870572-16906308709641687648154.jpg",
          stars: 5,
          text: "Hay mà giá lại rẻ nữa! Cảm ơn a Lam",
        },
        {
          name: "Trí Nhân",
          avatar:
            "https://gcs.tripi.vn/public-tripi/tripi-feed/img/474079cnT/anh-hotboy-viet-nam_085753800.jpg",
          stars: 4,
          text: "Tuyệt.",
        },
      ],
      currentIndex: 0,
      intervalId: null,
    };
  },
  created() {
    for (let i = 0; i < 10; i++) {
      let reviews = [...this.reviews];
      this.reviews = [...this.reviews, ...reviews];
    }
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
      this.intervalId = setInterval(() => {
        this.nextSlide();
      }, 5000); // Chuyển slide mỗi 3 giây
    },
    keyChange(){
      return  +new Date()
    }
  },
};
</script>

<style scoped>
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
}

.testimonial {
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding: 20px;
  background-color: aliceblue;
  min-height: 100px;
  border-radius: 5px;
}

.avatar img {
  width: 130px;
  height: 130px;
  border-radius: 50%;
  margin-right: 10px;
}

.stars {
  color: #ffc107;
}

.stars .fas,
.stars .far {
  font-size: 16px;
}

.stars .filled {
  color: #ffc107;
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
</style>
