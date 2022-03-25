<template>
  <div class="profiles">
    <div class="profiles--search">
      <div class="input-icon">
        <input type="text" placeholder="Search..." />
        <SearchIcon class="icon" />
      </div>
    </div>
    <div class="profiles--list">
      <PerfectScrollbar>
        <ProfileCard
          v-for="(profile, index) in profiles"
          :key="`${index}-${profile.name}`"
        />
      </PerfectScrollbar>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

import { PerfectScrollbar } from "vue3-perfect-scrollbar";
import "vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css";

import { SearchIcon } from "@heroicons/vue/outline";
import ProfileCard from "~~/components/ProfileCard.vue";

export default {
  components: {
    SearchIcon,
    ProfileCard,
    PerfectScrollbar,
  },
  setup() {
    const profiles = ref();

    fetch(
      "https://gist.githubusercontent.com/allaud/093aa499998b7843bb10b44ea6ea02dc/raw/c400744999bf4b308f67807729a6635ced0c8644/users.json"
    )
      .then((response) => response.json())
      .then((data) => (profiles.value = data.slice(0, 10)));

    return {
      profiles,
    };
  },
};
</script>

<style lang="scss" scoped>
.profiles {
  width: 40rem;
  padding: 1rem;
  background-color: white;

  &--search {
    margin-bottom: 2rem;
  }

  &--list {
    .ps {
      height: 30rem;
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
}
</style>
