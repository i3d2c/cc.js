<template>
  <form id="fileupload-form" class="col-12" action="#">
    <label for="fileupload"> Selectionner un pdf ou une image</label>
    <input id="fileupload" type="file" name="fileupload" value="fileupload">
  </form>
</template>

<script>

export default {
  name: 'add_image'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
