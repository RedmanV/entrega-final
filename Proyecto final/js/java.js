//escenario
const scene = new THREE.Scene();




var loader = new  THREE.TextureLoader();
loader.load(
    '../Img/Fondo portal.png', function(texture){
     scene.background = texture;
    }
);

//camara
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//GltfLoader

const gltfLoader = new THREE.GLTFLoader();
gltfLoader.load('../baby_robot/scene.gltf',
(gltf) => {
    const loaderObjeto = gltf.scene;
    loaderObjeto.scale.set(0.1,0.1,0.1);
    loaderObjeto.position.x = 4;
    loaderObjeto.position.y = 7;
    loaderObjeto.position.z = 1;
    console.log('carga completa');
    scene.add(loaderObjeto);

    
    const controls = new THREE.DragControls( [loaderObjeto], camera, renderer.domElement);
}, ()=>{
    console.log('cargado');
}, ()=>{
    console.log('error');
}
);
camera.position.z = 100;

//luz

const light = new THREE.AmbientLight( 0xffffff, 7 );
scene.add( light );

//GltfLoader 2

const gltfLoader2 = new THREE.GLTFLoader();
gltfLoader2.load('../cj/scene.gltf',
(gltf) => {
    const loaderObjeto2 = gltf.scene;
    loaderObjeto2.scale.set(50,50,50);
    loaderObjeto2.position.x = -90;
    loaderObjeto2.position.y = -60;
    loaderObjeto2.position.z = 1;
    console.log('carga completa');
    scene.add(loaderObjeto2);

    
    const controls2 = new THREE.DragControls( [loaderObjeto2], camera, renderer.domElement);
}, ()=>{
    console.log('cargado');
}, ()=>{
    console.log('error');
}
);
camera.position.z = 100;

//geometria

const geometry = new THREE.TorusKnotGeometry( 10, 3, 64, 3, 7, 4 );
const material = new THREE.MeshBasicMaterial( { color: 0xF819FB, wireframe:true } );
const torusKnot = new THREE.Mesh( geometry, material );
scene.add( torusKnot );

camera.position.z = 57;
torusKnot.position.x = 5;
torusKnot.position.y = -12;

//line

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xFFFFFF } ) );
scene.add( line );

line.position.x = 5;
line.position.y = -12;

//animacion
function animate() {
    requestAnimationFrame( animate );

    torusKnot.rotation.z += -0.02;

    line.rotation.z += 0.02;
    renderer.render( scene, camera );
}
animate();