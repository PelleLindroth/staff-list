<template>
  <div class="staff-wrapper">
    <div class="list">
      <h1>Anställda</h1>
      <router-link :to="`/${user.id}`" v-for="user in users" :key="user.id">
        <img
          class="small-icon"
          src="../assets/user-icon.svg"
          alt="User Icon"
        />{{ user.name }}
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

<style lang="scss" scoped>
.staff-wrapper {
  text-align: center;
  display: flex;
  align-content: center;
  width: 80rem;
  height: 600px;
  background-color: #fff;

  .list {
    background-color: #f5f5f5;
    display: flex;
    flex-direction: column;
    font-size: 16px;
    padding: 5rem 0;
    width: 50%;

    a {
      align-items: center;
      display: flex;
      margin-top: 30px;
      text-decoration: none;
      color: black;
      justify-content: center;
      margin: 1rem 0;
      font-weight: bold;
      padding: 1rem 3rem;

      .small-icon {
        margin-right: 1rem;
      }
    }

    .router-link-active {
      background: #9e9e9e;
    }
  }
}
</style>
