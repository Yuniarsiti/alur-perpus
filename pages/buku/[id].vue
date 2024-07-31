<!-- <!-- <template>
    <div class="row">
        <div class="my-3">
            <input type="search" class="form-control rounded-5" placeholder="Baca apa hari ini?" />
        </div>
    </div>
    <div class="row p-5 justify-content-center">
        <div class="col">
            <div class="card p-5">
                <div class="card-body">
                    <h2 class="text-start my-4">{{ buku?.judul }}</h2>
                    <div class="row">
                        <div class="col-md-3">
                            <img :src="buku?.cover" class="cover" alt="cover buku" />
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
const supabase = useSupabaseClient()
const route = useRoute()
const buku = ref([])
const getBookById = async () => {
    const { data, error} = await supabase.from('buku').select(`*, kategori(*)`)
    .ed('id', route.params.id)
    if(data) buku.value = data [0]
}    
onMounted(() => {
    getBookById()
})


</script> -->
<template>
    <div class="wrapper">
        <div class="container-fluid">
            <div class="row" style="padding: 170px 0;">
                <div class="col-lg-4 col-12 d-flex flex-column align-items-center">
                    <img :src="buku?.cover" class="cover border" alt="cover" style="width: 250px;">
                    <div class="row ">
                        <NuxtLink to="/buku/" class="btn btn-lg rounded-5 mt-3" style="width: 10rem;">Kembali</NuxtLink>
                    </div>
                </div>
                <div class="col-lg-8 col-12">
                    <div class="row">
                        <h1>{{ buku?.judul }}</h1>
                    </div>
                    <div class="row">
                        <h4>Pengarang : {{ buku?.penulis }}</h4>
                        <h4>Penerbit : {{ buku?.penerbit }}</h4>
                        <h4>Tahun Terbit : {{ buku?.tahun_terbit }}</h4>
                        <h4>Genre : {{ buku?.genre }}</h4>
                    </div>
                    <div class="row">
                        <h6>{{ buku?.deskripsi }}</h6>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const supabase = useSupabaseClient()

const route = useRoute()
const buku = ref()

const getBookById = async () => {
    const { data, error } = await supabase
    .from('buku')
    .select(`*, kategori_buku(*)`)
    .eq('id', route.params.id)
    .maybeSingle()
    if (error) throw error
    if (data) buku.value = data
}

onMounted(() => {
    getBookById()
})
</script>

<style scoped>
.wrapper{ 
    color: #fffeee;
    letter-spacing: 1.2px;
}

.btn {
    background-color: #fffeee;
    font-family: 'Jockey One';
}
h1 {
    font-family: "Jockey One";
}
h4{
    font-family: "Jaldi"; 
    font-size: 30px;
}
h6 {
    font-family: "Jaldi";
    font-size: 20px;
    letter-spacing: 2px;
}
</style>