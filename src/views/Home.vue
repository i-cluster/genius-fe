<template>
  <div id="home">
    <div class="home-box">
      <div class="md-display-3">지니어스 온라인</div>
      <md-field>
        <label>Room Code</label>
        <md-input v-model="roomCode"></md-input>
        <span class="md-helper-text">Type your room code</span>
      </md-field>
      <md-field>
        <label>Your Code name</label>
        <md-input v-model="codeName"></md-input>
        <span class="md-helper-text">Set your code name</span>
      </md-field>
      <router-link to="/play">Play</router-link>
    </div>

  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  },
  data: function () {
    return {
      roomCode: '',
      codeName: ''
    }
  }
}
</script>

<style lang="scss" scoped>
#home {
  display: flex;
}

.home-box {
  margin: auto;
  display: grid;
  justify-items: center;

  .md-display-3 {
    margin-bottom: 3rem;
  }

  .md-field {
    width: 55%;
  }

  a {
    margin-top: 3rem;
    color: darkgoldenrod !important;
  }
}


</style>