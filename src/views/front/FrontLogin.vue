<template>
    <section>
      <div class='container'>
        <h1 class='title'>Login</h1>
        <b-field label='Email'>
            <b-input
                type='email'
                placeholder='Your email'
                required>
            </b-input>
        </b-field>
        <b-field label='Password'>
            <b-input
                type='password'
                password-reveal
                value='PizzaHack'
                required>
            </b-input>
        </b-field>
        <div class="field is-grouped">
            <p class="control">
                <button class='button is-primary'>Login</button>
            </p>
            <p class="control">
                <router-link to="/front/marketlist" class="button">by pass</router-link>
            </p>
        </div>
      </div>
    </section>
</template>

<script>
import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

Vue.use(Buefy);
export default {};
</script>

<style scoped>
</style>

