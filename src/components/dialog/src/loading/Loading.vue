<template>
    <transition name='fade'>
        <div class="ui-loading-block">
            <div class="ui-loading-cnt">
                <i class="ui-loading-bright"></i>
                <p>{{message}}</p>
            </div>
        </div>
    </transition>
    
</template>

<script type="text/babel">
    export default {
        props: {
            message: String
        }
    }
</script>


<style  lang='less' scoped>
.fade-enter-active, .fade-leave-active {
  transition: transform .5s
}
.fade-enter, .fade-leave-active {
  transform:translate(-50%,-50%) scale(0);
}
.ui-loading-bright{
    background-image: url(/static/images/loading_sprite_white.png);
}
.ui-loading-cnt{
    p{
       display: block;
       width: 100%;
    }
}
</style>