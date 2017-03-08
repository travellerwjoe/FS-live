export default {
    live: state => {
        if (!state.live.length) return state.live
        const liveObj = {}
        state.live.forEach((item, index) => {
            const leagueID = item.league && item.league.i
            if (!leagueID) return
            if (!liveObj[leagueID]) liveObj[leagueID] = { league: {}, matches: [] }
            liveObj[leagueID].league = item.league
            liveObj[leagueID].matches.push(item)
        })
        console.log(liveObj)
        return liveObj
    }
}