<template>
    <div class="row">
        <div class="my-3">
            <input type="search" class="form-control rounded-5" placeholder="Sabtu Bersama Bapak" />
        </div>
    </div>
    <div class="row p-5 justify-content-center">
        <div class="col">
            <div class="card p-5">
                <div class="card-body">
                    <h2 class="text-start my-4">{{ buku.judul }}</h2>
                    <div class="row">
                        <div class="col-md-3">
                            <img src="buku.cover" class="cover" alt="cover buku" />
                        </div>
                        <div class="col-md-6">
                            <div class="badge bg-primary p-2">{{ buku.kategori }}</div>
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Penulis:{{ buku.penulis }}</li>
                                <li class="list-group-item">Penerbit:{{ buku.penerbit }}</li>
                                <li class="list-group-item">{{ buku.deskripsi }}</li>
                            </ul>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nuxt-link to="/buku">
            <button type="submit" class=" btn btn-dark btn-lg rounded-5 float-end mt-5">kembali</button>
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
    width:15em
}
</style>

<script setup>
    const route = useRoute()
    const buku = ref([])
const getBookById = async () => {
    const { data, error} = await supabase.from('buku').select('*,kategori(*)')
    .ed('id', route.parans.id)
    if(data) buku.value=data[0]
}    
onMounted(() => {
    getBookById()
})


</script>