import './style.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// Tres cosas son necesarias para una escena en 3D 





// * 1) La escena 2) La camara 3) Lo que se renderizara el render 
const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camara.position.set(0, 3, 6)
const render =new THREE.WebGLRenderer(); 
render.setSize(window.innerWidth, window.innerHeight);
render.shadowMap.enabled = true
document.body.appendChild(render.domElement)
escena.background = new THREE.Color("rgb(200,16,16)");
document.body.appendChild( render.domElement );


// const light = new THREE.AmbientLight( 0xFFFF ); // soft white light
// escena.add( light );
const directionalLight = new THREE.DirectionalLight( 0xffffff, 2 );
// directionalLight.position(0,0,0)
escena.add( directionalLight );


const controls = new OrbitControls(camara, render.domElement)

const loader = new GLTFLoader();

let tails;
loader.load( 'models/tails/tails.gltf', function ( gltf ) {
    tails = gltf.scene;
    tails.position.x = -4;
    tails.scale.set(1, 1, 1);
    tails.position.set(0,1,0)
    tails.castShadow = true;
	escena.add( tails );
    
}, undefined, function ( error ) {

	console.error( error );

} );


let olivia;
loader.load( 'models/olivia/olivia.gltf', function ( gltf ) {
    olivia = gltf.scene;
    // olivia.position.x = -4;
    olivia.scale.set(1, 1, 1);
	escena.add( olivia );
    
}, undefined, function ( error ) {

	console.error( error );

} );


let demonio;
loader.load( 'models/demonio/demonio.gltf', function ( gltf ) {
    demonio = gltf.scene;
    demonio.position.z = -4;
    demonio.scale.set(1, 1, 1);
	escena.add( demonio );
    
}, undefined, function ( error ) {

	console.error( error );

} );




function animar(){
    requestAnimationFrame( animar)
    render.render( escena,camara );


}


const geometry = new THREE.PlaneGeometry( 1, 1 );
const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
const plane = new THREE.Mesh( geometry, material );
escena.add( plane );

animar();



