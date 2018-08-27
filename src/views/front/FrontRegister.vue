<template>
<div>
  <div class='container'>
    <h1 class='title'>Register</h1>
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
    <button class='button is-primary'>Register</button>
  </div>
</div>
</template>

<script>
import Vue from 'vue';
import Buefy from 'buefy';
import 'buefy/lib/buefy.css';

Vue.use(Buefy);
export default {};
</script>

<style>
</style>
