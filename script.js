// Game Setup: Creating a 3D environment using Three.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('gameCanvas') });
renderer.setSize(window.innerWidth, window.innerHeight);

// Add a basic cube for the player to interact with
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Set camera position
camera.position.z = 5;

// Add a light source
const light = new THREE.AmbientLight(0x404040);  // Ambient light with low intensity
scene.add(light);

// Add interactivity - moving the camera with arrow keys
let moveSpeed = 0.1;
let rotateSpeed = 0.05;

document.addEventListener('keydown', function (event) {
    if (event.key === 'ArrowUp') camera.position.z -= moveSpeed;
    if (event.key === 'ArrowDown') camera.position.z += moveSpeed;
    if (event.key === 'ArrowLeft') camera.rotation.y += rotateSpeed;
    if (event.key === 'ArrowRight') camera.rotation.y -= rotateSpeed;
});

// Add animation to the cube
function animate() {
    requestAnimationFrame(animate);
    
    // Rotating the cube
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
}

animate();

// Handling window resize for responsive design
window.addEventListener('resize', function () {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
