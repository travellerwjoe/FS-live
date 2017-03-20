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

        //  转换成数组后按联赛中比赛最大已进行时间和联赛首字母降序排序
        liveArr.sort((cur, next) => {
            const curMaxStatus = Math.max.apply(null, cur.matches.map(item => {
                return item.events_graph.status
            }))
            const nextMaxStatus = Math.max.apply(null, next.matches.map(item => {
                return item.events_graph.status
            }))

            const curLeagueChar = cur.league.ls.charCodeAt()
            const nextLeagueChar = next.league.ls.charCodeAt()

            // 未开始的比赛按开始时间升序排序
            if (curMaxStatus === 0 && nextMaxStatus === 0) {
                const curMaxStartTime = Math.max.apply(null, cur.matches.map(item => {
                    return new Date(item.rtime).getTime()
                }))
                const nextMaxStartTime = Math.max.apply(null, next.matches.map(item => {
                    return new Date(item.rtime).getTime()
                }))
                // 开始时间相同则按联赛首字母降序排序
                return (curMaxStartTime - nextMaxStartTime) || (nextLeagueChar - curLeagueChar)
            }

            // 时间相同则按联赛首字母降序排序
            return (nextMaxStatus - curMaxStatus) || (nextLeagueChar - curLeagueChar)
        })

        return liveArr
    }
}