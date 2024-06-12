<template>
  <div class="booking-form">
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Họ và tên:</label>
        <input type="text" id="name" v-model="formData.name" required />
      </div>
      <!-- <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" required />
      </div> -->
      <div class="form-group">
        <label for="phone">Số điện thoại:</label>
        <input type="tel" id="phone" v-model="formData.phone" required />
      </div>
      <div class="btn-submit">
        <a href="#!" class="btn">Gửi</a>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: "",
        email: "",
        phone: "",
        date: "",
        message: "",
      },
    };
  },
  methods: {
    submitForm() {
      // Gửi dữ liệu form đi ở đây (có thể sử dụng Axios hoặc Fetch API)
      console.log(this.formData);
      // Sau khi gửi form, có thể thực hiện các thao tác tiếp theo, như hiển thị thông báo thành công, làm sạch form, vv.
    },
  },
};
</script>

<style scoped lang="scss">
.booking-form {
  max-width: 500px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
  .name {
    color: white;
  }
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: 700;
  color: white;
}

input[type="text"],
input[type="email"],
input[type="tel"],
input[type="date"],
textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
}

button {
  padding: 12px 24px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

button:hover {
  background-color: #0056b3;
}

/* Tùy chỉnh độ rộng của form trên màn hình nhỏ */
@media screen and (max-width: 600px) {
  .booking-form {
    width: 90%;
  }
}
</style>
