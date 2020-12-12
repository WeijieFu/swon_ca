import * as THREE from 'three';


class SceneInit {
    constructor(rootEl){
        this.root = rootEl;
        this.width = rootEl.clientWidth;
        this.height = rootEl.clientHeight;

        this.hill = null;
        this.theta = 0.001;
       
        this.background = 0x000000;

        this.canvas = document.createElement('canvas');
       
       
        this.init();
        this.update();
        this.bindEvents();

        this.loadModel();
        // this.addObjects();
      
    }

    init(){
        this.initScene();
        this.initLights();
        this.initCamera();
        this.initRenderer();
        // this.initControls();


        this.root.appendChild(this.canvas);
    }

    initScene(){
        this.scene = new THREE.Scene();
    }
    
    initLights(){
        const ambient = new THREE.AmbientLight(0xFFFFFF, 0);

        const directional = new THREE.DirectionalLight(0xFFFFFF, 0.5);

        this.scene.add(ambient);

        this.scene.add(directional);
    }

    initCamera(){
        const aspect = this.width/this.height;
        this.camera = new THREE.OrthographicCamera( this.width / - 40, this.width / 40, this.height / 40, this.height / - 40, 10, 150 );

        // this.camera.z = 1000;
        this.camera.aspect = aspect;
        this.camera.updateProjectionMatrix();
    }

    initRenderer(){
        this.renderer = new THREE.WebGL1Renderer({antialias: true});
        this.renderer.setSize(this.width, this.height);
        this.renderer.setClearColor(this.background, 1);

        this.canvas = this.renderer.domElement;
    }

    initControls(){
        const OrbitControls = require('three-orbitcontrols');
        this.controls = new OrbitControls(
            this.camera,
            this.canvas
        );
        this.controls.minPolarAngle = (Math.PI * 1) / 6;
        this.controls.maxPolarAngle = (Math.Pi * 3) / 4;

        this.controls.smooth = true;
        this.controls.smoothspeed = 0.95;
        this.controls.maxDistance = 20;
        this.controls.minDistance = 12;

        this.controls.update();
    }

    render(){
        this.camera.lookAt(this.scene.position);
        this.renderer.render(this.scene, this.camera);
    }

    update(){
        requestAnimationFrame(()=> this.update());


        
        if(this.cube){
            this.cube.rotation.y += 0.01;
            this.cube.rotation.z += 0.01;
        }

        if(Math.abs(this.theta)>0.001){
            this.theta *= 0.95;
        }

        if(this.hill){
            this.hill.children[0].rotation.z -= this.theta;
            this.hill.children[1].rotation.z -= this.theta;
            this.hill.children[2].rotation.z -= this.theta;


           if(this.hill.children[2].rotation.z < -0.525){
               if (this.hill.children[1].position.y != -100){
                    this.hill.children[1].position.y = -100
               }
            
           }
           if(this.hill.children[2].rotation.z < -1.5695){
            if (this.hill.children[0].position.y != -100){
                 this.hill.children[0].position.y = -100
            }
         
        }
        }
       
        // this.controls.update();
        this.render();
       
    }

    bindEvents(){
        window.addEventListener('resize', ()=> this.onResize());
        window.addEventListener('wheel', this.onScroll.bind(this));
    }

    onResize(){
        this.width = this.root.clientWidth;
        this.height = this.root.clientHeight;

        this.renderer.setSize(this.width, this.height);

        this.camera.left = this.width / - 40, 
        this.camera.right = this.width / 40, 
        this.camera.top = this.height / 40, 
        this.camera.bottom = this.height / - 40
        this.camera.updateProjectionMatrix();
    }
    onScroll(e){
        this.hill.children[0].rotation.z -= e.deltaY/4500;
        this.hill.children[1].rotation.z -= e.deltaY/4500;
        this.hill.children[2].rotation.z -= e.deltaY/4500;
        
    }
    loadModel(){
        const GLTFLoader = require('three-gltf-loader');
        const assetPath = 'https://cdn.jsdelivr.net/gh/WeijieFu/swon_ca/assets/model/';
        this.loader = new GLTFLoader();

        this.loader.setPath(assetPath);

        this.loader.load('hills3.gltf', gltf=>{
            this.hill = gltf.scene;
            console.log(this.hill);
            this.hill.children[0].traverse(o=>{
                if(o.isMesh){
                    o.position.z += -50;
                    o.position.y += 5;
                    o.material = new THREE.MeshLambertMaterial();


                }
            })
            this.hill.children[1].traverse(o=>{
                if(o.isMesh){
                    o.position.z += -50;
                    o.position.y += 5;
                    o.material = new THREE.MeshLambertMaterial();


                }
            })
            this.hill.children[2].traverse(o=>{
                if(o.isMesh){
                    o.position.z += -50;
                    o.position.y += 5;
                    o.material = new THREE.MeshLambertMaterial();


                }
            })
            this.scene.add(this.hill);
           

        })
    }
    addObjects(){
        this.geometry = new THREE.BoxGeometry( 1, 1, 1 );
        this.material = new THREE.MeshNormalMaterial();
        this.cube = new THREE.Mesh( this.geometry, this.material );
        this.cube.position.y = 5;
        this.scene.add( this.cube );
    }
}

const sceneInit = args => new SceneInit(args);

export default sceneInit;