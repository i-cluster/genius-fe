<template>
  <div id="game">
    <div class="game-title">인디언 포커</div>
    <div class="stat-board">
      <div class="A-screen">My Screen</div>
      <div class="game-box">
        <div class="A-name">Me</div>
        <div class="A-card">My card</div>
        <md-button class="md-primary">Primary</md-button>
      </div>
      <div class="game-box">
        <div class="B-name">Other</div>
        <div class="B-card">Other's card</div>
      </div>
      <div class="B-screen">Other's Screen</div>
    </div>
    <div class="ctrl-board">
      <div class="A-chip">My chip</div>
      <div class="A-batting">My batting</div>
      <div class="B-batting">Other's Batting</div>
      <div class="B-chip">Other's chip</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Game',
}
</script>

<style lang="scss">
#game {
  display: grid;
  grid-template-rows: 1fr 4fr 2fr;
  gap: 2rem;

  * {
    border: 0.5px solid lightgrey;
  }

  & > div {
    display: grid;
    gap: 1.5rem;
    border: none;
  }
}

.stat-board {
  // display: grid;
  grid-template-columns: 3fr 4fr 4fr 3fr;
  // gap: 1.5rem;
}

.ctrl-board {
  // display: grid;
  grid-template-columns: 2fr 3fr 3fr 2fr;
  // gap: 1.5rem;
}
</style>