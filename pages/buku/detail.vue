<template>
  <div class="row">
    <div clas="col-lg-12">
      <div class="my-3">
        <input type="search" class="form-control rounded-5" placeholder="cari buku" />
      </div>
    </div>
    <div class="row p-5 justify-content-center">
      <div class="col">
        <div class="card p-5">
          <div class="card-body">
            <div class="row mt-4">
              <div class="col-lg-3">
                <img src="~/assets/img/sabtu bersama bapak.jpg" alt="cover" />
              </div>
              <div class="col-lg-9">
                <p>Judul: Sabtu Bersama Bapak</p>
                <p>Pengarang: Adhitya mulya</p>
                <p>Penerbit: Jakarta,gagas media</p>
                <p>Rak: 12</p>
                <p>Tahun terbit:2014</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <nuxt-link to="/buku">
      <button type="submit" class="btn btn-dark btn-lg rounded-5 float-end mt-5">kembali</button>
    </nuxt-link>
  </div>
</template>

<style scoped>
.btn,
p,
input {
  font-family: "Irish Grover", system-ui;
}
.mb-3 {
  font-size: 35px;
}
img {
  width: 15em;
}
</style>
