<template>
  <div>
    <p :class="classesCount">{{ count }}</p>
    <button @click="sub">-</button>
    <button @click="add">+</button>
  </div>
</template>

<script>
  import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'

  export default {
    name: 'Counter',
    computed: {
      // count () {
      //   return this.$store.state.count
      // }
      // ...mapState([
      //   "count"
      // ]),
      ...mapState({
        count: state => state.counter.count
      }),
      // ...mapGetters([
      //   'isPositive',
      //   'isNegative'
      // ]),
      ...mapGetters({
        isPositive: 'counter/isPositive',
        isNegative: 'counter/isNegative',
      }),
      classesCount () {
        return {
          'blue': this.isPositive,
          'red': this.isNegative
        }
      }
    },
    methods: {
      // ...mapMutations([
      //   'increment',
      //   'decrement'
      // ]),
      ...mapMutations({
        increment: 'counter/increment',
        decrement: 'counter/decrement',
      }),
      // ...mapActions([
      //   'addAsync',
      //   'subAsync',
      // ]),
      ...mapActions({
        addAsync: 'counter/addAsync',
        subAsync: 'counter/subAsync',
      }),
      add () {
        // this.$store.commit('increment')
        this.increment()

        // this.$store.dispatch('addAsync', {
        //   amout: 1000
        // })
        this.addAsync({
          amount: 1000
        })
      },
      sub () {
        // this.$store.commit('decrement')
        this.decrement()

        // this.$store.dispatch('subAsync', {
        //   amout: 1000
        // })
        this.subAsync({
          amount: 1000
        })
      }
    }
  }
</script>

<style>
  .red {
    color: red;
  }

  .blue {
    color: blue;
  }
</style>
