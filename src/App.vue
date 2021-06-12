<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/play">Play</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss">
body {
  margin: initial;
  font-size: 1rem !important;
}

.content-center {
  display: flex;
  justify-content: center;
  align-items: center;
}

#app {
  font-family: Avenir, Helvetica, Arㅁial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  height: 100vh;
  display: flex;
  flex-direction: column;

  & > :nth-child(2) {
    flex: 1;
  }
}

#nav {
  height: 5%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-content: center;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>