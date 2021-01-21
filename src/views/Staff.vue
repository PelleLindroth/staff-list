<template>
  <div class="staff-wrapper">
    <div class="list">
      <h1>Anställda</h1>
      <router-link :to="`/${user.id}`" v-for="user in users" :key="user.id">
        {{ user.name }}
      </router-link>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      users: this.$root.staff,
    }
  },
}
</script>

<style>
.staff-wrapper {
  text-align: center;
  display: flex;
  align-content: center;
  flex-direction: row;
  margin-top: 100px;
  max-width: 600px;
  height: 600px;
  margin: auto;
  background-color: rgb(238, 235, 235);
}

.list {
  background-color: darkgrey;
  display: flex;
  flex-direction: column;
  font-size: 16px;
  width: 50%;
}

a {
  margin-top: 30px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
</style>
