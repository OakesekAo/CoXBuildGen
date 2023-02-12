
class Superhero {
    constructor(archetype, primaryPower, secondaryPower, epicPower) {
      this.archetype = archetype;
      this.primaryPower = primaryPower;
      this.secondaryPower = secondaryPower;
      this.epicPower = epicPower;
    }
  }
  
  const Archetype = {
    ARACHNOS_SOLDIER: "Arachnos Soldier",
    ARACHNOS_WIDOW: "Arachnos Widow",
    BLASTER: "Blaster",
    BRUTE: "Brute",
    CONTROLLER: "Controller",
    CORRUPTOR: "Corruptor",
    DEFENDER: "Defender",
    DOMINATOR: "Dominator",
    MASTERMIND: "Mastermind",
    PEACEBRINGER: "Peacebringer",
    SCRAPPER: "Scrapper",
    SENTINEL: "Sentinel",
    STALKER: "Stalker",
    TANKER: "Tanker",
    WARSHADE: "Warshade"
    };
  
  //Soldier Powers
    const ArachnosSoldierPrimaryPower = {
    ARACHNOS_SOLDIER2: "Arachnos Soldier",
    BANE_SPIDER_SOLDIER: "Bane Spider Soldier",
    CRAB_SPIDER_SOLDIER: "Crab Spider Soldier"
    };  
    const ArachnosSoldierSecondaryPower = {
    TRAINING: "Training",
    TRAINING2: "Training"
    };  
    const ArachnosSoldierEpicPower = {
    NONE: "None",
    NONE2: "None"
    };
  
  //Widow Powers
    const ArachnosWidowPrimaryPower = {
    FORTUNATA_TRAINING: "Fortunata Training",
    NIGHT_WIDOW_TRAINING: "Night Widow Training",
    WIDOW_TRAINING: "Widow Training"
    };  
    const ArachnosWidowSecondaryPower = {
    TRAINING: "Teamwork",
    TRAINING2: "Teamwork"
    };  
    const ArachnosWidowEpicPower = {
    NONE: "None",
    NONE2: "None"
    };

  //Blaster Powers
    const BlasterPrimaryPowers = {
    ARCHERY: "Archery",
    ASSAULT_RIFLE: "Assault Rifle",
    BEAM_RIFLE: "Beam Rifle",
    DARK_BLAST: "Dark Blast",
    DUAL_PISTOLS: "Dual Pistols",
    ELECTRICAL_BLAST: "Electrical Blast",
    ENERGY_BLAST: "Energy Blast",
    FIRE_BLAST: "Fire Blast",
    ICE_BLAST: "Ice Blast",
    PSYCHIC_BLAST: "Psychic Blast",
    RADIATION_BLAST: "Radiation Blast",
    SEISMIC_BLAST: "Seismic Blast",
    SONIC_BLAST: "Sonic Blast",
    WATER_BLAST: "Water Blast",
    };
    const BlasterSecondaryPowers = {
    ATOMIC_MANIPULATION: "Atomic Manipulation",
    DARKNESS_MANIPULATION: "Darkness Manipulation",
    DEVICES: "Devices",
    EARTH_MANIPULATION: "Earth Manipulation",
    ELECTRICITY_MANIPULATION: "Electricity Manipulation",
    ENERGY_MANIPULATION: "Energy Manipulation",
    FIRE_MANIPULATION: "Fire Manipulation",
    ICE_MANIPULATION: "Ice Manipulation",
    MARTIAL_COMBAT: "Martial Combat",
    MENTAL_MANIPULATION: "Mental Manipulation",
    NINJA_TRAINING: "Ninja Training",
    PLANT_MANIPULATION: "Plant Manipulation",
    SONIC_MANIPULATION: "Sonic Manipulation",
    TACTICAL_ARROW: "Tactical Arrow",
    TEMPORAL_MANIPULATION: "Temporal Manipulation",
    };
    const BlasterEpicPowers = {
    COLD_MASTERY: "Cold Mastery",
    ELECTRICAL_MASTERY: "Electrical Mastery",
    FLAME_MASTERY: "Flame Mastery",
    FORCE_MASTERY: "Force Mastery",
    LEVIATHAN_MASTERY: "Leviathan Mastery",
    MACE_MASTERY: "Mace Mastery",
    MU_MASTERY: "Mu Mastery",
    MUNITIONS_MASTERY: "Munitions Mastery",
    SOUL_MASTERY: "Soul Mastery",
    };
    
  //Brute Powers
    const BrutePrimaryPowers = {
    BATTLE_AXE: "Battle Axe",
    BROAD_SWORD: "Broad Sword",
    CLAWS: "Claws",
    DARK_MELEE: "Dark Melee",
    DUAL_BLADES: "Dual Blades",
    ELECTRICAL_MELEE: "Electrical Melee",
    ENERGY_MELEE: "Energy Melee",
    FIERY_MELEE: "Fiery Melee",
    KATANA: "Katana",
    KINETIC_MELEE: "Kinetic Melee",
    MARTIAL_ARTS: "Martial Arts",
    PSIONIC_MELEE: "Psionic Melee",
    RADIATION_MELEE: "Radiation Melee",
    SAVAGE_MELEE: "Savage Melee",
    SPINES: "Spines",
    STAFF_FIGHTING: "Staff Fighting",
    STONE_MELEE: "Stone Melee",
    STREET_JUSTICE: "Street Justice",
    SUPER_STRENGTH: "Super Strength",
    TITAN_WEAPONS: "Titan Weapons",
    WAR_MACE: "War Mace",
    };
    const BruteSecondaryPowers = {
    BIO_ARMOR: "Bio Armor",
    DARK_ARMOR: "Dark Armor",
    ELECTRIC_ARMOR: "Electric Armor",
    ENERGY_AURA: "Energy Aura",
    FIERY_AURA: "Fiery Aura",
    ICE_ARMOR: "Ice Armor",
    INVULNERABILITY: "Invulnerability",
    RADIATION_ARMOR: "Radiation Armor",
    REGENERATION: "Regeneration",
    SHIELD_DEFENSE: "Shield Defense",
    STONE_ARMOR: "Stone Armor",
    SUPER_REFLEXES: "Super Reflexes",
    WILLPOWER: "Willpower",
    };
    const BruteEpicPowers = {
    ARCTIC_MASTERY: "Arctic Mastery",
    EARTH_MASTERY: "Earth Mastery",
    ENERGY_MASTERY: "Energy Mastery",
    LEVIATHAN_MASTERY: "Leviathan Mastery",
    MACE_MASTERY: "Mace Mastery",
    MU_MASTERY: "Mu Mastery",
    PYRE_MASTERY: "Pyre Mastery",
    SOUL_MASTERY: "Soul Mastery"
    };

  //Controller Powers
    const ControllerPrimaryPowers = {
    DARKNESS_CONTROL: "Darkness Control",
    EARTH_CONTROL: "Earth Control",
    ELECTRIC_CONTROL: "Electric Control",
    FIRE_CONTROL: "Fire Control",
    GRAVITY_CONTROL: "Gravity Control",
    ICE_CONTROL: "Ice Control",
    ILLUSION_CONTROL: "Illusion Control",
    MIND_CONTROL: "Mind Control",
    PLANT_CONTROL: "Plant Control",
    SYMPHONY_CONTROL: "Symphony Control"
    };  
    const ControllerSecondaryPowers = {
    COLD_DOMINATION: "Cold Domination",
    DARKNESS_AFFINITY: "Darkness Affinity",
    ELECTRICAL_AFFINITY: "Electrical Affinity",
    EMPATHY: "Empathy",
    FORCE_FIELD: "Force Field",
    KINETICS: "Kinetics",
    NATURE_AFFINITY: "Nature Affinity",
    PAIN_DOMINATION: "Pain Domination",
    POISON: "Poison",
    RADIATION_EMISSION: "Radiation Emission",
    SONIC_RESONANCE: "Sonic Resonance",
    STORM_SUMMONING: "Storm Summoning",
    THERMAL_RADIATION: "Thermal Radiation",
    TIME_MANIPULATION: "Time Manipulation",
    TRAPS: "Traps",
    TRICK_ARROW: "Trick Arrow",
    };  
    const ControllerEpicPowers = {
    FIRE_MASTERY: "Fire Mastery",
    ICE_MASTERY: "Ice Mastery",
    LEVIATHAN_MASTERY: "Leviathan Mastery",
    MACE_MASTERY: "Mace Mastery",
    MU_MASTERY: "Mu Mastery",
    PRIMAL_FORCES_MASTERY: "Primal Forces Mastery",
    PSIONIC_MASTERY: "Psionic Mastery",
    SOUL_MASTERY: "Soul Mastery",
    STONE_MASTERY: "Stone Mastery",
    };

    //Corr Powers
    const CorruptorPrimaryPowers = {
    ARCHERY: "Archery",
    ASSAULT_RIFLE: "Assault Rifle",
    BEAM_RIFLE: "Beam Rifle",
    DARK_BLAST: "Dark Blast",
    DUAL_PISTOLS: "Dual Pistols",
    ELECTRICAL_BLAST: "Electrical Blast",
    ENERGY_BLAST: "Energy Blast",
    FIRE_BLAST: "Fire Blast",
    ICE_BLAST: "Ice Blast",
    PSYCHIC_BLAST: "Psychic Blast",
    RADIATION_BLAST: "Radiation Blast",
    SEISMIC_BLAST: "Seismic Blast",
    SONIC_BLAST: "Sonic Blast",
    WATER_BLAST: "Water Blast",
    };    
    const CorruptorSecondaryPowers = {
    COLD_DOMINATION: "Cold Domination",
    DARK_MIASMA: "Dark Miasma",
    ELECTRICAL_AFFINITY: "Electrical Affinity",
    EMPATHY: "Empathy",
    FORCE_FIELD: "Force Field",
    KINETICS: "Kinetics",
    NATURE_AFFINITY: "Nature Affinity",
    PAIN_DOMINATION: "Pain Domination",
    POISON: "Poison",
    RADIATION_EMISSION: "Radiation Emission",
    SONIC_RESONANCE: "Sonic Resonance",
    STORM_SUMMONING: "Storm Summoning",
    THERMAL_RADIATION: "Thermal Radiation",
    TIME_MANIPULATION: "Time Manipulation",
    TRAPS: "Traps",
    TRICK_ARROW: "Trick Arrow",
    };    
    const CorruptorEpicPowers = {
    DARK_MASTERY: "Dark Mastery",
    ELECTRICITY_MASTERY: "Electricity Mastery",
    FLAME_MASTERY: "Flame Mastery",
    LEVIATHAN_MASTERY: "Leviathan Mastery",
    MACE_MASTERY: "Mace Mastery",
    MU_MASTERY: "Mu Mastery",
    POWER_MASTERY: "Power Mastery",
    PSYCHIC_MASTERY: "Psychic Mastery",
    SOUL_MASTERY: "Soul Mastery"
    };

    //Defender Powers
    const DefenderPrimaryPowers = {
    COLD_DOMINATION: "Cold Domination",
    DARK_MIASMA: "Dark Miasma",
    ELECTRICAL_AFFINITY: "Electrical Affinity",
    EMPATHY: "Empathy",
    FORCE_FIELD: "Force Field",
    KINETICS: "Kinetics",
    NATURE_AFFINITY: "Nature Affinity",
    PAIN_DOMINATION: "Pain Domination",
    POISON: "Poison",
    RADIATION_EMISSION: "Radiation Emission",
    SONIC_RESONANCE: "Sonic Resonance",
    STORM_SUMMONING: "Storm Summoning",
    THERMAL_RADIATION: "Thermal Radiation",
    TIME_MANIPULATION: "Time Manipulation",
    TRAPS: "Traps",
    TRICK_ARROW: "Trick Arrow",
    };
    const DefenderSecondaryPowers = {
    ARCHERY: "Archery",
    ASSAULT_RIFLE: "Assault Rifle",
    BEAM_RIFLE: "Beam Rifle",
    DARK_BLAST: "Dark Blast",
    DUAL_PISTOLS: "Dual Pistols",
    ELECTRICAL_BLAST: "Electrical Blast",
    ENERGY_BLAST: "Energy Blast",
    FIRE_BLAST: "Fire Blast",
    ICE_BLAST: "Ice Blast",
    PSYCHIC_BLAST: "Psychic Blast",
    RADIATION_BLAST: "Radiation Blast",
    SEISMIC_BLAST: "Seismic Blast",
    SONIC_BLAST: "Sonic Blast",
    WATER_BLAST: "Water Blast",
    };
    const DefenderEpicPowers = {
    DARK_MASTERY: "Dark Mastery",
    ELECTRICITY_MASTERY: "Electricity Mastery",
    FLAME_MASTERY: "Flame Mastery",
    LEVIATHAN_MASTERY: "Leviathan Mastery",
    MACE_MASTERY: "Mace Mastery",
    MU_MASTERY: "Mu Mastery",
    POWER_MASTERY: "Power Mastery",
    PSYCHIC_MASTERY: "Psychic Mastery",
    SOUL_MASTERY: "Soul Mastery",
    };

    //Dominator Powers
    const DominatorPrimaryPowers = {
    DARKNESS_CONTROL: "Darkness Control",
    EARTH_CONTROL: "Earth Control",
    ELECTRIC_CONTROL: "Electric Control",
    FIRE_CONTROL: "Fire Control",
    GRAVITY_CONTROL: "Gravity Control",
    ICE_CONTROL: "Ice Control",
    ILLUSION_CONTROL: "Illusion Control",
    MIND_CONTROL: "Mind Control",
    PLANT_CONTROL: "Plant Control",
    SYMPHONY_CONTROL: "Symphony Control"
    };      
    const DominatorSecondaryPowers = {
    DARK_ASSAULT: "Dark Assault",
    EARTH_ASSAULT: "Earth Assault",
    ELECTRICITY_ASSAULT: "Electricity Assault",
    ENERGY_ASSAULT: "Energy Assault",
    FIERY_ASSAULT: "Fiery Assault",
    ICY_ASSAULT: "Icy Assault",
    MARTIAL_ASSAULT: "Martial Assault",
    PSIONIC_ASSAULT: "Psionic Assault",
    RADIOACTIVE_ASSAULT: "Radioactive Assault",
    SAVAGE_ASSAULT: "Savage Assault",
    SONIC_ASSAULT: "Sonic Assault",
    THORNY_ASSAULT: "Thorny Assault"
    };      
    const DominatorEpicPowers = {
    FIRE_MASTERY: "Fire Mastery",
    ICE_MASTERY: "Ice Mastery",
    LEVIATHAN_MASTERY: "Leviathan Mastery",
    MACE_MASTERY: "Mace Mastery",
    MU_MASTERY: "Mu Mastery",
    PRIMAL_FORCES_MASTERY: "Primal Forces Mastery",
    PSIONIC_MASTERY: "Psionic Mastery",
    SOUL_MASTERY: "Soul Mastery"
    };

      //Mastermind Powers
    const MastermindPrimaryPowers = {
    BEAST_MASTERY: "Beast Mastery",
    DEMON_SUMMONING: "Demon Summoning",
    MERCENARIES: "Mercenaries",
    NECROMANCY: "Necromancy",
    NINJAS: "Ninjas",
    ROBOTICS: "Robotics",
    THUGS: "Thugs"
    };        
    const MastermindSecondaryPowers = {
    DARK_ASSAULT: "Dark Assault",
    COLD_DOMINATION: "Cold Domination",
    DARK_MIASMA: "Dark Miasma",
    ELECTRICAL_AFFINITY: "Electrical Affinity",
    EMPATHY: "Empathy",
    FORCE_FIELD: "Force Field",
    KINETICS: "Kinetics",
    NATURE_AFFINITY: "Nature Affinity",
    PAIN_DOMINATION: "Pain Domination",
    POISON: "Poison",
    RADIATION_EMISSION: "Radiation Emission",
    SONIC_RESONANCE: "Sonic Resonance",
    STORM_SUMMONING: "Storm Summoning",
    THERMAL_RADIATION: "Thermal Radiation",
    TIME_MANIPULATION: "Time Manipulation",
    TRAPS: "Traps",
    TRICK_ARROW: "Trick Arrow"
    };        
    const MastermindEpicPowers = {
    CHARGE_MASTERY: "Charge Mastery",
    CHILL_MASTERY: "Chill Mastery",
    FIELD_MASTERY: "Field Mastery",
    HEAT_MASTERY: "Heat Mastery",
    LEVIATHAN_MASTERY: "Leviathan Mastery",
    MACE_MASTERY: "Mace Mastery",
    MU_MASTERY: "Mu Mastery",
    SOUL_MASTERY: "Soul Mastery"
    };

    //Peacebringer Powers
    const PeacebringerPrimaryPower = {
    LUMINOUS_BLAST: "Luminous Blast",
    LUMINOUS_BLAST2: "Luminous Blast",
    };  
    const PeacebringerSecondaryPower = {
    LUMINOUS_AURA: "Luminous Aura",
    LUMINOUS_AURA2: "Luminous Aura"
    };  
    const PeacebringerEpicPower = {
    NONE: "None",
    NONE2: "None"
    };
    
    //Scrapper Powers
    const ScrapperPrimaryPowers = {
    BATTLE_AXE: "Battle Axe",
    BROAD_SWORD: "Broad Sword",
    CLAWS: "Claws",
    DARK_MELEE: "Dark Melee",
    DUAL_BLADES: "Dual Blades",
    ELECTRICAL_MELEE: "Electrical Melee",
    ENERGY_MELEE: "Energy Melee",
    FIERY_MELEE: "Fiery Melee",
    ICE_MELEE: "Ice Melee",
    KATANA: "Katana",
    KINETIC_MELEE: "Kinetic Melee",
    MARTIAL_ARTS: "Martial Arts",
    PSIONIC_MELEE: "Psionic Melee",
    RADIATION_MELEE: "Radiation Melee",
    SAVAGE_MELEE: "Savage Melee",
    SPINES: "Spines",
    STAFF_FIGHTING: "Staff Fighting",
    STONE_MELEE: "Stone Melee",
    STREET_JUSTICE: "Street Justice",
    TITAN_WEAPONS: "Titan Weapons",
    WAR_MACE: "War Mace",
    };        
    const ScrapperSecondaryPowers = {
    BIO_ARMOR: "Bio Armor",
    DARK_ARMOR: "Dark Armor",
    ELECTRIC_ARMOR: "Electric Armor",
    ENERGY_AURA: "Energy Aura",
    FIERY_AURA: "Fiery Aura",
    INVULNERABILITY: "Invulnerability",
    NINJITSU: "Ninjitsu",
    RADIATION_ARMOR: "Radiation Armor",
    REGENERATION: "Regeneration",
    SHIELD_DEFENSE: "Shield Defense",
    STONE_ARMOR: "Stone Armor",
    SUPER_REFLEXES: "Super Reflexes",
    WILLPOWER: "Willpower",
    };        
    const ScrapperEpicPowers = {
    BLAZE_MASTERY: "Blaze Mastery",
    BODY_MASTERY: "Body Mastery",
    DARKNESS_MASTERY: "Darkness Mastery",
    LEVIATHAN_MASTERY: "Leviathan Mastery",
    MACE_MASTERY: "Mace Mastery",
    MU_MASTERY: "Mu Mastery",
    SOUL_MASTERY: "Soul Mastery",
    WEAPON_MASTERY: "Weapon Mastery",
    };

    //Sentinel Powers
    const SentinelPrimaryPowers = {
    ARCHERY: "Archery",
    ASSAULT_RIFLE: "Assault Rifle",
    BEAM_RIFLE: "Beam Rifle",
    DARK_BLAST: "Dark Blast",
    DUAL_PISTOLS: "Dual Pistols",
    ELECTRICAL_BLAST: "Electrical Blast",
    ENERGY_BLAST: "Energy Blast",
    FIRE_BLAST: "Fire Blast",
    ICE_BLAST: "Ice Blast",
    PSYCHIC_BLAST: "Psychic Blast",
    RADIATION_BLAST: "Radiation Blast",
    SEISMIC_BLAST: "Seismic Blast",
    SONIC_BLAST: "Sonic Blast",
    WATER_BLAST: "Water Blast"
    };        
    const SentinelSecondaryPowers = {
    BIO_ARMOR: "Bio Armor",
    DARK_ARMOR: "Dark Armor",
    ELECTRIC_ARMOR: "Electric Armor",
    ENERGY_AURA: "Energy Aura",
    FIERY_AURA: "Fiery Aura",
    ICE_ARMOR: "Ice Armor",
    INVULNERABILITY: "Invulnerability",
    NINJITSU: "Ninjitsu",
    RADIATION_ARMOR: "Radiation Armor",
    REGENERATION: "Regeneration",
    SUPER_REFLEXES: "Super Reflexes",
    STONE_ARMOR: "Stone Armor",
    WILLPOWER: "Willpower"
    };        
    const SentinelEpicPowers = {
    DARK_MASTERY: "Dark Mastery",
    ELECTRICITY_MASTERY: "Electricity Mastery",
    FIRE_MASTERY: "Fire Mastery",
    ICE_MASTERY: "Ice Mastery",
    LEVIATHAN_MASTERY: "Leviathan Mastery",
    MACE_MASTERY: "Mace Mastery",
    MU_MASTERY: "Mu Mastery",
    NINJA_TOOL_MASTERY: "Ninja Tool Mastery",
    PSIONIC_MASTERY: "Psionic Mastery",
    SOUL_MASTERY: "Soul Mastery"
    };

    // Stalker Powers
