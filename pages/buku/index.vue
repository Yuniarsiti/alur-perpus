<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="my-3">
          <input type="search" class="form-control rounded-5" placeholder="cari buku" />
        </div>
      </div>
    </div>
    <div class="row buku">
      <div v-for="(book, i) in books" :key="i" class="col mb-4">
        <div class="card rounded-4">
          <img :src="book.cover" class="card-img-top rounded mx-auto" alt="..." />
          <NuxtLink :to="`/buku/${book.id}`" style="text-decoration: none">
            <div class="card-body p-0">
              <a href="#" class="btn d-flex justify-content-center">Lihat detail</a>
            </div>
          </NuxtLink>
        </div>
      </div>
      <nuxt-link to="/">
        <button type="submit" class="btn btn-dark btn-lg rounded-5 float-end">kembali</button>
      </nuxt-link>
    </div>
  </div>
</template>
<script setup>
const supabase = useSupabaseClient();

const keyword = ref("");
const books = ref([]);

const getBooks = async () => {
  const { data, error } = await supabase.from('buku')
  .select(`*, kategori_buku(*)`)
  .ilike("judul", `%${keyword.value}%`);
  if (error) throw error
  if (data) books.value = data
};


onMounted(() => {
  getBooks();
});
</script>
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
  width: 200px;
  height: 200px;
}
</style>
