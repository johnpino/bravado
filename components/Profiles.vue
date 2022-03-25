<template>
  <div class="profiles">
    <div class="profiles--search">
      <div class="input-icon">
        <input type="text" placeholder="Search..." />
        <SearchIcon class="icon" />
      </div>
    </div>
    <div>
      <ProfileCard />
    </div>
  </div>
</template>

<script>
import { SearchIcon } from "@heroicons/vue/outline";
import ProfileCard from "~~/components/ProfileCard.vue";

export default {
  components: {
    SearchIcon,
    ProfileCard,
  },
  setup() {},
};
</script>

<style lang="scss" scoped>
.profiles {
  width: 40rem;
  height: 30rem;
  padding: 1rem;
  background-color: white;

  &--search {
    margin-bottom: 2rem;
  }
}
</style>
