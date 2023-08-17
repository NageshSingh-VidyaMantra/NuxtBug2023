<template>
  <div>
    <p>Some default layout shared across all pages</p>
    <nuxt-link to="/user/profile"> User Profile</nuxt-link>
    <nuxt-link to="/user/ranking"> User Ranking</nuxt-link>
    <slot />
  </div>
</template>