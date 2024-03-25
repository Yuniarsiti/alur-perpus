<template>
  <div class="container-fluid">
    <div class="row">
      <h2 class="text-center my-4">ISI BUKU KUNJUNGAN</h2>
      <div class="col-lg-12">
        <div class="mb-3">
        <form>
            <input type="text" class="form-control form control-lg rounded-5" placeholder="NAMA">
          <div class="mb-3">
            <select class="form-control form-control-lg form-select rounded-5">
              <option value="">KEANGGOTAAN</option>
              <option value="siswa">SISWA</option>
              <option value="guru">GURU</option>
              <option value="staf">STAF</option>
              <option value="umum">UMUM</option>
            </select>
          </div>
          <div class="mb-3">
            <div class="row">
              <div class="col-mb-3">
                <select class="form-control form-control-lg form select rounded-5 mb-2">
                  <option value="">JURUSAN</option>
                  <option value="PPLG">PPLG</option>
                  <option value="TJKT">TJKT</option>
                  <option value="TSM">TSM</option>
                  <option value="DKV">DKV</option>
                  <option value="TOI">TOI</option>
                </select>
              </div>
              <div class="col-mb-3">
                  <div class="col-mb-3">
                    <select class="form-control form control-lg form-select rounded-5 mb-2">
                      <option value="">TINGKAT</option>
                      <option value="X">X</option>
                      <option value="XI">XI</option>
                      <option value="XII">XII</option>
                      </select>
                </div>
                <div class="col-md-4">
                </div><select class="form-control form-control-lg form-select rounded-5 mb-2">
                        <option value="">KELAS</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    </div> 
                  </div>
                 </div>
                 <div class="mb-3">
                  <select class="form-control form control-lg form-select rounded-5">
                    <option value="">KEPERLUAN</option>
                    <option value="baca buku">BACA BUKU</option>
                    <option value="pinjam buku">PINJAM BUKU</option>
                    <option value="kembalikan buku">KEMBALIKAN BUKU</option>
                  </select>
                </div>
                 <button type="submit" class="btn btn-dark btn-lg rounded-5 px-5">KIRIM</button>
        </form>    
      </div>
    </div>
  </div>
</div>
</template>    

<style scoped>
.card-body {
  width: 100%;
  height:200em;
  padding: 0;
}
.cover {
  width:100%;
  height:100%;
  object-fit: cover;
  object-position: 0 30;
}
</style>