import { powerTypes, Archetype } from './enumsHC.js';
import { powerTypes as powerTypes2, Archetype as Archetype2 } from './enumsRB.js';
import { powerTypes as powerTypes3, Archetype as Archetype3 } from './enumsTS.js';
const archetypeSelect = document.getElementById('archetypeSelect');
const enumSelect = document.getElementById('enumSelect');
const button = document.getElementById("generate-button");
const output = document.querySelector("#output");

let selectedEnum; 

enumSelect.addEventListener('change', () => {
  selectedEnum = enumSelect.value;

  switch (selectedEnum) {
    case 'enumsHC':
      createEnumOptions(Archetype, archetypeSelect);
      break;
    case 'enumsRB':
      createEnumOptions(Archetype2, archetypeSelect);
      break;
    case 'enumsTS':
      createEnumOptions(Archetype3, archetypeSelect);
      break;
    default:
      break;
  }
});


button.addEventListener("click", function() {
  
const AT = archetypeSelect;
  console.log(archetypeSelect.value)

  const hero = getRandomSuperhero(archetypeSelect.value,selectedEnum);

  output.innerHTML = `Archetype: <b>${hero.archetype}</b><br>
                      Primary Power: <b>${hero.primaryPower}</b><br>
                      Secondary Power:<b> ${hero.secondaryPower}</b><br>
                      Epic Power: <b>${hero.epicPower}</b>`;
});

function createEnumOptions(enumObj, selectElem) {
  selectElem.innerHTML = '';
  
  // Add "All" option
  const allOption = document.createElement('option');
  allOption.value = "all";
  allOption.textContent = "All";
  selectElem.appendChild(allOption);

  Object.values(enumObj).forEach(enumValue => {
    const option = document.createElement('option');
    option.value = enumValue;
    option.textContent = enumValue;
    selectElem.appendChild(option);
  });
}

function getRandomSuperhero2(filterArchetype, selectedEnum) {
  let archetype;
  let powerType;
let insiteAT = AT;

  switch (selectedEnum) {
    case "enumsRB":
      if (filterArchetype !== "all") { 
        archetype =  Archetype2[filterArchetype.key];     
      } else {
        archetype = Object.values(Archetype2)[Math.floor(Math.random() * Object.values(Archetype2).length)];
      }
      powerType = powerTypes2;
      break;
    case "enumsTS":
      if (filterArchetype !== "all") {
        archetype =  Archetype3[filterArchetype.key];      
      } else {
        archetype = Object.values(Archetype3)[Math.floor(Math.random() * Object.values(Archetype3).length)];
      }
      powerType = powerTypes3;
      break;
    default:
      if (filterArchetype !== "all") {
        archetype =  Archetype[filterArchetype.key];    
      } else {
        archetype = Object.values(Archetype)[Math.floor(Math.random() * Object.values(Archetype).length)];
      }
      powerType = powerTypes;
      break;
  }
  console.log(archetype)
  const [primaryPower, secondaryPower, epicPower] = powerType[archetype.value].map(powers => {
    return Object.values(powers)[Math.floor(Math.random() * Object.values(powers).length)];
  });

  return { AT, primaryPower, secondaryPower, epicPower };
}
function getRandomSuperhero(filterArchetype, selectedEnum) {
  let archetype;
  let powerType;

  switch (selectedEnum) {
    case "enumsRB":
      if (filterArchetype !== "all") { 
        archetype =  filterArchetype;     
        console.log(archetype);
        console.log(filterArchetype);
        console.log(archetype.value);
        console.log(filterArchetype.value);
      } else {
        archetype = Object.values(Archetype2)[Math.floor(Math.random() * Object.values(Archetype2).length)];
      }
      powerType = powerTypes2[archetype];
      
      console.log("rb");
      break;
    case "enumsTS":
      if (filterArchetype !== "all") {
        archetype =  filterArchetype;      
      } else {
        archetype = Object.values(Archetype3)[Math.floor(Math.random() * Object.values(Archetype3).length)];
      }
      powerType = powerTypes3[archetype];
      
      console.log("ts");
      break;
    default:
      if (filterArchetype !== "all") {
        archetype =  filterArchetype;    
      } else {
        archetype = Object.values(Archetype)[Math.floor(Math.random() * Object.values(Archetype).length)];
      }
      powerType = powerTypes[archetype];
      
      console.log("HC");
      break;
  }

  
  const [primaryPower, secondaryPower, epicPower] = powerType.map(powers => {
    return Object.values(powers)[Math.floor(Math.random() * Object.values(powers).length)];
  });
  if(archetype == null){
    archetype = AT;
  }
  return { archetype, primaryPower, secondaryPower, epicPower };
}
