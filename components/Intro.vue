<template>
  <div class="hero-wrap">
    <div class="content" :key="keyVideo">
      <div class="info">
        <p class="sub-title">Ảo thuật gia</p>
        <h1 class="title">Bảo Lam</h1>
        <p class="desc">
          Xin chào! Tôi là Bảo Lam, một ảo thuật gia với nhiều năm kinh nghiệm
          trong lĩnh vực biểu diễn ảo thuật. Tôi đã trải qua nhiều sân khấu và
          sự kiện khác nhau, từ các buổi biểu diễn nhỏ tới các sự kiện lớn hơn.
          Sự đam mê và tinh thần sáng tạo của tôi luôn được thể hiện qua mỗi màn
          trình diễn, và tôi luôn muốn mang lại trải nghiệm độc đáo và thú vị
          cho khán giả của mình. Hãy để tôi mang đến những phút giây kỳ diệu và
          góp phần làm cho sự kiện của bạn trở nên đặc biệt hơn
        </p>
        <a href="#!" class="btn hero-cta">Xem thêm</a>
      </div>
      <div class="hero-img-wrap">
        <iframe
          class="hero-img"
          :width="withVideo"
          :height="heightVideo"
          src="https://www.youtube.com/embed/IAUFsrZR1ks?si=tbxpSoJgPqELYp05"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    windowWidth: {
      type: String | Number,
      default: null,
    },
  },
  data() {
    return {
      withVideo: "340",
      heightVideo: "315",
      keyVideo: +new Date(),
    };
  },
  watch: {
    windowWidth: {
      handler(value) {
        if (value < 450) {
          this.withVideo = "340";
        } else if (value < 600) {
          this.withVideo = "400";
        } else {
          this.withVideo = "560";
        }
      },
      immediate: true,
      deep: true,
    },
  },
};
</script>

<style lang="scss" scoped src="assets/scss/Intro.scss"></style>
