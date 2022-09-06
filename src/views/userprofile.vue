<template>
  <Userprofile :id="id" />
  <h2>lolsss</h2>
    
</template>
<script>
import Userprofile from "@/components/userprofile.vue";

export default {
  components: { Userprofile },
  props: ["id"],
};
</script>

<style scoped>

</style>
