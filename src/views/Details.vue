<template>
  <div>
    <div v-show="!isEdit" class="details">
      <h1>Detaljer</h1>
      <div>{{ user.name }}</div>
      <div>{{ user.mobil }}</div>
      <div>{{ user.epost }}</div>
      <router-link :to="`${user.id}/edit`" :key="user.id" class="edit-button">
        <span>EDIT</span>
      </router-link>
    </div>
    -

    <div v-show="isEdit" class="edit-details">
      <h1>EDIT MODE</h1>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: this.$root.staff,
      // editModeTwo: this.$roo
    }
  },
  computed: {
    isEdit() {
      return this.editMode
    },
    user() {
      return this.users.find(item => item.id == this.$route.params.id)
    },
  },
  props: {
    editMode: Boolean,
  },
}
</script>

<style scoped>
.details {
  width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.edit-button {
  display: flex;
  align-content: center;
  flex-direction: column;
  text-align: center;
  border-style: solid;
  border-width: 1px;
  border-radius: 40px;
  background-color: rgb(238, 235, 235);
  cursor: pointer;
}

.edit-button span {
  margin: 10px 10px 10px 10px;
}
</style>
