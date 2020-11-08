<template>
  <div class="about">
    <h1>Chatapp</h1>
    <div>
      <input type=“text” placeholder="Nachricht..." @keyup.enter="sendMessage" v-model="text"><button @click="sendMessage">Senden</button>
      <ul style="list-style: none;">
      <li v-for="message in messages" :key="message.id">
        {{ message.text }}
      </li>
    </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
  },
  data: () => ({
    counter: 0,
    isBlack: false,
    text:'',
    messages: [
      { 
        text: '', 
        id: Date.now
      }
    ]
  }),
  methods: {
    count() {
      this.counter++;
    },
    reset() {
      this.counter = 0;
    },
    setBlack() {
      this.isBlack = this.isBlack === false ? true : false;
    },
    sendMessage() {
      const text = this.text
      this.messages.push({text, id: Date.now()})
      this.text = ''
    }
  }
};
</script>

<style>
  .myclass {
    background-color: #313131;
  }
  .margin5{
    margin: 5px;
  }
</style>
