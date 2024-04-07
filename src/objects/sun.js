import { Lensflare, LensflareElement } from 'three/examples/jsm/objects/Lensflare.js';
import img0 from '../imgs/lensflare0.png';
import img3 from '../imgs/lensflare3.png';
import {buildARock} from './build-a-rock.js';

//build sunlight similar light
function addLight( h, s, l, x, y, z ) {

    // lensflares
    let textureLoader = new THREE.TextureLoader();
    let textureFlare0 = textureLoader.load( img0 );
    let textureFlare3 = textureLoader.load( img3 );

    let light = new THREE.PointLight( 0xff0000, 2, 5000 );
    light.color.setHSL( h, s, l );
    light.position.set( x, y, z );

    let lensflare = new Lensflare();
    lensflare.addElement( new LensflareElement( textureFlare0, 1090, 0, light.color ) );
    lensflare.addElement( new LensflareElement( textureFlare3, 800, 0.6 ) );
    lensflare.addElement( new LensflareElement( textureFlare3, 1190, 0.7 ) );
    lensflare.addElement( new LensflareElement( textureFlare3, 600, 0.9 ) );
    lensflare.addElement( new LensflareElement( textureFlare3, 300, 1 , ) );
    light.add( lensflare );

    return light;
}

let sunlight = addLight( 1, 1, 1, 0, 0, 0 );

//sun
let sun = buildARock(1090,'star','0xffae42',false,false,0,0,0);

export {sunlight,sun};