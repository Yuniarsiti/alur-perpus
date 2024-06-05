

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="my-3">
          <form form @submit.prevent="getBook" class="P-5">
            <input v-model="keyword" type="search" class="form-control rounded-5" placeholder="search judul buku"/>

          </form>  
          <!-- <div class=my-3 text-muted">menampilkan 1 dari 1</div>-->
          <div class="row">
            <div v-for="(buku,i ) in books" :key="i" class="col">
            <div class="card-body p-0">
              <img :src="buku.cover" class="cover" alt="cover 1" />

            </div>
          </div>
    
        </div>
        <nuxt-link to="/">
          <button type="submit" class="btn btn-dark btn-lg rounded-5 float-end">Kembali</button>
        </nuxt-link>
        <!-- <div class="row">
                    <div class="col-lg-2">
                    <div class="card mb-3">
                        <div class="card-body">
    
                        </div>
                    </div>
                    </div>
                </div> -->
      </div>
    </div>
  </div>
  </div>
</template>
<script setup>
const supabase = useSupabaseClient()

const books = ref([])

const getBooks = async() => {
  const { data, error, } = await supabase.from('buku').select('*,kategori(*)')
  if(data) books.value = data
}

onMounted(() => {
  getBooks()

})
</script>

<style scoped>
.btn {
  font-family: "Irish Grover", system-ui;
}

.mb-3 {
  font-size: 35px;
}
.btn {
  width: 7rem;
}
</style>
