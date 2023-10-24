import * as THREE from 'three'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camara = new THREE.PerspectiveCamera(80, window.innerHeight/window.innerWidth, 1, 100);
const render = new THREE.WebGLRenderer();
const controls = new OrbitControls( camara, render.domElement );
render.setSize(window.innerHeight/window.innerWidth);


scene.add(camara);
scene.add(render);

document.appendChild(render);


const geometria = new THREE.PlaneGeometry(20,10);
const material = new THREE.MeshBasicMaterial('red')
const plano = new THREE.Mesh(geometria, material);
scene.add(plano);

function animate(){
    requestAnimationFrame( animate )
    animate()

    controls.update();



    render.render(scene,camara)


}

animate()