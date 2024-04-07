import {buildARock} from './build-a-rock.js';
import mercuryMap from '../imgs/2k_mercury.jpg';
import venusMap from '../imgs/2k_venus_surface.jpg';
import earthMap from '../imgs/2k_earth_daymap.jpg';
import marsMap from '../imgs/2k_mars.jpg';
import jupiterMap from '../imgs/2k_jupiter.jpg';
import saturnMap from '../imgs/2k_saturn.jpg';
import uranusMap from '../imgs/2k_uranus.jpg';
import neptuneMap from '../imgs/2k_neptune.jpg';
import plutoMap from '../imgs/Pluto_-_Surface_Diversity.jpg';

let mercury = buildARock(2,'planet', 0xDBCECA, true, true, 0, 0, 1128, mercuryMap, 0.00017453292519943296, false );
let venus = buildARock(4.5,'planet', 0xe39e1c, true, true, 0, 0, 1162, venusMap, 0.0460766922526503, false );
let earth = buildARock(5,'planet', 0x688d3c, true, true, 0, 0, 1190, earthMap, 0.40910517666747087, false );
let mars = buildARock(2.6,'planet', 0xa1251b, true, true, 0, 0, 1242, marsMap, 0.4396484385773716, false );
let jupiter = buildARock(56,'planet', 0x838586, true, true, 0, 0, 1610, jupiterMap, 0.054628805587422516, false );
let saturn = buildARock(47,'planet', 0xceb8b8, true, true, 0, 0, 2044, saturnMap, 0.4665265090580843, true, 6, 2.5, 0.4665265090580843);
let uranus = buildARock(19.9,'planet', 0x7fabc3, true, true, 0, 0, 3012, uranusMap, 1.706408409674856, false );
let neptune = buildARock(19,'planet', 0x212354, true, true, 0, 0, 4096, neptuneMap, 0.4954989746411902, false );
let pluto = buildARock(1.2,'planet', 0x3B53C2, true, true, 0, 0, 5040, plutoMap, 2.0875883183104174, false );

let planets = [mercury,venus,earth,mars,jupiter,saturn,uranus,neptune,pluto];

//speed of axis rotation
//real speed in days devided as folows "((speed / 100) / 2) / 10"
let planetarDay = [
    0.02930,//mercury
    -0.12150,//venus
    0.00050,//earth
    0.00052,//mars
    0.2070,//jupiter
    0.2130,//saturn
    -0.3590,//uranus
    0.3355,//neptune
    -0.0033//pluto
];

export {planets, mercury, venus, earth, mars, jupiter, saturn, uranus, neptune, pluto, planetarDay};