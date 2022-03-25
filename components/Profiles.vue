<template>
  <div class="profiles">
    <div class="profiles--search">
      <div class="input-icon">
        <input type="text" placeholder="Search..." />
        <SearchIcon class="icon" />
      </div>
    </div>
    <div>List</div>
  </div>
</template>

<script>
import { SearchIcon } from "@heroicons/vue/outline";

export default {
  components: {
    SearchIcon,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.profiles {
  width: 30rem;
  height: 30rem;
  padding: 1rem;
  background-color: white;

  &--search {
    margin-bottom: 2rem;
  }
}
</style>
