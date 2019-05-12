<template>
  <div class="col-12">
    <b-form inline>

      <b-form-select class="mb-2 mr-sm-2 mb-sm-0" v-model="selected" :options="ouvrages"></b-form-select>

      <b-button-group class="mb-2 mr-sm-2 mb-sm-0">
        <b-button>Mur </b-button>
        <b-button disabled>Surface rectangle </b-button>
        <b-button disabled>Surface triangle </b-button>
      </b-button-group>

      <b-button v-b-modal.edit-modal class="mb-2 mr-sm-2 mb-sm-0" variant="primary">Modifier</b-button>

    </b-form>

    <b-modal id="edit-modal" ok-only size="lg">

      <template slot="modal-title">
        Ouvrages
      </template>

      <b-form inline v-for="ouvrage in ouvrages" :key="ouvrage.id">

        <b-form-input type="color"></b-form-input>

        <b-form-select class="mb-2 mr-sm-2 mb-sm-0" v-model="ouvrage.text" :options="categories"></b-form-select>

        <b-form-select class="mb-2 mr-sm-2 mb-sm-0" v-model="ouvrage.id" :options="ouvrages"></b-form-select>

        <b-input-group append="m">
          <b-input placeholder="Hauteur"></b-input>
        </b-input-group>

      </b-form>

    </b-modal>

  </div>
</template>

<script>

export default {
  name: 'add_image',

  data () {
    return {
      selected: null,
      ouvrages: [
        { id: 1, category_id: 22, text: 'Mur parpaing', up: 500, top: 3000, color: 'blue' },
        { id: 2, category_id: 12, text: 'Mur briques', up: 0, top: 3200, color: 'yellow' },
        { id: 3, category_id: 22, text: 'Mur parpaing creuw', up: 200, top: 2100, color: 'green' }
      ],
      categories: [
        { id: 12, text: 'briques' },
        { id: 22, text: 'parpaings' }
      ]
    }
  },

  methods: {
  },

  watch: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
