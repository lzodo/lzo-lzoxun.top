<template>
  <div>
    <div class="ui-dialog-confirm">
      <div class="ui-dialog">
        <div class="ui-dialog_hd" v-html="title"></div>
        <div ref="tpl" class="ui-dialog_bd" v-html="mes">
        </div>
        <div class="ui-dialog_ft">
          <a href="javascript:;" class="ui-btn_dialog" 
          :class="{default:!item.color}" 
          v-for="item in opts"
          @click.stop="closeConfirm(item.callback)"
          >{{item.txt}}</a>
        </div>
      </div>
    </div>
    <div class="ui-mask"></div>
  </div>
</template>

<script type="text/babel">
  import Vue from 'vue';
  export default {
    name: 'xfd-dialog',
    props: {
      title: [String,Boolean],
      mes: String,
      opts: {
        type: [Array, Function],
        default: () => {}
      }
    },
    data() {
      return {
        // mes_c: this.msg,
        // title_c:this.title,
        // opts_c:this.opts
      }
    },
    mounted(){
      
    }
  }
</script>