<template>
  <div id="app"></div>
</template>

<script>
import msg from './components/main'
export default {
  name: 'app',
  data () {
    return {
      visible:false,
      status:'start'
    }
  },
  components:{
    msg
  }
}
</script>

