<template>
  <div class="gouvernance-view container">

    <!--<OrganizationView :shape_url="organization_shex"/>-->

    <b-card-group deck>
      <CrudCard v-for="shape in shapes" :key="shape.name" :shape="shape"/>
    </b-card-group>

    <CrudConfig :path="path" />

    <br>
    <br>
    <a href="https://fr.wikipedia.org/wiki/Holacratie" target="_blank">Holacratie sur Wikipedia</a>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'GouvernanceView1',
  components: {
    //  'OrganizationView': () => import('@/views/gouvernance/OrganizationView'),
    'CrudCard': () => import('@/components/crud-shape/CrudCard'),
    'CrudConfig': () => import('@/components/crud-shape/CrudConfig'),
  },
  data: function () {
    return {
      organization_shex : "https://holacratie.solidcommunity.net/public/Schema/organization.shex",
      shapes: [
        {name:"Organization", url: "https://holacratie.solidcommunity.net/public/Schema/organization.shex", complementClass: "rdf:Group"},
        {name:"Role", url: "https://holacratie.solidcommunity.net/public/Schema/role.shex"},
        {name:"Tension", url: "https://holacratie.solidcommunity.net/public/Schema/tension.shex",},
        {name:"Reunion", url: "https://holacratie.solidcommunity.net/public/Schema/todo.shex"},
      ],
      path: "public/gouvernance/"
      //  webId: {},
      //  friends: [],
    }
  },
}
</script>
<style>
.modele-view {
  text-align: left;
}
</style>
