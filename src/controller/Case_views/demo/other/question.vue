<template>
    <div class="question">
        <scroll-doc :docHeight='pageHeight-96' :list='lists'></scroll-doc>
    </div>
</template>
<script>
import * as Pages from '../../../../data';

export default {
    name: 'question',
    data() {
        return {
            pageHeight: window.innerHeight,
            lists: [],
        }
    },
    watch: {
        '$route'(to, from) {
            this.reset();
        }
    },
    methods: {
        reset() {
            let pagename = this.$route.query.pagtag;
            if (pagename) {
                this.lists = Pages[pagename].Data;
                console.log(this.lists)
            } else {
                this.lists = Pages.page_test.Data;
            }
        }
    },
    mounted() {
        this.reset();
    }
}

</script>
<style lang='scss' scoped>
</style>
