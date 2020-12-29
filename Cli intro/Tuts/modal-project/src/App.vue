<template>
  <h1>{{ title }}</h1>
  <div>
    <input type="text" ref="name">
    <button @click="handleClick">click me</button>
  </div>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sing up now</a>
        <a href="#">more info</a>
      </template>
      <h1>Hello</h1>
      <p>How are you doing?</p>
    </Modal>
  </teleport>

  <div v-if="showModalTwo">
    <Modal @close="toggleModalTwo">
      <h1>I am happy</h1>
      <p>Thank you</p>
    </Modal>
  </div>

  <p>Welcome...</p>
  <button @click="toggleModal">open modal</button>
  <button @click="toggleModalTwo">open modal2</button>
</template>

<script>
import Modal from './components/Modal.vue'

export default {
  name: 'App',
  components: { Modal },
  data() {
    return {
      title: 'My New Vue App :)',
      header: 'Sign up for the Giveaway',
      text: 'Check your course',
      showModal: false,
      showModalTwo: false
    }
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
    },
    toggleModal(){
      this.showModal = !this.showModal
    },
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo
    }
  }
}
</script>

<style>
#app, .modals{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
