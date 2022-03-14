export let gears = [
    {
        gearId: 0,
        gearType: "mask",
        quality: "named",
        attributes: [
            { type: 9, isUnique: true, text: "Chill Out (Gila Guard)" },
            { type: 3, isUnique: false, text: "Броня" },
            { type: 4, isUnique: false, text: "Защита от факторов риска" },
            { type: 5, isUnique: false, text: "Защита от элитных врагов" },
            { type: 5, isUnique: false, text: "Защита от элитных врагов" },
        ],
    },
    {
        gearId: 1,
        gearType: "backpack",
        quality: "exotic",
        attributes: [
            { type: 9, isUnique: true, text: "Memento" },
            { type: 0, isUnique: false, text: "Урон от оружия" },
            { type: 3, isUnique: false, text: "Броня" },
            { type: 6, isUnique: false, text: "Уровень навыка" },
            { type: 2, isUnique: false, text: "Урон от выстрела в голову" },
        ],
    },
    {
        gearId: 2,
        gearType: "chest",
        quality: "named",
        attributes: [
            { type: 9, isUnique: true, text: "Ключевая фигура (Gila Guard)" },
            { type: 3, isUnique: false, text: "Броня" },
            { type: 4, isUnique: false, text: "Защита от факторов риска" },
            { type: 4, isUnique: false, text: "Восст. брони" },
            { type: 5, isUnique: false, text: "Защита от элитных врагов" },
            { type: 10, isUnique: true, text: "Идеальный авангард" },
        ],
    },
    {
        gearId: 3,
        gearType: "gloves",
        quality: "gearset",
        attributes: [
            { type: 9, isUnique: true, text: 'Протокол "Затмение"' },
            { type: 3, isUnique: false, text: "Броня" },
            { type: 4, isUnique: false, text: "Защита от факторов риска" },
        ],
    },
    {
        gearId: 4,
        gearType: "holster",
        quality: "named",
        attributes: [
            { type: 9, isUnique: true, text: "Когти веером (Wyvern Wear)" },
            { type: 0, isUnique: false, text: "Урон от оружия" },
            { type: 1, isUnique: true, text: "Урон в рукопашной" },
            { type: 1, isUnique: false, text: "Урон от выстрела в голову" },
            { type: 1, isUnique: true, text: "Урон пистолета" },
        ],
    },
    {
        gearId: 5,
        gearType: "kneepads",
        quality: "named",
        attributes: [
            {
                type: 9,
                isUnique: true,
                text: "Охрана императора (Murakami Industries)",
            },
            { type: 6, isUnique: false, text: "Уровень навыка" },
            { type: 4, isUnique: true, text: "Восст. брони" },
            { type: 4, isUnique: false, text: "Защита от факторов риска" },
        ],
    },
];

export let attrIcons = [
    "./images/icons/offense1.png",
    "./images/icons/offense2.png",
    "./images/icons/offense3.png",
    "./images/icons/defense1.png",
    "./images/icons/defense2.png",
    "./images/icons/defense3.png",
    "./images/icons/utility1.png",
    "./images/icons/utility2.png",
    "./images/icons/utility3.png",
    // "images/icons/btsu_logo.png",
];

export let gearTypeList = [
    "mask",
    "backpack",
    "chest",
    "gloves",
    "holster",
    "kneepads",
];

export let gearAttrList = [
    { type: "offensive", name: "Weapon Damage" },
    { type: "defensive", name: "Armor" },
    { type: "utility", name: "Skill Tier" },
    { type: "offensive", name: "Critical Hit Chance" },
    { type: "offensive", name: "Critical Hit Damage" },
    { type: "offensive", name: "Headshot Damage" },
    { type: "offensive", name: "Weapon Handling" },
    { type: "defensive", name: "Armor Regeneration" },
    { type: "defensive", name: "Explosive Resistance" },
    { type: "defensive", name: "Hazard Protection" },
    { type: "defensive", name: "Health" },
    { type: "utility", name: "Skill Damage" },
    { type: "utility", name: "Skill Haste" },
    { type: "utility", name: "Skill Repair" },
    { type: "utility", name: "Status Effects" },
];

