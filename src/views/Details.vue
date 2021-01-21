<template>
  <div>
    <div v-show="!editMode" class="details">
      <h1>Detaljer</h1>
      <img class="large-icon" src="../assets/user-icon.svg" alt="User icon" />
      <header class="details-header">
        <div class="header-text">
          <h2>{{ user.name }}</h2>
          <p class="role">{{ user.role }}</p>
        </div>
      </header>

      <div class="contact-details">
        <p><span>Mobil</span>{{ user.mobil }}</p>

        <p><span>Epost</span> {{ user.epost }}</p>
      </div>
      <router-link class="button" :to="`${user.id}/edit`">EDIT</router-link>
    </div>

    <div v-show="editMode" class="edit-details">
      <h1>Detaljer</h1>
      <img class="large-icon" src="../assets/user-icon.svg" alt="User icon" />
      <header class="details-header">
        <div class="header-text">
          <input class="name" v-model="user.name" type="text" />
          <input class="role" v-model="user.role" type="text" />
        </div>
      </header>
      <div class="contact-details">
        <p><span>Mobil</span><input v-model="user.mobil" type="text" /></p>
        <p><span>Epost</span><input v-model="user.epost" type="text" /></p>
      </div>
      <router-link :to="`/${this.user.id}`" class="button">SAVE</router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$root.staff.find(item => item.id == this.$route.params.id)
    },
  },
  props: {
    editMode: Boolean,
  },
}
</script>

<style lang="scss" scoped>
.details,
.edit-details {
  width: 40rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 5rem;

  .large-icon {
    width: 10rem;
  }

  .details-header {
    display: flex;
    width: 15rem;
    justify-content: center;

    h2,
    .name {
      border: 1px solid #fff;
      color: #2c3e50;
      font-weight: 700;
      outline: none;
      font-size: 2.4rem;
      text-align: center;
      line-height: 2rem;
      margin-bottom: 0.5rem;
      max-width: 14rem;
    }

    .role {
      border: 1px solid #fff;
      color: #2c3e50;
      outline: none;
      font-size: 1.5rem;
      line-height: 2rem;
      text-align: center;
      font-weight: 700;
      max-width: 14rem;
    }
  }

  a {
    margin: 0;

    img {
      width: 1.8rem;
    }
  }

  .contact-details {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 5rem;
    min-height: 10rem;

    p {
      border: 1px solid #fff;
    }

    p,
    input {
      color: #2c3e50;
      outline: none;
      font-size: 1.5rem;
      max-width: 40rem;
      margin-bottom: 0.5rem;

      span {
        font-weight: bold;
        margin-right: 5rem;
      }
    }
  }

  .button {
    display: flex;
    align-content: center;
    flex-direction: column;
    text-align: center;
    margin-top: 2rem;
    border-style: solid;
    border-width: 1px;
    border-radius: 3px;
    background-color: #ececec;
    cursor: pointer;
  }
}
</style>
