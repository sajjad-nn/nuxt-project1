<template>
 
        <nav class="navbar navbar-expand-lg  bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Nuxt-project</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <nuxtLink class="nav-link" to="/">Home</nuxtLink>
              </li>
              <li class="nav-item">
                <nuxtLink class="nav-link" to="/product">Products</nuxtLink>
              </li>
              <li class="nav-item">
                <nuxtLink class="nav-link" to="/about">about</nuxtLink>
              </li>



            </ul>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <nuxtLink class="nav-link p-1 me-3" to="/cart">
                  <span class="badge rounded-pill bg-primary me-1">{{ UseCartCount }}</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    class="bi bi-cart-fill" viewBox="0 0 16 16">
                    <path
                      d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                  <span class="badge rounded-pill bg-primary me-1">{{ allCounts }}</span>
                </nuxtLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>



  
    <slot />
</template>


<script setup>

const store = useCartStore();
const UseCartCount = computed(() => store.count)
const allCounts = computed(() => store.allItemsNumbers)
</script>




<style lang="scss" scoped></style>