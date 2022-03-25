<template>
  <div class="profile-card">
    <div class="profile-card--image">
      <img src="https://via.placeholder.com/1000x1500" />
    </div>
    <div class="profile-card--information">
      <div class="profile-card--heading">
        <h2 class="profile-card--name">Josie Waters</h2>
        <div class="profile-card--email">adriel@larson.io</div>
      </div>
      <h3 class="profile-card--role">Investor Integration Supervisor</h3>
      <p class="profile-card--location">22745 O'Kon Parks, Ernsermouth</p>
      <button class="profile-card--cta">Marks as suitable</button>
    </div>
  </div>
</template>

<style lang="scss">
.profile-card {
  display: flex;
  gap: 1rem;
  height: 10rem;

  &--image {
    flex: 0 0 10rem;

    img {
      object-fit: cover;
      width: 100%;
      height: 100%;
    }
  }

  &--information {
    flex: 1 0 auto;
  }

  &--heading {
    display: flex;
    justify-content: space-between;
  }

  &--name {
    font-size: 2rem;
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
      font-size: 1.2rem;
      border: none;
  }
}
</style>
