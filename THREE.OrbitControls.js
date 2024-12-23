// Create a floor and check if the cube is touching it
const floorGeometry = new THREE.PlaneGeometry(10, 10);
const floorMaterial = new THREE.MeshBasicMaterial({ color: 0xaaaaaa });
const floor = new THREE.Mesh(floorGeometry, floorMaterial);
floor.rotation.x = - Math.PI / 2;
scene.add(floor);

// Check collision with floor
function checkCollision() {
    if (cube.position.y < 0) {
        cube.position.y = 1; // Reset cube position to above the floor
        soundEffect.play();  // Play a sound on collision
    }
}
