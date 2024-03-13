import * as THREE from 'three';
import GL from '../GL.js';

export default class Renderer {
    constructor() {
        this.gl = new GL();
        this.canvas = this.gl.canvas;
        this.sizes = this.gl.sizes;
        this.scene = this.gl.scene;
        this.camera = this.gl.camera;

        this.setInstance();
    }

    setInstance() {
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true,
            alpha: true
        });
        this.instance.setPixelRatio(this.sizes.pixelRatio);
        this.instance.setSize(this.sizes.width, this.sizes.height);
    }

    resize() {
        this.instance.setSize(this.sizes.width, this.sizes.height);
        this.instance.setPixelRatio(this.sizes.pixelRatio);
    }

    update() {
        this.instance.render(this.scene, this.camera.instance);
    }
}