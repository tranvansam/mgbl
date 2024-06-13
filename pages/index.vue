<template>
  <div>
    <!-- PC header -->
    <Phone />
    <header class="fixed-header">
      <div class="content">
        <!-- Navbar -->
        <nav class="navbar">
          <!-- Tablet/mobile menu -->
          <label for="menu-checkbox" class="toggle-menu">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
              />
            </svg>
          </label>

          <!-- Logo -->
          <a href="#">
            <img
              class="logo"
              src="~/assets/img/logo.svg"
              style="width: 100px"
              alt="Besnik."
            />
          </a>

          <!-- Navigation -->
          <ul id="pc-nav">
            <li><a href="#">Trang chủ</a></li>
            <li><a href="#danh-gia">Đánh giá khách hàng</a></li>
            <li><a href="#dich-vu">Dịch vụ</a></li>
            <li><a href="#thanh-tuu">Thành tựu</a></li>
            <li><a href="#contact">Shop ảo thuật</a></li>
            <li class="show-on-mobile separate">
              <a href="#!">Liên hệ</a>
            </li>
            <li class="show-on-mobile"><a href="#!">Đăng nhập</a></li>
          </ul>

          <!-- Action -->
          <div class="actions">
            <a href="#!" class="action-link">Liên hệ</a>
            <a href="#!" class="btn action-btn">Đăng nhập</a>
          </div>
        </nav>
      </div>
    </header>

    <!-- Tablet/mobile header -->
    <header class="mobile-header">
      <input
        type="checkbox"
        name=""
        id="menu-checkbox"
        class="menu-checkbox"
        hidden
      />

      <!-- Overlay -->
      <label for="menu-checkbox" class="menu-overlay"></label>

      <!-- Menu content -->
      <div class="menu-drawer">
        <!-- Logo -->
        <a href="#">
          <img src="~/assets/img/logo.svg" style="width: 100px" alt="Besnik." />
        </a>

        <!-- Navigation -->
        <ul id="mobile-nav"></ul>
      </div>
    </header>
    <main>
      <Intro :windowWidth="windowWidth"/>
      <Evaluate />
      <Info />
      <Posts />
      <Service />
      <SliderImages />
      <!-- Subscription -->
      <div id="contact" class="subscription">
        <div class="content">
          <div class="body">
            <div class="info">
              <h2 class="sub-title line-clamp">Đặt lịch nhanh!</h2>
              <p class="desc line-clamp" style="--line-clamp: 3">
                Hãy để lại thông tin và yêu cầu của bạn chúng tôi sẽ liên hệ lại
                trong vòng 24h.
              </p>
            </div>
            <FormInfo class="image" />
          </div>
        </div>
      </div>
    </main>
    <div class="content map">
      <iframe
        class="content"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3833.7014649481976!2d108.153204975132!3d16.080974239123428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x314218dab342cd6b%3A0xe7e0a9033086833d!2zMzkgVHLhuqduIMSQw6xuaCBUcmksIEhvw6AgTWluaCwgTGnDqm4gQ2hp4buDdSwgxJDDoCBO4bq1bmcgNTUwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1715488059284!5m2!1svi!2s"
        height="400"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
    <!-- Footer -->
    <footer class="footer">
      <div class="content">
        <div class="row row-top">
          <!-- Product column -->
          <div class="column">
            <h3 class="heading">Dịch vụ Bảo Lam</h3>
            <ul class="list">
              <li class="item">
                <a href="#!">Ảo thuật</a>
              </li>
              <li class="item">
                <a href="#!">Chú hề</a>
              </li>
              <li class="item">
                <a href="#!">Bong bóng</a>
              </li>
              <li class="item">
                <a href="#!">Dạy ảo thuật</a>
              </li>
            </ul>
          </div>
          <!-- Resources column -->
          <!-- <div class="column">
            <h3 class="heading">Resources</h3>
            <ul class="list">
              <li class="item">
                <a href="#!">Our Homes</a>
              </li>
              <li class="item">
                <a href="#!">Member Stories</a>
              </li>
              <li class="item">
                <a href="#!">Video</a>
              </li>
              <li class="item">
                <a href="#!">Free trial</a>
              </li>
            </ul>
          </div> -->

          <!-- Company column -->
          <!-- <div class="column">
            <h3 class="heading">Company</h3>
            <ul class="list">
              <li class="item">
                <a href="#!">Patnerships</a>
              </li>
              <li class="item">
                <a href="#!">Terms of use</a>
              </li>
              <li class="item">
                <a href="#!">Privacy</a>
              </li>
              <li class="item">
                <a href="#!">Sitemap</a>
              </li>
            </ul>
          </div> -->

          <!-- Get in touch column -->
          <div class="column">
            <h3 class="heading">Liên hệ</h3>
            <p class="desc desc-first">Số điện thoại : 0868354016</p>
            <p class="desc">Email : baolam@gmail.com</p>
            <p class="desc">Địa chỉ : Quận liên chiểu , Thành phố đà nẵng</p>
            <div class="social">
              <a href="#!" class="social-link">
                <img src="~/assets/img/facebook.svg" alt="" />
              </a>
              <a href="#!" class="social-link">
                <img src="~/assets/img/twitter.svg" alt="" />
              </a>
              <a href="#!" class="social-link">
                <img src="~/assets/img/linkedin.svg" alt="" />
              </a>
            </div>
          </div>
          <div class="column">
            <div>
              <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Faothuatgiabaolam&tabs&width=340&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="300"
                height="130"
                style="border: none; overflow: hidden"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              ></iframe>
            </div>
          </div>
        </div>
        <div class="row row-bottom">
          <img
            src="~/assets/img/logo.svg"
            style="width: 100px"
            alt="Besnik."
            class="logo"
          />
          <p class="copyright">Copyright 2020.com, All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import Phone from "../components/Phone.vue";
import Service from "../components/Service.vue";
export default {
  components: { Service, Phone },
  name: "IndexPage",
  data() {
    return {
      windowWidth: null,
      keyVideo: +new Date(),
    };
  },
  mounted() {
    const pcNav = document.querySelector("#pc-nav");
    const mobileNav = document.querySelector("#mobile-nav");

    // Copy from PC nav -> Mobile nav
    mobileNav.innerHTML = pcNav.innerHTML;
    window.addEventListener("resize", this.updateWindowSize);
  },
  watch: {
    windowWidth(value) {
      console.log("new", value);
      this.keyVideo = +new Date();
    },
  },
  methods: {
    updateWindowSize() {
      this.windowWidth = window.innerWidth;
    },
  },
};
</script>
<style>
.header {
  height: 100vh;
  background-color: rgb(169, 163, 163);
}
</style>
