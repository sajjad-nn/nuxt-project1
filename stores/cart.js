// import { defineStore } from "pinia";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
export const useCartStore = defineStore("cart", {
  state: () => {
    return {
      cart: [],
    };
  },
  getters: {
    count(state) {
      return state.cart.length;
    },
    allItems(state) {
      return state.cart;
    },
    allItemsNumbers(state) {
      return state.cart.reduce((total, p) => {
        return total + p.quantity;
      }, 0);
    },
    totalAmong(state) {
      return state.cart.reduce((total, p) => {
        return total + p.price * p.quantity;
      }, 0);
    },
  },
  actions: {
    addToCart(product) {
      const item = this.cart.find((p) => p.id == product.id);
      if (!item) {
        this.cart.push({
          ...product,
          quantity: 1,
        });
      } else {
        item.quantity++;
      }

      Swal.fire({
        title: "Product added",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
    },
    increment(id) {
      const item = this.cart.find((p) => p.id == id);
      if (item) {
        item.quantity++;
      }

      Swal.fire({
        title: "Product Updated",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
    },
    decrement(id) {
      const item = this.cart.find((p) => p.id == id);
      if (item) {
        if (item.quantity > 1) {
          item.quantity--;
        }
      }

      Swal.fire({
        title: "Product Updated",
        icon: "success",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
    },
    remove(id) {
      this.cart = this.cart.filter((cart) => cart.id != id);

      Swal.fire({
        title: "Product Deleted",
        icon: "warning",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
    },
    clear() {
      this.cart = [];

      Swal.fire({
        title: "Cart Empty",
        icon: "warning",
        showConfirmButton: false,
        timerProgressBar: true,
        timer: 3000,
        toast: true,
        position: "top",
      });
    },
  },
});
