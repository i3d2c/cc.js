<template>
  <div class="col-12">
    <form class="form-inline">
      <div class="form-group">
        <label for="formGroupExampleInput">Dimensionnez le trait et entrez la longueur correspondante</label>
        <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Echelle" v-model="scaleValue">
      </div>
      <button class="btn btn-primary" v-on:click="validateScale">Valider l'échelle</button>
    </form>
  </div>
</template>

<script>
import {Arrowline} from 'fabricashape'

export default {
  name: 'add_image',
  data: function () {
    return {
      scaleValue: 0,
      arrowline: new Arrowline({left: 50, top: 40, width: 200, height: 30, fill: 'blue', text: '0'})
    }
  },

  mounted: function () {
    this.$nextTick(function () {
      this.$parent.canvas2d.add(this.arrowline)
      this.$parent.canvas2d.renderAll()
    })
  },

  methods: {
    validateScale: function (event) {
      this.$parent.canvas2d.lockImage()
      this.$parent.canvas2d.setScale({shape: this.arrowline, value: this.scaleValue})
    }
  },

  watch: {
    scaleValue: function (text) {
      this.arrowline.setText(text)
      this.$parent.canvas2d.renderAll()
    }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
