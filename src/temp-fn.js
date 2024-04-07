import {planets} from './objects/planets.js';

function updateSize (id) {
    //get planet size for proper zoom in
    let boundingBox = new THREE.Box3().setFromObject(planets[id]);
    let size = boundingBox.getSize(); // Returns Vector3
    // console.log((Math.round(size.x)%10)*10);
    return size;
}

export {updateSize};