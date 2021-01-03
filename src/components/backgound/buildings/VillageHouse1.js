import VillageHouse1G from  "../../../media/green/VillageHouse1G.png"
import VillageHouse1W from  "../../../media/white/VillageHouse1W.png"
import VillageHouse1P from  "../../../media/pink/VillageHouse1P.png"
import VillageHouse1R from  "../../../media/red/VillageHouse1R.png"



const VillageHouse1 = props => {
    if (props.color.started > 111){
        return VillageHouse1R
    } else if (props.color.started > 11) {
        return VillageHouse1P
    } else if (props.color.started > 4){
        return VillageHouse1G
    } else {return VillageHouse1W }
}

export default VillageHouse1
