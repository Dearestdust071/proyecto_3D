import './style.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Tres cosas son necesarias para una escena en 3D 


// * 1) La escena 2) La camara 3) Lo que se renderizara el render 
const escena = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(80, window.innerWidth/window.innerHeight, .1, 500);
const render =new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);
escena.background = new THREE.Color("rgb(200,16,16)");
document.body.appendChild( render.domElement );


const ambientLigth = new THREE.AmbientLight(0xffffff);
escena.add(ambientLigth);

const geometria = new THREE.BoxGeometry(1,1,1);
const material = new THREE.MeshBasicMaterial({color: "blue"});
const caja = new THREE.Mesh(geometria,material);
const caja2 = new THREE.Mesh(geometria,material);
const caja3 = new THREE.Mesh(geometria,material);

const loader = new GLTFLoader();
let perro;
loader.load( 'models/dona/Dona.gltf', function ( gltf ) {
    perro = gltf.scene;
    perro.scale.set(30, 30, 30);
	escena.add( perro );
    
}, undefined, function ( error ) {

	console.error( error );

} );

escena.add(caja)
escena.add(caja2)
escena.add(caja3)

caja2.position.x = 2;
caja3.position.x = -2;
camara.position.z = 5;



function animar(){
    requestAnimationFrame( animar)
    render.render( escena,camara );
    caja.rotation.x += .01
    caja.rotation.z += .01
    caja2.rotateX(.01)
    caja3.rotateY(.01)
    perro.rotateY(.01)
}

animar();



