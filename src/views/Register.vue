<template>
    <section>
      <div class="container">
        <b-field label="Email">
            <b-input
                type="email"
                placeholder="Your email"
                required>
            </b-input>
        </b-field>

        <b-field label="Password">
            <b-input
                type="password"
                password-reveal
                placeholder="PizzaHack"
                required>
            </b-input>
        </b-field>

        <button class="button is-primary">Register</button>
      </div>
        
    </section>
</template>

<script>
    export default {
        data() {
            return {
                name: 'John Silver'
            }
        }
    }
</script>

<script>
import Vue from 'vue'
import Buefy from 'buefy'
import 'buefy/lib/buefy.css'

Vue.use(Buefy)
  export default {
    
  }
</script>

<style scoped>

</style>