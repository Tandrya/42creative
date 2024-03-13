import * as THREE from 'three';

import Camera from "./Utils/Camera.js";
import Sizes from "./Utils/Sizes.js";
import Time from "./Utils/Time.js";
import Renderer from './Utils/Renderer.js';

let instance = null;

export default class GL {
    constructor(canvas, container, layout) {

        if (instance)
            return instance;

        instance = this;
        window.gl = this;
        this.canvas = canvas;
        this.container = container;
        this.layout = layout;

        this.sizes = new Sizes();
        this.time = new Time();
        this.scene = new THREE.Scene();
        this.camera = new Camera();
        this.renderer = new Renderer();

        this.sizes.on('resize', () => {
            this.resize()
        });

        this.time.on('tick', () => {
            this.update()
        });

        this.addPlane();
    }

    addPlane() {
        this.geometry = new THREE.PlaneGeometry(300, 300, 100, 100);
        this.material = new THREE.MeshBasicMaterial({ color: 0x505050 });
        this.mesh = new THREE.Mesh(this.geometry, this.material);
        this.scene.add(this.mesh);
    }

    resize() {
        this.camera.resize();
        this.renderer.resize();
    }

    update() {
        this.camera.update();
        this.renderer.update();
    }
}