const StalkerPrimaryPower = {
    BROAD_SWORD: "Broad Sword",
    CLAWS: "Claws",
    DARK_MELEE: "Dark Melee",
    DUAL_BLADES: "Dual Blades",
    ELECTRICAL_MELEE: "Electrical Melee",
    ENERGY_MELEE: "Energy Melee",
    FIERY_MELEE: "Fiery Melee",
    ICE_MELEE: "Ice Melee",
    KINETIC_MELEE: "Kinetic Melee",
    MARTIAL_ARTS: "Martial Arts",
    NINJA_BLADE: "Ninja Blade",
    PSIONIC_MELEE: "Psionic Melee",
    RADIATION_MELEE: "Radiation Melee",
    SAVAGE_MELEE: "Savage Melee",
    SPINES: "Spines",
    STAFF_FIGHTING: "Staff Fighting",
    STONE_MELEE: "Stone Melee",
    STREET_JUSTICE: "Street Justice",
    };    
    const StalkerSecondaryPower = {
    BIO_ARMOR: "Bio Armor",
    DARK_ARMOR: "Dark Armor",
    ELECTRIC_ARMOR: "Electric Armor",
    ENERGY_AURA: "Energy Aura",
    FIERY_AURA: "Fiery Aura",
    ICE_ARMOR: "Ice Armor",
    INVULNERABILITY: "Invulnerability",
    NINJITSU: "Ninjitsu",
    RADIATION_ARMOR: "Radiation Armor",
    REGENERATION: "Regeneration",
    SHIELD_DEFENSE: "Shield Defense",
    STONE_ARMOR: "Stone Armor",
    SUPER_REFLEXES: "Super Reflexes",
    WILLPOWER: "Willpower",
    };    
    const StalkerEpicPower = {
    BLAZE_MASTERY: "Blaze Mastery",
    BODY_MASTERY: "Body Mastery",
    DARKNESS_MASTERY: "Darkness Mastery",
    LEVIATHAN_MASTERY: "Leviathan Mastery",
    MACE_MASTERY: "Mace Mastery",
    MU_MASTERY: "Mu Mastery",
    SOUL_MASTERY: "Soul Mastery",
    WEAPON_MASTERY: "Weapon Mastery",
    };

    // Tanker Powers
    const TankerPrimaryPower = {
    BIO_ARMOR: "Bio Armor",
    DARK_ARMOR: "Dark Armor",
    ELECTRIC_ARMOR: "Electric Armor",
    FIERY_AURA: "Fiery Aura",
    ICE_ARMOR: "Ice Armor",
    INVULNERABILITY: "Invulnerability",
    RADIATION_ARMOR: "Radiation Armor",
    SHIELD_DEFENSE: "Shield Defense",
    STONE_ARMOR: "Stone Armor",
    SUPER_REFLEXES: "Super Reflexes",
    WILLPOWER: "Willpower"
    };    
    const TankerSecondaryPower = {
    BATTLE_AXE: "Battle Axe",
    BROAD_SWORD: "Broad Sword",
    CLAWS: "Claws",
    DARK_MELEE: "Dark Melee",
    DUAL_BLADES: "Dual Blades",
    ELECTRICAL_MELEE: "Electrical Melee",
    ENERGY_MELEE: "Energy Melee",
    FIERY_MELEE: "Fiery Melee",
    ICE_MELEE: "Ice Melee",
    KATANA: "Katana",
    KINETIC_MELEE: "Kinetic Melee",
    MARTIAL_ARTS: "Martial Arts",
    PSIONIC_MELEE: "Psionic Melee",
    RADIATION_MELEE: "Radiation Melee",
    SAVAGE_MELEE: "Savage Melee",
    SPINES: "Spines",
    STAFF_FIGHTING: "Staff Fighting",
    STONE_MELEE: "Stone Melee",
    STREET_JUSTICE: "Street Justice",
    SUPER_STRENGTH: "Super Strength",
    TITAN_WEAPONS: "Titan Weapons",
    WAR_MACE: "War Mace"
    };    
    const TankerEpicPower = {
    ARCTIC_MASTERY: "Arctic Mastery",
    EARTH_MASTERY: "Earth Mastery",
    ENERGY_MASTERY: "Energy Mastery",
    LEVIATHAN_MASTERY: "Leviathan Mastery",
    MACE_MASTERY: "Mace Mastery",
    MU_MASTERY: "Mu Mastery",
    PYRE_MASTERY: "Pyre Mastery",
    SOUL_MASTERY: "Soul Mastery"
    };

    //Warshade Powers
    const WarshadePrimaryPower = {
    UMBRAL_BLAST: "Umbral Blast",
    UMBRAL_BLAST2: "Umbral Blast",
    };  
    const WarshadeSecondaryPower = {
    UMBRAL_AURA: "Umbral Aura",
    UMBRAL_AURA2: "Umbral Aura"
    };  
    const WarshadeEpicPower = {
    NONE: "None",
    NONE2: "None"
    };
  


