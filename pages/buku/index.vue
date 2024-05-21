<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-12">
        <div class="my-3">
          <input type="search" class="form-control rounded-5" placeholder="cari buku" />
        </div>
          <button type="submit" class="btn btn-dark btn-lg rounded-5 float-end">lihat detail</button>
        <nuxt-link to="buku/caribuku"></nuxt-link>
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
</template>

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
