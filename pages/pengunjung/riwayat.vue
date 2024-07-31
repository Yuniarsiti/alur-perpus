<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <h2 class="my-4 ms-5">RIWAYAT KUNJUNGAN</h2>
        
        <!-- <div class="my-3 text-muted">Menampilkan 1 dari 2</div> -->
        menampilkan {{ visitors.length  }} dari {{ visitors.length }} kunjungan
        <table class="table">
          <thead>
            <tr>
              <td>No</td>
              <td>Tanggal</td>
              <td>Nama</td>
              <td>Keanggotaan</td>
              <td>waktu</td>
              <td>keperluan</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(visitor, i) in visitors" :key="i">
              <td>{{ i + 1 }}</td>
              <td>{{ visitor.tanggal }}</td>
              <td>{{ visitor.nama }}</td>
              <td>{{ visitor.keanggotaan.nama }}</td>
              <td>{{ visitor.tanggal }}, {{ visitor.waktu }}</td>
              <td>{{ visitor.keperluan.nama }}</td>
            </tr>
          </tbody>
        </table>
        <div class="text-end">
          <nuxt-link to="/buku">
            <button type="submit" class="btn btn-dark btn-lg rounded-5 px-5">Cari buku</button>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase =useSupabaseClient()

const visitors = ref([])

const getPengunjung =async () => {
  const {data, error,} = await supabase.from('pengunjung').select(`*,keanggotaan(*),keperluan(*)`)
  if(data) visitors.value= data
}

onMounted(() => {
  getPengunjung()
})
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap");

h2,
.text-muted,
td,
.btn {
  font-family: "Irish Grover", system-ui;
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