function getRandomSuperhero() {
  let archetype = Object.values(Archetype)[
    Math.floor(Math.random() * Object.values(Archetype).length)
  ];

  let primaryPower, secondaryPower, epicPower;

    if (archetype === Archetype.ARACHNOS_SOLDIER) {
        primaryPower = Object.values(ArachnosSoldierPrimaryPower)[Math.floor(Math.random() * Object.values(ArachnosSoldierPrimaryPower).length)];
        secondaryPower = Object.values(ArachnosSoldierSecondaryPower)[Math.floor(Math.random(Math.random() * Object.values(ArachnosSoldierSecondaryPower).length))];
        epicPower = Object.values(ArachnosSoldierEpicPower)[Math.floor(Math.random() * Object.values(ArachnosSoldierEpicPower).length)];
    } 
    else if (archetype === Archetype.ARACHNOS_WIDOW) {
      primaryPower = Object.values(ArachnosWidowPrimaryPower)[      Math.floor(Math.random() * Object.values(ArachnosWidowPrimaryPower).length)    ];
      secondaryPower = Object.values(ArachnosWidowSecondaryPower)[      Math.floor(Math.random() * Object.values(ArachnosWidowSecondaryPower).length)    ];
      epicPower = Object.values(ArachnosWidowEpicPower)[      Math.floor(Math.random() * Object.values(ArachnosWidowEpicPower).length)    ];
    } 
    else if (archetype === Archetype.BLASTER) {
      primaryPower = Object.values(BlasterPrimaryPowers)[      Math.floor(Math.random() * Object.values(BlasterPrimaryPowers).length)    ];
      secondaryPower = Object.values(BlasterSecondaryPowers)[      Math.floor(Math.random() * Object.values(BlasterSecondaryPowers).length)    ];
      epicPower = Object.values(BlasterEpicPowers)[      Math.floor(Math.random() * Object.values(BlasterEpicPowers).length)    ];
    }
    else if (archetype === Archetype.BRUTE) {
      primaryPower = Object.values(BrutePrimaryPowers)[      Math.floor(Math.random() * Object.values(BrutePrimaryPowers).length)    ];
      secondaryPower = Object.values(BruteSecondaryPowers)[      Math.floor(Math.random() * Object.values(BruteSecondaryPowers).length)    ];
      epicPower = Object.values(BruteEpicPowers)[      Math.floor(Math.random() * Object.values(BruteEpicPowers).length)    ];
    }
    else if (archetype === Archetype.CONTROLLER) {
      primaryPower = Object.values(ControllerPrimaryPowers)[      Math.floor(Math.random() * Object.values(ControllerPrimaryPowers).length)    ];
      secondaryPower = Object.values(ControllerSecondaryPowers)[      Math.floor(Math.random() * Object.values(ControllerSecondaryPowers).length)    ];
      epicPower = Object.values(ControllerEpicPowers)[      Math.floor(Math.random() * Object.values(ControllerEpicPowers).length)    ];
    }
    else if (archetype === Archetype.CORRUPTOR) {
      primaryPower = Object.values(CorruptorPrimaryPowers)[      Math.floor(Math.random() * Object.values(CorruptorPrimaryPowers).length)    ];
      secondaryPower = Object.values(CorruptorSecondaryPowers)[      Math.floor(Math.random() * Object.values(CorruptorSecondaryPowers).length)    ];
      epicPower = Object.values(CorruptorEpicPowers)[      Math.floor(Math.random() * Object.values(CorruptorEpicPowers).length)    ];
    }
    else if (archetype === Archetype.DEFENDER) {
      primaryPower = Object.values(DefenderPrimaryPowers)[      Math.floor(Math.random() * Object.values(DefenderPrimaryPowers).length)    ];
      secondaryPower = Object.values(DefenderSecondaryPowers)[      Math.floor(Math.random() * Object.values(DefenderSecondaryPowers).length)    ];
      epicPower = Object.values(DefenderEpicPowers)[      Math.floor(Math.random() * Object.values(DefenderEpicPowers).length)    ];
    }
    else if (archetype === Archetype.DOMINATOR) {
      primaryPower = Object.values(DominatorPrimaryPowers)[      Math.floor(Math.random() * Object.values(DominatorPrimaryPowers).length)    ];
      secondaryPower = Object.values(DominatorSecondaryPowers)[      Math.floor(Math.random() * Object.values(DominatorSecondaryPowers).length)    ];
      epicPower = Object.values(DefenderEpicPowers)[      Math.floor(Math.random() * Object.values(DefenderEpicPowers).length)    ];
    }
    else if (archetype === Archetype.MASTERMIND) {
      primaryPower = Object.values(MastermindPrimaryPowers)[      Math.floor(Math.random() * Object.values(MastermindPrimaryPowers).length)    ];
      secondaryPower = Object.values(MastermindSecondaryPowers)[      Math.floor(Math.random() * Object.values(MastermindSecondaryPowers).length)    ];
      epicPower = Object.values(MastermindEpicPowers)[      Math.floor(Math.random() * Object.values(MastermindEpicPowers).length)    ];
    }
    else if (archetype === Archetype.PEACEBRINGER) {
      primaryPower = Object.values(PeacebringerPrimaryPower)[      Math.floor(Math.random() * Object.values(PeacebringerPrimaryPower).length)    ];
      secondaryPower = Object.values(PeacebringerSecondaryPower)[      Math.floor(Math.random() * Object.values(PeacebringerSecondaryPower).length)    ];
      epicPower = Object.values(PeacebringerEpicPower)[      Math.floor(Math.random() * Object.values(PeacebringerEpicPower).length)    ];
    }
    else if (archetype === Archetype.SCRAPPER) {
      primaryPower = Object.values(ScrapperPrimaryPowers)[      Math.floor(Math.random() * Object.values(ScrapperPrimaryPowers).length)    ];
      secondaryPower = Object.values(ScrapperSecondaryPowers)[      Math.floor(Math.random() * Object.values(ScrapperSecondaryPowers).length)    ];
      epicPower = Object.values(ScrapperEpicPowers)[      Math.floor(Math.random() * Object.values(ScrapperEpicPowers).length)    ];
    }
    else if (archetype === Archetype.SENTINEL) {
      primaryPower = Object.values(SentinelPrimaryPowers)[      Math.floor(Math.random() * Object.values(SentinelPrimaryPowers).length)    ];
      secondaryPower = Object.values(SentinelSecondaryPowers)[      Math.floor(Math.random() * Object.values(SentinelSecondaryPowers).length)    ];
      epicPower = Object.values(SentinelEpicPowers)[      Math.floor(Math.random() * Object.values(SentinelEpicPowers).length)    ];
    }
    else if (archetype === Archetype.STALKER) {
      primaryPower = Object.values(StalkerPrimaryPower)[      Math.floor(Math.random() * Object.values(StalkerPrimaryPower).length)    ];
      secondaryPower = Object.values(StalkerSecondaryPower)[      Math.floor(Math.random() * Object.values(StalkerSecondaryPower).length)    ];
      epicPower = Object.values(StalkerEpicPower)[      Math.floor(Math.random() * Object.values(StalkerEpicPower).length)    ];
    }
    else if (archetype === Archetype.TANKER) {
      primaryPower = Object.values(TankerPrimaryPower)[      Math.floor(Math.random() * Object.values(TankerPrimaryPower).length)    ];
      secondaryPower = Object.values(TankerSecondaryPower)[      Math.floor(Math.random() * Object.values(TankerSecondaryPower).length)    ];
      epicPower = Object.values(TankerEpicPower)[      Math.floor(Math.random() * Object.values(TankerEpicPower).length)    ];
    }
    else if (archetype === Archetype.WARSHADE) {
      primaryPower = Object.values(WarshadePrimaryPower)[      Math.floor(Math.random() * Object.values(WarshadePrimaryPower).length)    ];
      secondaryPower = Object.values(WarshadeSecondaryPower)[      Math.floor(Math.random() * Object.values(WarshadeSecondaryPower).length)    ];
      epicPower = Object.values(WarshadeEpicPower)[      Math.floor(Math.random() * Object.values(WarshadeEpicPower).length)    ];
    }
  
    return new Superhero(archetype, primaryPower, secondaryPower, epicPower);
  }
  
const button = document.querySelector("#generate-button");
const output = document.querySelector("#output");

button.addEventListener("click", function() {
  const hero = getRandomSuperhero();
  output.innerHTML = `Archetype: <b>${hero.archetype}</b><br>
                      Primary Power: <b>${hero.primaryPower}</b><br>
                      Secondary Power:<b> ${hero.secondaryPower}</b><br>
                      Epic Power: <b>${hero.epicPower}</b>`;
});




