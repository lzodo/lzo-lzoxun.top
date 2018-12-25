<template>
    <input type="checkbox" class="xfd-switch" :disabled="disabled" v-model="checked" :style="{color: color}" @change = 'ChildChange'/>
</template>

<script type="text/babel">

    export default {
        name: 'xfd-switch',
        data() {
            return {
                checked: this.value
            }
        },
        props: {
            value: Boolean,
            disabled: {
                type: Boolean,
                default: false
            },
            color: {
                // validator(value) {
                //     if(!value) return true;
                //     return isColor(value);
                // },
                default: '#4CD864'
            }
        },
        watch: {
            checked(val) {
                this.$emit('input', val);
            },
            value(val) {
                this.checked = val;
            }
        },
        methods:{
            ChildChange(){
                this.$emit('change', this.value);
            }
        }
    }
</script>

<style lang="less">
    // @import '../../../styles/components/switch.less';
</style>
