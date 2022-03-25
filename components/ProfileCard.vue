<template>
  <div class="profile-card">
    <div class="profile-card--image">
      <img :src="imgSrc" />
    </div>
    <div class="profile-card--information">
      <div class="profile-card--heading">
        <h2 class="profile-card--name">
          <Highlighter :textToHighlight="name" :searchWords="[query]" />
        </h2>
        <div class="profile-card--email">
          <Highlighter :textToHighlight="email" :searchWords="[query]" />
        </div>
      </div>
      <h3 class="profile-card--role">
        <Highlighter :textToHighlight="role" :searchWords="[query]" />
      </h3>
      <p class="profile-card--location">
        <Highlighter :textToHighlight="location" :searchWords="[query]" />
      </p>
      <button class="profile-card--cta">Marks as suitable</button>
    </div>
  </div>
</template>

<script>
import Highlighter from "vue-highlight-words";

export default {
  components: {
    Highlighter,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    imgSrc: {
      type: String,
      required: true,
    },
    query: {
      type: String,
      required: false,
    },
  },
  setup() {},
};
</script>

<style lang="scss">
.profile-card {
  display: flex;
  height: 10rem;
  background-color: #f6f6f6;
  border-radius: 0.25rem;

  &--image {
    flex: 0 0 10rem;
    background-color: rgb(175, 175, 175);
    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  &--information {
    flex: 1 0 auto;
    padding: 1rem;
  }

  &--heading {
    display: flex;
    justify-content: space-between;
  }

  &--name {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  &--email {
  }

  &--role {
    font-weight: bold;
    margin-bottom: 1rem;
  }

  &--location {
    margin-bottom: 1rem;
  }

  &--cta {
    background: transparent;
    color: #22a57e;
    text-transform: uppercase;
    font-size: 1rem;
    border: none;
  }
}
</style>
