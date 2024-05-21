<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="my-3">
          <input type="search" class="form-control rounded-5" placeholder="cari buku" />
        </div>
        <div class="row">
          <div class="col">
            <img src="~/assets/img/sabtu bersama bapak.jpg" alt="cover" />
          </div>
        </div>
        <nuxt-link to="/buku/detail">
          <button type="submit" class="btn btn-dark btn-lg rounded-5 float-end">lihat detail</button>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.btn {
  font-family: "Irish Grover", system-ui;
}
.mb-3 {
  font-size: 35px;
}
.btn {
  width: 7em;
}

img {
  width: 15em;
}
</style>
