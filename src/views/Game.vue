<template>
  <div id="game">
    <!-- 타이틀 -->
    <span class="game-title md-title">인디언 포커</span>
    <!-- 현황 보드 -->
    <div class="stat-board">
      <!-- 플레이어 -->
      <div class="plr-screen A-screen">My Screen</div>
      <!-- <div class="plr-screen card-num">3</div> -->
      <div class="game-box">
        <div class="plr-name A-name md-headline">Me</div>
        <div class="plr-dummy A-dummy">Dummy</div>
        <div class="plr-card A-card"  @click="open('A')">        
          {{ A.opened? A.num : 'card' }}
        </div>
      </div>
      <!-- 상대 플레이어 -->
      <div class="game-box">
        <div class="plr-name B-name md-headline">Other</div>
        <div class="plr-card B-card" @click="open('B')">
          {{ B.opened? B.num : 'card' }}
        </div>
        <div class="plr-dummy B-dummy">Dummy</div>
      </div>
      <div class="plr-screen B-screen">Other's Screen</div>
    </div>
    <!-- 컨트롤 보드 -->
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
  data: function () {
    return {
      A: {num: 7, opened: false},
      B: {num: 11, opened: false}
    }
  },
  methods: {
    // flip: function () {
    //   this.$anime({
    //     targets: '.A-screen',
    //     rotateY: 180,
    //     duration: 3000,
    //     complete: function () {
    //     }
    //   })
    // },
    open: function (plr) {
      this.[plr].opened = !this.[plr].opened
    }
  },
  mounted(){
    
  }
}
</script>

<style lang="scss">
#game {
  display: grid;
  grid-template-rows: 2fr 5fr 3fr;
  gap: 2rem;

  & > div {
    display: grid;
    gap: 1.5rem;
    border: none;
  }
}

.game-title {
  margin: auto;
  font-size: 2rem !important;
}

.stat-board {
  grid-template-columns: 3fr 4fr 4fr 3fr;

  .plr-screen {
    margin: .5rem;
    background-color: lightgray;
    // backface-visibility: hidden;
  }

  .game-box {
    display: grid;
    grid-template-rows: 1fr 5fr;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;

    .plr-name {
      grid-column: span 3;
      margin: auto;
      text-align: center;
    }

    .plr-card {
      border: 1px solid gray;
      margin: .5rem 2rem;
    }

    .A-card {
      grid-column: 2/4;
    }

    .B-card {
      grid-column: 1/3;
    }
  }
}

.ctrl-board {
  grid-template-columns: 2fr 3fr 3fr 2fr;
}
</style>