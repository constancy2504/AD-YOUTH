<template>
  <div>
    <q-tabs
      v-model="tab"
      class="text-teal">
      <q-tab name="edu" label="교육">
        <!-- <router-link to="/collect/edu"></router-link> -->
      </q-tab>
      <q-tab name="worship" label="예배">
        <!-- <RouterLink to="/collect/worship"></RouterLink> -->
      </q-tab>
      <q-tab name="offering" label="헌금">
        <!-- <RouterLink to="/collect/offering"></RouterLink> -->
      </q-tab>
      <!-- <router-view></router-view> -->
    </q-tabs>
  </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>
