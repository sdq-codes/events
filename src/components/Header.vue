<template>
  <header class="header">
    <div class="header__container">
      <router-link :to="{ name: 'events' }" class="header__logo">
        <img src="../assets/flutter-wave.png" alt="Company Name">
      </router-link>
      <input id="menu__toggle" type="checkbox" />
      <label class="menu__btn" for="menu__toggle">
        <span></span>
      </label>
      <nav class="header__nav">
        <div class="header__nav__list">
          <a href="" class="header__nav__link">I did't get my ticket</a>
          <a href="#" class="header__nav__button">CREATE YOUR OWN EVENT</a>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped></style>
