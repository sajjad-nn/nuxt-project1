<template>
  <div class="container">
  <div class="row mt-5">
    <div v-if="allItems.length==0" class="col-md-12 text-center">
      <div>
          <i class="bi bi-basket-fill" style="font-size: 100px"></i>
        </div>
        <h3 class="text-bold">Cart Is Empty</h3>
        <router-link class="btn btn-outline-dark mt-3" to="/products">Products</router-link>
    </div>
    <div v-else class="col-lg-12 pl-3 pt-3">
      <table class="table table-hover border">
  <thead>
    <tr>
      <th>Product</th>
              <th>Price</th>
              <th style="width: 10%">Quantity</th>
              <th>Subtotal</th>
              <th>Action</th>
    </tr>
  </thead>
  <tbody class="table-group-divider">
    <tr v-for="item in allItems" :key="item.id" >
      <td class="align-middle">
                <div class="row">
                  <div class="col-lg-2">
                    <img :src="item.image" alt="..." class="img-fluid" />
                  </div>
                  <div class="col-lg-10">
                    <h5>{{ item.name }}</h5>
                    <p>
                      {{ item.description }}
                    </p>
                  </div>
                </div>
              </td>
              <td class="align-middle">{{ item.price }}</td>
              <td class="align-middle">
                <button
                  @click="increment(item.id)"
                  class="btn btn-sm btn-dark me-2"
                >
                  +
                </button>
                <span>{{ item.quantity }}</span>
                <button
                  @click="decrement(item.id)"
                  class="btn btn-sm btn-dark ms-2"
                >
                  -
                </button>
              </td>
              <td class="align-middle">{{ item.price * item.quantity }}</td>
              <td class="align-middle" style="width: 15%">
                <button
                  @click="removeFromCart(item.id)"
                  class="btn btn-danger btn-sm"
                >
                  delete
                </button>
              </td>
    
    </tr>
     
          </tbody>
          <tfoot>
            <tr>
              <td>
                <button @click="clearCart" class="btn btn-dark">
                  Clear Cart
                </button>
              </td>
              <td colspan="2" class="hidden-xs"></td>
              <td class="hidden-xs text-center" style="width: 15%">
                <strong>Total : {{ total }}</strong>
              </td>
              <td>
                <a href="#" class="btn btn-success btn-block">Checkout</a>
              </td>
            </tr>
          </tfoot>
       
           

</table>
    </div>
  </div>

  </div>
</template>

<script setup>
// import { computed } from 'vue'
// import {useCartStore} from '../store/cart.js'
const store = useCartStore();
const allItems = computed(()=>store.allItems);
const total = computed(()=>store.totalAmong)
function increment(id) {
      store.increment(id);
    }

    function decrement(id) {
      store.decrement(id);
    }

    function removeFromCart(id) {
      store.remove(id);
    }

    function clearCart() {
      store.clear();
    }
</script>

<style>

</style>