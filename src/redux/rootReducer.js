import KidsCollectionSlice from './feature/KidCollection.feature'
import MensCollectionSlice from './feature/MenCollection.feature'
import WomensCollectionSlice from './feature/WomenCollection.feature'

const rootReducer= {
    KidsCollection:KidsCollectionSlice,
    MensCollection:MensCollectionSlice,
    WomensCollection:WomensCollectionSlice,

}

export default rootReducer;