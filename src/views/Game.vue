<template>
  <div id="game">
    <!-- 타이틀 -->
    <span class="game-title md-title">인디언 포커</span>
    <!-- 현황 보드 -->
    <div class="stat-board">
      <!-- 플레이어 -->
      <div class="plr-screen A-screen">My Screen</div>
      <div class="game-box">
        <div class="plr-name A-name md-headline">Me</div>
        <div class="plr-dummy A-dummy">Dummy</div>
        <div class="plr-card A-card content-center">        
          {{ opened ? A.card[roundIdx] : 'card' }}
        </div>
      </div>
      <!-- 카드 오픈 -->
      <md-button class="game-btn md-raised" @click="opened ? nextGame() : cardOpen()">
        {{ opened ? 'next': 'open' }}
      </md-button>
      <!-- 상대 플레이어 -->
      <div class="game-box">
        <div class="plr-name B-name md-headline">Other</div>
        <div class="plr-card B-card content-center">
          {{ opened ? B.card[roundIdx] : 'card' }}
        </div>
        <div class="plr-dummy B-dummy">Dummy</div>
      </div>
      <div class="plr-screen B-screen">Other's Screen</div>
    </div>
    <!-- 컨트롤 보드 -->
    <div class="ctrl-board">
      <div class="A-chip">
        {{ A.chip }}
        <md-field v-if="turn === 'A' && !opened">
          <md-input v-model="chipInput" type="number" placeholder="batting" @keydown.enter="battingIn"></md-input>
        </md-field>
      </div>
      <div class="A-batting">
        {{ A.batting }}
      </div>
      <div class="B-batting">
        {{ B.batting }}
      </div>
      <div class="B-chip">
        {{ B.chip }}
        <md-field v-if="turn === 'B'">
          <md-input v-model="chipInput" type="number" placeholder="batting" @keydown.enter="battingIn"></md-input>
        </md-field>
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'Game',
  data: function () {
    return {
      roundIdx: 0,
      turn: 'A',
      chipInput: '',
      chipStack: 2,
      opened: false,
      A: {
        chip: 49,
        batting: 1,
        // card: [1, 2, 3, 5, 6],
        card: _.shuffle([...Array(14)].map((v,i) => i))
      },
      B: {
        chip: 49,
        batting: 1,
        // card: [1, 7, 4, 5, 9],
        card: _.shuffle([...Array(14)].map((v,i) => i))
      }
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
    battingIn: function () {
      let input = parseInt(this.chipInput)

      this[this.turn].chip -= input
      this[this.turn].batting += input
      this.chipStack += input

      this.chipInput = ''

      this.turn = this.turn === 'A' ? 'B' : 'A'
    },
    cardOpen: function () {
      let numA = this.A.card[this.roundIdx]
      let numB = this.B.card[this.roundIdx]

      if (numA !== numB) {
        if (numA > numB) this.A.chip += this.chipStack
        else this.B.chip += this.chipStack

        this.chipStack = 0
      }

      this.opened = true
      this.A.batting = 0
      this.B.batting = 0
    },
    nextGame: function () {
      this.roundIdx += 1
      this.opened = false

      for (const plr of [this.A, this.B]) {
        plr.chip -= 1
        plr.batting = 1
      }

      this.chipStack += 2
    },
  },
  mounted(){
    
  }
}
</script>

<style lang="scss" scoped>
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
  grid-template-columns: 4fr 5fr 1fr 5fr 4fr;

  // 플레이어 화면
  .plr-screen {
    margin: .5rem;
    background-color: lightgray;
    // backface-visibility: hidden;
  }

  // 플레이어 박스
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
      margin: .5rem 1.5rem;
    }

    .A-card {
      grid-column: 2/4;
    }

    .B-card {
      grid-column: 1/3;
    }
  }

  .game-btn {
    margin: auto;
  }
}

.ctrl-board {
  grid-template-columns: 2fr 3fr 3fr 2fr;
}
</style>