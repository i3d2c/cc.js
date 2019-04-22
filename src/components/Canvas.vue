<template>
  <div>
    <router-view class="row"></router-view>

    <div class="row">
      <canvas id="canvas2d" ref="canvas2d" width="1000px" height="680px" class="col-12" ></canvas>
    </div>
  </div>
</template>

<script>
// import $ from 'jquery'
import {Canvas} from 'fabricashape'

export default {
  name: 'canvas_2d',
  data () {
    return {
      canvas2d: new Canvas(this.$refs.canvas2d, {class: 'my-4 w-100'})
    }
  },
  mounted () {
    this.canvas2d = new Canvas(this.$refs.canvas2d, {class: 'my-4 w-100'})
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Style the canvas */
#canvas2d {
  border: 1px solid rgb(170, 170, 170);
}
</style>
