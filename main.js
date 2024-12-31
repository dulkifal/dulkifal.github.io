import * as THREE from 'three';
import { FontLoader } from 'https://cdn.jsdelivr.net/npm/three@0.168.0/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'https://cdn.jsdelivr.net/npm/three@0.168.0/examples/jsm/geometries/TextGeometry.js';

document.addEventListener('DOMContentLoaded', () => {
  // 1. Create the scene
  const scene = new THREE.Scene();

  // 2. Add the camera
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 5;
  scene.add(camera);

  // 3. Create and add a plane with a texture
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(
    '/assets/icon1.png', // Replace with the path to your image
    () => {
      const planeGeometry = new THREE.PlaneGeometry(5, 5);
      const planeMaterial = new THREE.MeshBasicMaterial({ map: texture, transparent: true });
      const plane = new THREE.Mesh(planeGeometry, planeMaterial);
      plane.position.set(0, 0, -5);
      scene.add(plane);

      // Add mouse interaction for dragging the plane
      let isDragging = false;
      let previousMousePosition = { x: 0, y: 0 };

      document.addEventListener('mousedown', (event) => {
        isDragging = true;
        previousMousePosition = { x: event.clientX, y: event.clientY };
      });

      document.addEventListener('mousemove', (event) => {
        if (isDragging) {
          const deltaMove = {
            x: event.clientX - previousMousePosition.x,
            y: event.clientY - previousMousePosition.y,
          };

          plane.position.x += deltaMove.x * 0.01;
          plane.position.y -= deltaMove.y * 0.01;

          previousMousePosition = { x: event.clientX, y: event.clientY };
        }
      });

      document.addEventListener('mouseup', () => {
        isDragging = false;
      });
    },
    undefined,
    (err) => {
      console.error('An error occurred loading the texture:', err);
    }
  );

  // 4. Add lighting
  const light = new THREE.DirectionalLight(0x9cdba6, 10);
  light.position.set(1, 1, 1);
  scene.add(light);

  // Add ambient light for better visibility
  const ambientLight = new THREE.AmbientLight(0x404040, 2); // soft white light
  scene.add(ambientLight);

  // 5. Set up the renderer
  const renderer = new THREE.WebGLRenderer({ alpha: true }); // Enable transparency
  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  // Add a grid helper to the scene
  const gridHelper = new THREE.GridHelper(10, 10);
  scene.add(gridHelper);

  // 6. Load font and create 3D text
  const fontLoader = new FontLoader();
  fontLoader.load(
    'https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', // Replace with the path to your font
    (font) => {
      const textGeometry = new TextGeometry('Testing 3D', {
        font: font,
        size: 1,
        height: 0.2,
      });
      const textMaterial = new THREE.MeshLambertMaterial({ color: '#488585' });
      const textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(-3, -2, 0);
      scene.add(textMesh);

      // 7. Animate the scene
      function animate() {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      }
      animate();

      // 8. Add mouse interaction for rotating the text
      document.addEventListener('mousemove', (event) => {
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
        textMesh.rotation.x = mouseY * 0.5;
        textMesh.rotation.y = mouseX * 0.5;
      });

      // Add mouse interaction for dragging the text
      let isDraggingText = false;
      let previousMousePositionText = { x: 0, y: 0 };

      document.addEventListener('mousedown', (event) => {
        isDraggingText = true;
        previousMousePositionText = { x: event.clientX, y: event.clientY };
      });

      document.addEventListener('mousemove', (event) => {
        if (isDraggingText) {
          const deltaMove = {
            x: event.clientX - previousMousePositionText.x,
            y: event.clientY - previousMousePositionText.y,
          };

          textMesh.position.x += deltaMove.x * 0.01;
          textMesh.position.y -= deltaMove.y * 0.01;

          previousMousePositionText = { x: event.clientX, y: event.clientY };
        }
      });

      document.addEventListener('mouseup', () => {
        isDraggingText = false;
      });
    },
    undefined,
    (err) => {
      console.error('An error occurred loading the font:', err);
    }
  );

  // 9. Add AI-themed background elements with gradient colors
  const logoGeometry = new THREE.TorusGeometry(0.5, 0.2, 16, 100);
  const gradientMaterial = new THREE.ShaderMaterial({
    uniforms: {
      color1: { value: new THREE.Color(0xff0000) },
      color2: { value: new THREE.Color(0x0000ff) }
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 color1;
      uniform vec3 color2;
      varying vec2 vUv;
      void main() {
        gl_FragColor = vec4(mix(color1, color2, vUv.y), 1.0);
      }
    `,
    side: THREE.DoubleSide
  });

  for (let i = 0; i < 20; i++) {
    const logoElement = new THREE.Mesh(logoGeometry, gradientMaterial);
    logoElement.position.set(
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20,
      (Math.random() - 0.5) * 20
    );
    logoElement.rotation.x = Math.random() * Math.PI;
    logoElement.rotation.y = Math.random() * Math.PI;
    scene.add(logoElement);

    // Animate the logos
    function animateLogos() {
      requestAnimationFrame(animateLogos);
      logoElement.rotation.x += 0.01;
      logoElement.rotation.y += 0.01;
    }
    animateLogos();
  }
});
