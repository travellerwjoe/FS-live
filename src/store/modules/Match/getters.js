export default {
    live: state => {
        if (!state.live.length) {
            return state.live
        }
        const liveObj = {}
        const liveArr = []
        //  相同联赛的组合在一起
        state.live.forEach((item, index) => {
                const leagueID = item.league && item.league.i
                if (!leagueID) {
                    return
                }
                if (!liveObj[leagueID]) { 
                    liveObj[leagueID] = {
                        league: {},
                        matches: []
                    }
                }
                liveObj[leagueID].league = item.league
                liveObj[leagueID].matches.push(item)
            })

        for (let key in liveObj) {
            liveArr.push(liveObj[key])
        }

        //  转换成数组后按比赛已进行时间降序排序
        liveArr.sort((cur, next) => {
            var curMaxStatus = Math.max.apply(null, cur.matches.map(item => {
                    return item.events_graph.status
                }))
            var nextMaxStatus = Math.max.apply(null, next.matches.map(item => {
                    return item.events_graph.status
                }))
            return nextMaxStatus - curMaxStatus
        })

        return liveArr
    }
}