export let gearModsList = [
    { type: "offensive", name: "Critical Hit Chance" },
    { type: "offensive", name: "Critical Hit Damage" },
    { type: "offensive", name: "Headshot Damage" },
    { type: "defensive", name: "Armor on Kill" },
    { type: "defensive", name: "Bleed Resistance" },
    { type: "defensive", name: "Blind/deaf Resistance" },
    { type: "defensive", name: "Burn Resistance" },
    { type: "defensive", name: "Disorient Resistance" },
    { type: "defensive", name: "Disrupt Resistance" },
    { type: "defensive", name: "Ensnare Resistance" },
    { type: "defensive", name: "Incoming repairs" },
    { type: "defensive", name: "Protection from Elites" },
    { type: "defensive", name: "Shock Resistance" },
    { type: "utility", name: "Skill Duration" },
    { type: "utility", name: "Skill Haste" },
    { type: "utility", name: "Skill Repair" },
];

export let uniqueGear = [
    { quality: "exotic", type: "mask", name: "Coyote’s Mask" },
    { quality: "exotic", type: "mask", name: "Vile" },

    { quality: "exotic", type: "backpack", name: "Acosta’s Go-Bag" },
    { quality: "exotic", type: "backpack", name: "Memento" },

    { quality: "exotic", type: "chest", name: "Ridgeway’s Pride" },
    { quality: "exotic", type: "chest", name: "Tardigrade Armor System" },

    { quality: "exotic", type: "gloves", name: "BTSU Datagloves" },

    {
        quality: "exotic",
        type: "holster",
        name: "Dodge City Gunslinger’s Holster",
    },
    { quality: "exotic", type: "holster", name: "Imperial Dynasty" },
    { quality: "exotic", type: "holster", name: "Waveform" },

    { quality: "exotic", type: "kneepads", name: "NinjaBike Messenger Kneepads" },
    { quality: "exotic", type: "kneepads", name: "Sawyer’s Kneepads" },

    { quality: "named", type: "mask", name: "Chill Out" },
    { quality: "named", type: "mask", name: "Punch Drunk" },
    { quality: "named", type: "mask", name: "Nightwatcher" },
    { quality: "named", type: "mask", name: "The Hollow Man" },

    { quality: "named", type: "backpack", name: "Percussive Maintenance" },
    { quality: "named", type: "backpack", name: "Liquid Engineer" },
    { quality: "named", type: "backpack", name: "Devil’s Due" },
    { quality: "named", type: "backpack", name: "Strategic Alignment" },
    { quality: "named", type: "backpack", name: "Battery Pack" },
    { quality: "named", type: "backpack", name: "Anarchist’s Cookbook" },
    { quality: "named", type: "backpack", name: "Force Multiplier" },
    { quality: "named", type: "backpack", name: "The Gift" },
    { quality: "named", type: "backpack", name: "Matador" },

    { quality: "named", type: "chest", name: "Pristine Example" },
    { quality: "named", type: "chest", name: "Zero F’s" },
    { quality: "named", type: "chest", name: "Everyday Carrier" },
    { quality: "named", type: "chest", name: "Caesar’s Guard" },
    { quality: "named", type: "chest", name: "Ferocious Calm" },
    { quality: "named", type: "chest", name: "Pointman" },
    { quality: "named", type: "chest", name: "Hunter-Killer" },
    { quality: "named", type: "chest", name: "Door-Kicker’s Knock" },
    { quality: "named", type: "chest", name: "Vedmedytsya Vest" },
    { quality: "named", type: "chest", name: "The Sacrifice" },
    { quality: "named", type: "chest", name: "Chainkiller" },

    { quality: "named", type: "gloves", name: "Deathgrips" },
    { quality: "named", type: "gloves", name: "Motherly Love" },
    { quality: "named", type: "gloves", name: "Contractor’s Gloves" },
    { quality: "named", type: "gloves", name: "Firm Handshake" },

    { quality: "named", type: "holster", name: "Ammo Dump" },
    { quality: "named", type: "holster", name: "Forge" },
    { quality: "named", type: "holster", name: "Claws Out" },

    { quality: "named", type: "kneepads", name: "Emperor’s Guard" },
    { quality: "named", type: "kneepads", name: "Fox’s Prayer" },
];

