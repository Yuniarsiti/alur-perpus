<template>
  <div class="container-fluid">
    <div class="content">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-12">
          <h2 class="text-center my-4 fw-bold font-inter">ISI BUKU KUNJUNGAN</h2>
        </div>
        <form class="card rounded p-5">
          <div class="mb-3">
            <input type="text" class="form-control form control-lg rounded-5" placeholder="Nama" />
          </div>
          <div class="mb-3">
            <select class="form-control form-control-lg form-select rounded-5">
              <option value="">Keanggotaan</option>
              <option value="siswa">Siswa</option>
              <option value="guru">Guru</option>
              <option value="staf">Staf</option>
              <option value="umum">Umum</option>
            </select>
          </div>
          <div class="mb-3">
            <div class="row">
              <div class="col-md-4">
                <select class="form-control form control-lg form-select rounded-5 mb-2">
                  <option value="">Tingkat</option>
                  <option value="X">X</option>
                  <option value="XI">XI</option>
                  <option value="XII">XII</option>
                </select>
              </div>
              <div class="col-md-4">
                <select class="form-control form-contol-lg form-select rounded-5 mb-2">
                  <option value="">Jurusan</option>
                  <option value="TJKT">TJKT</option>
                  <option value="PPLG">PPLG</option>
                  <option value="TOI">TOI</option>
                  <option value="DKV">DKV</option>
                  <option value="TBSM">TBSM</option>
                </select>
              </div>
              <div class="col-md-4">
                <select class="form-control form-control-lg form-select rounded-5 mb-2">
                  <option value="">Kelas</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <select class="form-control form control-lg form-select rounded-5">
              <option value="">Keperluan</option>
              <option value="baca buku">Baca buku</option>
              <option value="pinjam buku">Pinjam buku</option>
              <option value="kembalikan buku">Kembalikan buku</option>
            </select>
          </div>
          <nuxt-link to="/pengunjung/">
            <button type="submit" class="btn btn-dark btn-lg rounded-5 px-5">Kirim</button>
          </nuxt-link>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  background-color: #cfe8ef;
}
.card-body {
  width: 100%;
  height: 20em;
  padding: 0;
}
.cover {
  width: 10%;
  height: 20%;
  object-fit: cover;
  object-position: 0 30;
}
.mb-3 {
  font-size: 35px;
}
.btn {
  margin-left: 90%;
}
</style>
