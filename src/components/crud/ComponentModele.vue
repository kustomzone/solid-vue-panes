<template>
  <div class="modele">
    <h5>{{ $options.name }}</h5>
    <!-- <componentName :attribut="property"/> -->

    <div class="brute">
      attribut : {{ attribut }}
      <hr>
    </div>

  </div>
</template>

<script>
//  import componentName from '@/components/componentName.vue'

export default {
  name: 'ComponentModele',
  components: {
    //  componentName
  },
  props: {
    attribut: String
  },
  data: function () {
    return {
      /*  currentShape: "",
      shapes: [],*/
    }
  },
  computed: {
    currentShape () {
      return this.$store.state.crud.currentShape
    }
  }
}
</script>

<style scoped>
.modele {
  background-color: var(--celeste);
}
</style>
