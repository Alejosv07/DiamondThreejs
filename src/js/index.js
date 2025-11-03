import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
((d, w) => {
  //Scene
  const scene = new THREE.Scene();

  //Camera
  const camera = new THREE.PerspectiveCamera(
    75,
    w.innerWidth / w.innerHeight,
    0.1,
    100
  );
  camera.position.z = 3;

  scene.add(camera);

  //Canvas
  const canvas = d.querySelector("canvas.webgl");

  //Type control
  const control = new OrbitControls(camera, canvas);
  control.enableDamping = true;

  //Render
  const render = new THREE.WebGLRenderer({ antialias: true, canvas });
  render.setSize(w.innerWidth, w.innerHeight);
  render.setPixelRatio(Math.min(w.devicePixelRatio, 2));

  const tick = () => {
    control.update();
    render.render(scene, camera);

    w.requestAnimationFrame(tick);
  };

  tick();

  w.addEventListener("resize", (event) => {
    scene.updateMatrix();
    render.setSize(w.innerWidth, w.innerHeight);
    render.setPixelRatio(Math.min(w.devicePixelRatio, 2));
  });
})(document, window);
