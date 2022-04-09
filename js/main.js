var camera;
var scene;
var renderer;
var mesh;

function init() {
    scene = new THREE.Scene();
    scene.background = new THREE.Color(1, 1, 1);
    camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('webgl').appendChild(renderer.domElement);
    camera.position.z = 3;

    var box = new THREE.BoxGeometry(1, 1, 1);
    var material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    mesh = new THREE.Mesh(box, material);
    scene.add(mesh);
    update();
}
function update() {
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    mesh.rotation.z += 0.01;
    renderer.render(scene, camera);

    requestAnimationFrame(update);
}

init();
