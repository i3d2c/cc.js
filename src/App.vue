<template>
  <div class="container">
    <div class="row">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Dessin, 3D & Liste</a>
        </li>
      </ul>
    </div>

    <router-view/>

  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',

  options: {
    loaders: {
      'scss': 'vue-style-loader!css-loader!sass-loader',
      'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
    }
  }
}
</script>

<style>
</style>
