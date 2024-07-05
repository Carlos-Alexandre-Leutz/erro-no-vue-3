<template>
  <div>
    <h1>User Table</h1>
    <form @submit.prevent="addUser">
      <input v-model="newUser.name" placeholder="Nome" required />
      <input v-model="newUser.email" type="email" placeholder="Email" required />
      <input v-model="newUser.url" type="text" placeholder="Image"/>
      <button type="submit">Adicionar Usuário</button>
    </form>
    <input v-model="search" placeholder="Pesquisar" />
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>img</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(user, index) in filteredUsers" :key="index">
          <td>
            <span v-if="!user.editing">{{ user.name }}</span>
            <input v-else v-model="user.name" />
          </td>
          <td>
            <span v-if="!user.editing">{{ user.email }}</span>
            <input v-else v-model="user.email" />
          </td>
          <td>
            <v-comp-2 :url="user.url"></v-comp-2>
          </td>
          <td>
            <button @click="editUser(user)">Editar</button>
            <button @click="deleteUser(index)">Deletar</button>
            <button v-if="user.editing" @click="saveUser(user)">Salvar</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Comp2 from "@/comp-2/launcherComponent.vue";
export default {
  components: {
  "v-comp-2": Comp2,
  },
  data() {
    return {
      newUser: {
        name: '',
        email: '',
        url: '',
      },
      users: [],
      search: ''
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter(user =>
        user.name.toLowerCase().includes(this.search.toLowerCase()) ||
        user.email.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  methods: {
    addUser() {
      if (this.newUser.name && this.newUser.email) {
        this.users.push({ ...this.newUser, editing: false });
        this.newUser.name = '';
        this.newUser.email = '';
        this.newUser.url = '';
      }
    },
    deleteUser(index) {
      this.users.splice(index, 1);
    },
    editUser(user) {
      user.editing = true;
    },
    saveUser(user) {
      user.editing = false;
    }
  }
};
</script>

<style scoped>
h1 {
  text-align: center;
}

form {
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  gap: 10px;
}

input[type="text"], input[type="email"] {
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  padding: 5px 10px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

th, td {
  padding: 10px;
  border: 1px solid #ccc;
  text-align: left;
}

thead {
  background-color: #f2f2f2;
}
</style>
