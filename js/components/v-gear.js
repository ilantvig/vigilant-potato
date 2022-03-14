import vGearItem from "./v-gear-item.js"
import {gears as gearsData} from "../db.js"

export default {
    name: 'v-gear',
    components: {
        vGearItem,
        gearsData
    },
    // принимает данные из родителя 
    props: {},
    data() {
        return {
            gears: gearsData,
        }
    },
    computed: {},
    methods: {
        showChildInfo(data) {
            console.log(data);
        }
    },
    // watch: {},
    // mounted() {},
    template: /*template*/ `
        <div class="v-gear">
            <v-gear-item 
                v-for="(gear, gearIndex) in gears"
                :key="gearIndex"
                :gear_data="gear"
                @sendGeerAttrIndex="showChildInfo"
            />
        </div>
    `
}