import {attrIcons as attrIconsData} from "../db.js"

export default {
    name: 'v-gear-item',
    // components: {},
    // принимает данные из родителя 
    props: {
        gear_data: {
            type: Object,
            default() { return {} }
        }
    },
    data() {
        return {
            attrIcons: attrIconsData,
        }
    },
    computed: {},
    methods: {
        getTextClass(isNotGearName, isUnique) {
            if (isNotGearName) {
                if (isUnique) { 
                    return 'named-text'
                }
            } else {
                return 'gear-title ' + this.gear_data.quality + '-text'
            }
            return ''
        },
        getBg(gearType) {
            return 'gear-card bg-' + gearType;
        },
        sendDataToParent(attrIndex) {
            // console.log(this.gear_data.gearId, attrIndex);
            this.$emit('sendGeerAttrIndex', 
            {
                gearIndex: this.gear_data.gearId, 
                attrIndex: attrIndex,
            });
        }
    },
    // watch: {},
    // mounted() {},
    styles: /* inlined css */[`.img { border: 1px solid yellow;}`],
    template: /*template*/ `
        <div :class="['v-gear-item', gear_data.quality]" title="Edit">
            <div :class="getBg(gear_data.gearType)">
                <div
                    v-for="(attr, attrIndex) in gear_data.attributes"
                    :key="gear_data.gearId + '_' + attrIndex"
                    :title="'Attr ['+ gear_data.gearId + ', ' + attrIndex + ']'"
                    :class="['stat', getTextClass(attrIndex, attr.isUnique)]"
                    @click="sendDataToParent(attrIndex)"
                >
                    <img 
                        v-if="attr.type < 9"
                        :src="attrIcons[attr.type]"
                        :alt="attrIcons[attr.type]"
                        class="stat-icon"
                    />
                    <span v-if="attr.type === 10" style="font-weight: bold;">Талант:</span>
                    {{attr.text}}
                </div>
            </div>
        </div>
    `
}