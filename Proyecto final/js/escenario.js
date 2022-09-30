//  Crear escena
const scene = new THREE.Scene();

//Inner dentro de la pantalla
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

//  lineas de codigo para render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild (renderer.domElement);


function animate(){
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();