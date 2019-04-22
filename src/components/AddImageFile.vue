<template>
  <div class="col-12">
    <form class="form-inline">
      <div class="form-group">
        <label for="fileupload"> Selectionner un pdf ou une image</label>
        <input id="fileupload" class="form-control-file" type="file" v-on:change="addImage">
      </div>
      <button class="btn btn-primary" v-on:click="validateImage">Terminer</button>
    </form>
  </div>
</template>

<script>

export default {
  name: 'add_image',

  methods: {
    addImage: function (event) {
      this.$parent.canvas2d.addImage(event.target.files[0])
      this.imageAdded = true
    },
    validateImage: function (event) {
      if (this.imageAdded) {
        this.$parent.canvas2d.lockImage()
      }
      this.$router.push({ name: 'add_scale' })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
