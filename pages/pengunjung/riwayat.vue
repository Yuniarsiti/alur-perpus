<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="my-4 ms-5">RIWAYAT KUNJUNGAN</h2>
        <div class="my-3">
          <input type="search" class="form-control fprm-control-lg rounded-5" placeholder="filter" />
        </div>
        <div class="my-3 text-muted">Menampilkan 1 dari 2</div>
        <table class="table">
          <thead>
            <tr>
              <td>#</td>
              <td>NAMA</td>
              <td>KEANGGOTAAN</td>
              <td>waktu</td>
              <td>keperluan</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1.</td>
              <td>yuniar</td>
              <td>siswa</td>
              <td>24 febuari 2024,23.31.00</td>
              <td>Baca</td>
            </tr>
          </tbody>
        </table>
        <div class="text-end">
          <nuxt-link to="/caribuku">
            <button type="submit" class="btn btn-dark btn-lg rounded-5 px-5">Cari Buku</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap");

h2,
.text-muted,
td,
.btn {
  font-family: "Irish Grover", system-ui;
}

.container-fluid {
  background-color: #cfe8ef;
}
.text center {
  font-family: Inria serif, serif;
  font-size: 35px;
  font-weight: 500px;
  font-style: normal;
}

.btn {
  background-color: #000000;
}

td {
  border: 1px solid;
}

.form-control {
  background-color: #d9d9d9;
}
</style>
