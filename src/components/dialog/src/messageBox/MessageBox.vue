<template>
  <div v-if="isShow">
      <div class="ui-message-box">
        <div class="ui-message">
          <div>
            <slot>我是多功能弹框</slot>
          </div>
          <div class="ui-dialog_ft" v-if="typeof opts !='boolean'">
            <a href="javascript:;" class="ui-btn_dialog" :class="{default:!item.color}" v-for="item in opts" @click.stop="toggle">{{item.txt}}</a>
          </div>
        </div>
      </div>
    <div class="ui-mask" v-if="isMask" @click="toggle"></div>
  </div>
</template>

<script type="text/babel">
  import Vue from 'vue';
  export default {
    name: 'xfd-message-box',
    props: {
      isShow: {
        type: [String, Boolean],
        default: true
      },
      isMask: {
        type: [String, Boolean],
        default: true
      },
      opts: {
        type: [Array, Boolean],
        default: false
      }
    },
    methods: {
      toggle(event) {
        this.$emit('closeCallback', event)
      }
    },
    mounted() {
      console.log(typeof this.opts)
    }
  }
</script>