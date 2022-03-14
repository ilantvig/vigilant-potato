import vWeapon from "./v-weapon.js"
import vGear from "./v-gear.js"
import vSkill from "./v-skill.js"

export default {
    name: 'v-main-wrapper',
    components: {
        vWeapon,
        vGear,
        vSkill,
    },
    // принимает данные из родителя 
    // props: {},
    data() {
        return {
            title: 'Main wrapper'
        }
    },
    // computed: {},
    // methods: {},
    // watch: {},
    // mounted() {},
    template: /*template*/ `
        <div class="v-main-wrapper">
            <h1>
                v-main-wrapper Text goes here
            </h1>
            <v-gear />
        </div>
    `
}