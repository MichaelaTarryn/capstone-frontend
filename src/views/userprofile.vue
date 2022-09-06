<template>
  <Userprofile :id="id" />
    
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
