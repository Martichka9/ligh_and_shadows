import * as PLANETS from './planets.js';

let planets = [
    PLANETS.mercury,
    PLANETS.venus,
    PLANETS.earth,
    PLANETS.mars,
    PLANETS.jupiter,
    PLANETS.saturn,
    PLANETS.uranus,
    PLANETS.neptune,
    PLANETS.pluto
];

let mercuryOrbit = new THREE.Object3D().add(PLANETS.mercury);
let venusOrbit = new THREE.Object3D().add(PLANETS.venus);
let earthOrbit = new THREE.Object3D().add(PLANETS.earth);
let marsOrbit = new THREE.Object3D().add(PLANETS.mars);
let jupiterOrbit = new THREE.Object3D().add(PLANETS.jupiter);
let saturnOrbit = new THREE.Object3D().add(PLANETS.saturn);
let uranusOrbit = new THREE.Object3D().add(PLANETS.uranus);
let neptuneOrbit = new THREE.Object3D().add(PLANETS.neptune);
let plutoOrbit = new THREE.Object3D().add(PLANETS.pluto);

let orbitalPeriods = [
    0.0414937759,//mercury
    0.0153609831,//venus
    0.0100000000,//earth
    0.0053191489,//mars
    0.000843170,//jupiter
    0.000339443,//saturn
    0.000119033,//uranus
    0.000060683,//neptune
    0.000040241//pluto
];

let orbits = [mercuryOrbit, venusOrbit, earthOrbit, marsOrbit, jupiterOrbit, saturnOrbit, uranusOrbit, neptuneOrbit, plutoOrbit];

export {orbits, orbitalPeriods}
