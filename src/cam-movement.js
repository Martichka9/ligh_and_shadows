let currentCam, targetXY, targetZ, planetPos, quaternion, zSpeed;
let move = new THREE.Vector3();
let backX = 300;
let backY = 300;
let accelerationAfter = 0;

function lookAtPlanet(planet, camera, size, index, rotateCamera){
    // console.log("check planet ",index);
    if (rotateCamera == true){
        backX = camera.position.x < 0 ? 100: -100;
        backY = camera.position.y < 0 ? 100: -100;
        camMoveBack(camera, backX, backY, planet, size, index, rotateCamera); 
    }
    else {
        updateLookAt(camera,planet);
        zoomCam2(camera,planet,size);
    }
}

function camMoveBack(camera,backX,backY, planet, size, index) {
    if(camera.position.x != backX || camera.position.y != backY){
        move.x = camera.position.x < 0 ? camera.position.x + 1.0 : camera.position.x - 1.0;
        move.y = camera.position.y < 0 ? camera.position.y + 1.0 : camera.position.y - 1.0;
        move.z = camera.position.z > 0 ? camera.position.z - 10.0 : camera.position.z + 10.0;

        camera.position.set(move.x, move.y, move.z);
    }
    else {
        lookAtPlanet(planet, camera, size, index, false);
    }
}

function updateLookAt(camera,planet){
    planetPos = new THREE.Vector3();
    planetPos.setFromMatrixPosition( planet.matrixWorld); //get planet's position
    quaternion = new THREE.Quaternion(planetPos.x/2, planetPos.y/2, planetPos.z/2, 1); //pass position to quaternion
    // camera.applyQuaternion(quaternion); // Apply Quaternion
    camera.quaternion.slerp(quaternion,1);
    camera.quaternion.normalize();
    camera.lookAt(planetPos); //Look at object
    camera.updateProjectionMatrix();
    // camera.updateWorldMatrix();
}

function zoomCam2(camera,planet,size){
    //set targeted closest position of camera according to the planet's mesh size
    if (planet.children.length == 0){
        //round before multiply to escape planets with floating point sizes oscillation
        targetXY= Math.round(planet.geometry.parameters.radius) * 2;
    }
    else {
        targetXY= Math.round(planet.children[0].geometry.parameters.radius) * 2;
    }
    currentCam = camera.position;
    targetZ = planet.position.z-size;
    move.x = currentCam.x;
    move.y = currentCam.y;
    move.z = currentCam.z;
    
    //speed depend on distance between camera and object
    accelerationAfter = camera.position.z - planet.position.z;
    if (accelerationAfter < 0) {accelerationAfter *= -1;}
   
    //set speed depending on distance
    if (accelerationAfter > 4000) {zSpeed = 10.0;}
    else if (accelerationAfter > 3000) {zSpeed = 9.0;}
    else if (accelerationAfter > 2000) {zSpeed = 6.0;}
    else if (accelerationAfter > 1000) {zSpeed = 5.0;}
    else if (accelerationAfter > 500) {zSpeed = 3.0;}
    else{zSpeed = 1.0;}

    //update camera movement with corresponding speed
    if((Math.floor(currentCam.x) != targetXY
    || Math.floor(currentCam.y) != targetXY
    || Math.floor(currentCam.z) != targetZ)){
        if (Math.floor(currentCam.x) < targetXY){move.x = Math.floor(currentCam.x+1.0)*1.0;}
        else if(Math.floor(currentCam.x) > targetXY){move.x = Math.floor(currentCam.x-1.0)*1.0;}
        if (Math.floor(currentCam.y) < targetXY){move.y = Math.floor(currentCam.y+1.0)*1.0;}
        else if(Math.floor(currentCam.y) > targetXY){move.y = Math.floor(currentCam.y-1.0)*1.0;}
        if (Math.floor(currentCam.z) < targetZ){move.z = Math.floor(currentCam.z+zSpeed)*1.0;}
        else if(Math.floor(currentCam.z) > targetZ){move.z = Math.floor(currentCam.z-zSpeed)*1.0;} 
        
        camera.position.set(move.x,move.y,move.z); 
    }
    else {
        //debug
        //console.log("on target reached",targetZ);
        //console.log("cam", camera.position.z);
    }
}

export {lookAtPlanet};