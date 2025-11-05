import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import GUI from "lil-gui";
import { RectAreaLightUniformsLib } from "three/addons/lights/RectAreaLightUniformsLib.js";
((d, w) => {
  RectAreaLightUniformsLib.init();

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

  //Mesh and relative
  const octaGeo = new THREE.OctahedronGeometry(1, 0);

  const material = new THREE.MeshStandardMaterial();

  const mesh = new THREE.Mesh(octaGeo, material);

  scene.add(mesh);

  //Lights

  //Low
  const naturalLights = new THREE.AmbientLight();
  scene.add(naturalLights);

  const sunLight = new THREE.DirectionalLight("#FEDFCB", 1);
  scene.add(sunLight);

  //Moderate
  const sunGroundLight = new THREE.HemisphereLight("#87CEEB", "#FF4500", 1);
  scene.add(sunGroundLight);
  const pointLight = new THREE.PointLight("#177BE6", 1, 3, 1);
  pointLight.position.setZ(3);
  scene.add(pointLight);

  //Expensive
  const recArea = new THREE.RectAreaLight("#FEDFCB", 1, 3, 3);
  recArea.position.set(0, -5, 0);
  recArea.lookAt(mesh.position);
  scene.add(recArea);

  const spot = new THREE.SpotLight("white",1,3,0.2,1,1);
  spot.position.y = -3;
  spot.target.position.set(0,0,0);
  scene.add(spot);
  scene.add(spot.target)
  //Debug
  const debugLil = () => {
    const gui = new GUI({
      title: "Lights",
    });
    const debugOb = {
      ambientLight: true,
      sunLight: true,
      hemisphere: true,
      pointLight: true,
      recArea: true,
      spotLight: true,
    };

    const materialFolder = gui.addFolder("Material Options");
    materialFolder.add(mesh.material,"wireframe");

    const ambientFolder = gui.addFolder("Ambient Light Options");
    ambientFolder.add(debugOb, "ambientLight").onChange(() => {
      if (!debugOb.ambientLight) {
        scene.remove(naturalLights);
        return;
      }
      scene.add(naturalLights);
    });
    const directionalLightFolder = gui.addFolder("Direcional Light Options");
    directionalLightFolder.add(debugOb, "sunLight").onChange(() => {
      if (!debugOb.sunLight) {
        scene.remove(sunLight);
        return;
      }
      scene.add(sunLight);
    });
    directionalLightFolder.addColor(sunLight, "color");

    directionalLightFolder.add(sunLight, "intensity").min(0).max(6).step(0.1);

    const hemisphereLightFolder = gui.addFolder("Hemisphere Light Options");
    hemisphereLightFolder.add(debugOb, "hemisphere").onChange(() => {
      if (!debugOb.hemisphere) {
        scene.remove(sunGroundLight);
        return;
      }
      scene.add(sunGroundLight);
    });
    hemisphereLightFolder.addColor(sunGroundLight, "color");
    hemisphereLightFolder.addColor(sunGroundLight, "groundColor");
    hemisphereLightFolder
      .add(sunGroundLight, "intensity")
      .min(0)
      .max(6)
      .step(0.1);

    const pointLightFolder = gui.addFolder("Point Light Options");
    pointLightFolder.add(debugOb, "pointLight").onChange(() => {
      if (!debugOb.pointLight) {
        scene.remove(pointLight);
        return;
      }
      scene.add(pointLight);
    });
    pointLightFolder.addColor(pointLight, "color");
    pointLightFolder.add(pointLight, "intensity").min(0).max(6).step(0.1);
    pointLightFolder.add(pointLight, "distance").min(0).max(6).step(0.1);
    pointLightFolder.add(pointLight, "decay").min(0).max(6).step(0.1);
    pointLightFolder.add(pointLight.position, "x").min(-6).max(6).step(0.1);
    pointLightFolder.add(pointLight.position, "y").min(-6).max(6).step(0.1);
    pointLightFolder.add(pointLight.position, "z").min(-6).max(6).step(0.1);

    const RecAreaLightFolder = gui.addFolder("Rect Light Options");
    RecAreaLightFolder.add(debugOb, "recArea").onChange(() => {
      if (!debugOb.recArea) {
        scene.remove(recArea);
        return;
      }
      scene.add(recArea);
    });
    RecAreaLightFolder.addColor(recArea, "color");
    RecAreaLightFolder.add(recArea, "intensity").min(0).max(6).step(0.1);
    RecAreaLightFolder.add(recArea, "width").min(0).max(6).step(0.1);
    RecAreaLightFolder.add(recArea, "height").min(0).max(6).step(0.1);
    RecAreaLightFolder.add(recArea.position, "x").min(-6).max(6).step(0.1);
    RecAreaLightFolder.add(recArea.position, "y").min(-6).max(6).step(0.1);
    RecAreaLightFolder.add(recArea.position, "z").min(-6).max(6).step(0.1);
    
    const spotLightFolder = gui.addFolder("Spot Light Options");
    spotLightFolder.add(debugOb, "spotLight").onChange(() => {
      if (!debugOb.spotLight) {
        scene.remove(spot);
        return;
      }
      scene.add(spot);
    });
    spotLightFolder.addColor(spot, "color");
    spotLightFolder.add(spot, "intensity").min(0).max(6).step(0.1);
    spotLightFolder.add(spot, "distance").min(0).max(6).step(0.1);
    spotLightFolder.add(spot, "angle").min(0).max(1).step(0.01);
    spotLightFolder.add(spot, "penumbra").min(0).max(1).step(0.1);
    spotLightFolder.add(spot, "decay").min(0).max(6).step(0.1);
    spotLightFolder.add(spot.position, "x").min(-6).max(6).step(0.1);
    spotLightFolder.add(spot.position, "y").min(-6).max(6).step(0.1);
    spotLightFolder.add(spot.position, "z").min(-6).max(6).step(0.1);
    spotLightFolder.add(spot.target.position, "x").min(-6).max(6).step(0.1);
    spotLightFolder.add(spot.target.position, "y").min(-6).max(6).step(0.1);
    spotLightFolder.add(spot.target.position, "z").min(-6).max(6).step(0.1);
    
  };

  debugLil();

  w.addEventListener("resize", (event) => {
    camera.aspect = w.innerWidth / w.innerHeight;
    camera.updateProjectionMatrix();

    render.setSize(w.innerWidth, w.innerHeight);
    render.setPixelRatio(Math.min(w.devicePixelRatio, 2));
    scene.updateMatrix();
  });
})(document, window);
