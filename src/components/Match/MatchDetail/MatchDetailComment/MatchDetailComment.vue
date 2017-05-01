<template>
    <div class="match-detail-view">
        <div class="match-detail-comment">
            <ul class="match-comment-list">
                <li v-for="item in matchComments">
                    <div class="match-comment-user-avatar">
                        <img :src="item.user.photo_url" alt="">
                    </div>
                    <div class="match-comment-user">
                        <div class="match-comment-user-name color-main">
                            {{item.user.username}}
                            <span class="match-comment-user-level">Lv{{item.user.level}}</span>
                            <span class="match-comment-user-ranking"></span>
                        </div>
                        <div class="match-comment-addtime color-grey">{{item.add_time*1000|formatDateTime('MM/dd hh:mm',true)}}({{item|getCommentStatus}})</div>
                        <div class="match-comment-content">{{item.comment}}</div>
                    </div>
                    <div class="match-comment-floor color-grey">{{item.floor}}楼</div>
                </li>
            </ul>
            <div class="match-comment-refresh match-comment-refresh-icon" @click="fetchComment(1)"></div>
        </div>
    </div>
</template>
<style lang="stylus">
    .match-detail-comment
        ul
            li
                padding:.5rem
                display:flex
                border-bottom:1px solid #eee
                text-align:left
                font-size:.6rem
                .match-comment-user-avatar
                    flex:1.3
                    overflow:hidden
                    img
                        width:2rem
                        height:2rem
                        border-radius:100%
                .match-comment-user
                    flex:8
                    .match-comment-user-name
                        font-size:.8rem
                    .match-comment-content
                        font-size:.8rem
                        padding:.15rem 0
                    .match-comment-user-level
                        display:inline-block
                        background-color:#a7b1d5
                        padding:0 .2rem
                        color:#fff
                        font-size:.6rem
                        border-radius:.25rem
                        font-family:'宋体'
                .match-comment-floor
                    flex:1.3
                    text-align:right
        .match-comment-refresh
            position:fixed
            bottom:1rem
            right:1rem
            width:4rem
            height:4rem
            transition:all .3s
            &:active
                transform:rotate(180deg)

</style>
<script>
    import { mapActions, mapGetters } from 'vuex'
    export default {
        data() {
            return {
                matchID: this.$route.query.match_id,
                page: 1
            }
        },
        methods: {
            ...mapActions([
                'fetchMatchComments'
            ]),
            fetchComment(page) {
                page = page || this.page
                this.fetchMatchComments({
                    matchID: this.matchID,
                    page: page
                })
            }
        },
        computed: {
            ...mapGetters([
                'matchComments'
            ])
        },
        filters: {
            getCommentStatus(item) {
                const statusSymbol = {
                    S: '下半场',
                    M: '中场',
                    F: '上半场'
                }
                const [symbol, status] = item.race_status.split('-')
                const [score, cornerScore] = item.race_score.split(',')
                return status === '全' ? '赛后' : `${statusSymbol[symbol]}${status}',比分${score},角球${cornerScore}`
            }  
        },
        mounted () {
            this.fetchComment()
        }
    }
</script>