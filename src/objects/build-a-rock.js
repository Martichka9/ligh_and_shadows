import sRings from '../imgs/552-5527537_-mr2.png';

//function to build the system sun and planets
export function buildARock (size, type, color, cShadow, rShadow, x, y, z, texture, tilt, haveRings, innerR, outerR, tiltR){
    let geo, mater, rock, rings; 
    geo = new THREE.SphereBufferGeometry(size,100,100);

    if(type === 'star'){
        mater = addTexture(texture);
    }
    else if(type === 'planet'){
        mater = addTexture(texture);
        if(haveRings){
            rings = addRings(size+innerR, size*outerR, tiltR);
        }
    }

    rock = new THREE.Mesh(geo,mater);
    rock.castShadow = cShadow;
    rock.receiveShadow = rShadow;

    //double check if degrees are correct
    //console.log("planet angle in deg: ",THREE.Math.radToDeg(rock.rotation.x)%360);

    if(rings != undefined){
        let planetWithRings = new THREE.Object3D();
        planetWithRings.add(rock, rings);
        planetWithRings.position.set(x,y,z);
        planetWithRings.rotateX(tilt);
        return planetWithRings;
    }
    else {
        rock.position.set(x,y,z);
        rock.rotateX(tilt);
        return rock;
    }
}


//create rings
function addRings (innerR,outerR){
    let geo, mater, rings; 
    geo = new THREE.RingBufferGeometry( innerR, outerR, 100, 100, 0, 6.3);
    let ringMap = new THREE.TextureLoader().load(sRings);
    mater = new THREE.MeshPhysicalMaterial( { map: ringMap, side: THREE.DoubleSide, transparent: true, opacity:0.8} );
    rings = new THREE.Mesh( geo, mater );
    rings.castShadow = false;
    rings.receiveShadow = false;
    rings.rotateX(Math.PI/1.9955);

    return rings;
}

//textures
function addTexture(imgPath){
    let img = new THREE.TextureLoader().load(imgPath);
    let texturedMater = new THREE.MeshLambertMaterial( { map: img } );

    return texturedMater;
}