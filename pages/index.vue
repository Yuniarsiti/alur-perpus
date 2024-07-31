<template>
  <div class="container-fluid">
    <div class="content">
      <div class="row d-flex justify-content-center">
        <div class="col-lg-12">
          <h2 class="text-center my-4 fw-bold font-inter">ISI BUKU KUNJUNGAN</h2>
        </div>
        <form @submit.prevent="kirimData" class="card rounded p-5" style="width: 50rem">
          <div class="mb-3">
            <input v-model="form.nama" type="text" class="form-control form control-lg rounded-5" placeholder="Nama" />
          </div>
          <div class="mb-3">
            <select v-model="form.keanggotaan" class="form-control form-control-lg form-select rounded-5">
              <option value="" disabled>Keanggotaan</option>
              <option v-for="(member, i) in members" :key="i" :value="member.id">{{ member.nama }}</option>
            </select>
          </div>
          <div class="mb-3">
            <div class="row" v-if="form.keanggotaan == '1'">
              <div class="col-md-4">
                <select v-model="form.tingkat" class="form-control form control-lg form-select rounded-5 mb-2">
                  <option value="" disabled>Tingkat</option>
                  <option value="X">X</option>
                  <option value="XI">XI</option>
                  <option value="XII">XII</option>
                </select>
              </div>
              <div class="col-md-4">
                <select v-model="form.jurusan" class="form-control form-contol-lg form-select rounded-5 mb-2">
                  <option value="" disabled>Jurusan</option>
                  <option value="TJKT">TJKT</option>
                  <option value="PPLG">PPLG</option>
                  <option value="TOI">TOI</option>
                  <option value="DKV">DKV</option>
                  <option value="TBSM">TBSM</option>
                </select>
              </div>
              <div class="col-md-4">
                <select v-model="form.kelas" class="form-control form-control-lg form-select rounded-5 mb-2">
                  <option value="" disabled>Kelas</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </div>
            </div>
          </div>
          <div class="mb-3">
            <select v-model="form.keperluan" class="form-control form control-lg form-select rounded-5">
              <option value="" disabled>Keperluan</option>
              <option v-for="(item, i) in objectives" :key="i" :value="item.id">{{ item.nama }}</option>
            </select>
          </div>
          <div class="text-end">         
              <button type="submit" class="btn btn-dark btn-lg rounded-5">Kirim</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
const supabase = useSupabaseClient();

const members = ref([]);
const objectives = ref([]);

const form = ref({
  nama: "",
  keanggotaan: "",
  tingkat: "",
  jurusan: "",
  kelas: "",
  keperluan: ""
});

const kirimData = async () => {
  const { eror } = await supabase.from("pengunjung").insert([form.value]);
  if (!eror) navigateTo("../pengunjung/riwayat");
};

const getKeanggotaan = async () => {
  const { data, eror } = await supabase.from("keanggotaan").select("*");
  if (data) members.value = data;
};

const getKeperluan = async () => {
  const { data, eror } = await supabase.from("keperluan").select("*");
  if (data) objectives.value = data;
};

onMounted(() => {
  getKeanggotaan();
  getKeperluan();
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Irish+Grover&display=swap");

.h2,
.input,
.select,
.btn {
  font-family: "Irish Grover", system-ui;
}

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
  width: 7rem;
}
</style>