export let regularGear = [
    { quality: "gearset", name: "Hard Wired" },
    { quality: "gearset", name: "Ongoing Directive" },
    { quality: "gearset", name: "True Patriot" },
    { quality: "gearset", name: "Aces and Eights" },
    { quality: "gearset", name: "Negotiator’s Dilemma" },
    { quality: "gearset", name: "Tip of the Spear" },
    { quality: "gearset", name: "Foundry Bullwark" },
    { quality: "gearset", name: "Future Initiative" },
    { quality: "gearset", name: "Striker’s Battlegear" },
    { quality: "gearset", name: "System Corruption" },
    { quality: "gearset", name: "Eclipse Protocol" },
    { quality: "gearset", name: "Hunter’s Fury" },
    { quality: "gearset", name: "Rigger" },

    { quality: "brandset", name: "5.11 Tactical" },
    { quality: "brandset", name: "Airaldi Holdings" },
    { quality: "brandset", name: "Alps Summit Armaments" },
    { quality: "brandset", name: "Badger Tuff" },
    { quality: "brandset", name: "Belstone Armory" },
    { quality: "brandset", name: "Česká Výroba s.r.o." },
    { quality: "brandset", name: "China Light Industries Corporation" },
    { quality: "brandset", name: "Douglas & Harding" },
    { quality: "brandset", name: "Empress International" },
    { quality: "brandset", name: "Fenris Group AB" },
    { quality: "brandset", name: "Gila Guard" },
    { quality: "brandset", name: "Golan Gear Ltd" },
    { quality: "brandset", name: "Grupo Sombra S.A." },
    { quality: "brandset", name: "Hana-U Corporation" },
    { quality: "brandset", name: "Murakami Industries" },
    { quality: "brandset", name: "Overlord Armaments" },
    { quality: "brandset", name: "Petrov Defense Group" },
    { quality: "brandset", name: "Providence Defense" },
    { quality: "brandset", name: "Richter & Kaiser GmbH" },
    { quality: "brandset", name: "Sokolov Concern" },
    { quality: "brandset", name: "Walker, Harris & Co." },
    { quality: "brandset", name: "Wyvern Wear" },
    { quality: "brandset", name: "Yaahl Gear" },
];

export let gearStatTypeNew = [
    { type: "text", title: "Название", name: "Снаряжение" },
    { type: "text", title: "Название", name: "Талант" },
    { type: "offensive", title: "Наступательный", name: "Урон от оружия" },
    { type: "offensive", title: "Наступательный", name: "Характеристика" },
    { type: "offensive", title: "Наступательный", name: "Модификация" },
    { type: "defensive", title: "Оборанительный", name: "Броня" },
    { type: "defensive", title: "Оборанительный", name: "Характеристика" },
    { type: "defensive", title: "Оборанительный", name: "Модификация" },
    { type: "utility", title: "Вспомогательный", name: "Уровень навыка" },
    { type: "utility", title: "Вспомогательный", name: "Характеристика" },
    { type: "utility", title: "Вспомогательный", name: "Модификация" },
];

export let gearStatType = [
    {
        title: "Название",
        value: [
            { id: 9, name: "Название снаряжения" },
            { id: 10, name: "Название таланта" },
        ],
    },
    {
        title: "Наступательный",
        value: [
            { id: 0, name: "Урон от оружия" },
            { id: 1, name: "Характеристика" },
            { id: 2, name: "Модификация" },
        ],
    },
    {
        title: "Оборанительный",
        value: [
            { id: 3, name: "Броня" },
            { id: 4, name: "Характеристика" },
            { id: 5, name: "Модификация" },
        ],
    },
    {
        title: "Вспомогательный",
        value: [
            { id: 6, name: "Уровень навыка" },
            { id: 7, name: "Характеристика" },
            { id: 8, name: "Модификация" },
        ],
    },
];

export let gearQuality = ["exotic", "named", "gearset", "brandset"];

export let gearQualityRU = [
    "Экзотика",
    "Именной",
    "Набор снаряжения",
    "Брендовый",
];

export default {};

