import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import GL from '../GL.js';

export default class Camera {
    constructor() {
        this.gl = new GL();
        this.canvas = this.gl.canvas;
        this.sizes = this.gl.sizes;
        this.scene = this.gl.scene;

        this.setInstance();
        this.setOrbitControls();
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(80, this.sizes.width / this.sizes.height, 10, 1000);
        this.instance.position.z = 600;
        this.instance.fov = 2 * Math.atan((this.sizes.height / 2) / 600) * 180 / Math.PI;
        this.scene.add(this.instance);
    }
    
    setOrbitControls() {
        this.controls = new OrbitControls(this.instance, this.canvas);
        this.controls.target.set(0, 0, 0);
        this.controls.enabled = false;
    }
    
    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height;
        this.instance.updateProjectionMatrix();
    }

    update() {
        this.controls.update();
    }
}