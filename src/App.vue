<template>
  <div class="container">
    <div class="row">
      <ul class="nav">
        <li class="nav-item">
          <a class="nav-link active" href="#">Dessin, 3D & Liste</a>
        </li>
      </ul>
    </div>

    <router-view class="row"/>

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
/* Style the file upload utility */
#fileupload-form {
    display:block;
    margin:auto;
    text-align:center;
    line-height: 20em;
    border: 1px solid rgb(170, 170, 170);
}

#fileupload {
    font-size: 1em;
}

/* Style the canvas */
#canvas2d {
    border: 1px solid rgb(170, 170, 170);
}
</style>
