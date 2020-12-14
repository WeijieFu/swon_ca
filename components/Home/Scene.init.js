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
       
        this.mouse ={};
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
        this.point = new THREE.PointLight(0xFFFFFF, 0.5, 100);
        const directional = new THREE.DirectionalLight(0xFFFFFF, 0.5);
        directional.position.z = -100;
        // this.point.position.set(0, -15, -40);
        this.scene.add(ambient);
        this.scene.add(this.point);
        this.scene.add(directional);
    }

    initCamera(){
        const aspect = this.width/this.height;
        this.camera = new THREE.OrthographicCamera( this.width / (this.height < 1000? -40 : -80), this.width / (this.height < 1000? 40 : 80), this.height / (this.height < 1000? 40 : 80), this.height / (this.height < 1000? -40 : -80), 10, 150 );

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
       
       
        this.render();
       
    }

    bindEvents(){
        window.addEventListener('resize', ()=> this.onResize());
        window.addEventListener('wheel', this.onScroll.bind(this));
        window.addEventListener('mousemove', this.onMouseMove.bind(this));
    }

    onResize(){
        this.width = this.root.clientWidth;
        this.height = this.root.clientHeight;

        this.renderer.setSize(this.width, this.height);
        
        this.camera.left = this.width / (this.height < 1000? -40 : -80); 
        this.camera.right = this.width / (this.height < 1000? 40 : 80); 
        this.camera.top = this.height / (this.height < 1000? 40 : 80);
        this.camera.bottom = this.height /(this.height < 1000? -40 : -80);

        this.camera.updateProjectionMatrix();
    }
    onScroll(e){
        this.hill.children[0].rotation.z -= e.deltaY/4500;
        this.hill.children[1].rotation.z -= e.deltaY/4500;
        this.hill.children[2].rotation.z -= e.deltaY/4500;
        
    }

    onMouseMove(e){
        let that = this;
        e.preventDefault();
	    this.mouse.x = e.clientX;
	    this.mouse.y = e.clientY;
        let pos ={};
     
        pos.x = this.camera.left + (this.mouse.x / this.width)*(2*this.camera.right);
        pos.y = this.camera.top - (this.mouse.y / this.height)*(2*this.camera.top);
        pos.z = -20;
        this.point.position.set(pos.x, pos.y, pos.z);


    }
    loadModel(){
        const GLTFLoader = require('three-gltf-loader');
        const assetPath = 'https://cdn.jsdelivr.net/gh/WeijieFu/swon_ca/assets/model/';
        this.loader = new GLTFLoader();

        this.loader.setPath(assetPath);

        this.loader.load('hills3.gltf', gltf=>{
            this.hill = gltf.scene;

            this.hill.children[0].traverse(o=>{
                if(o.isMesh){
                    o.position.z += -50;
                    o.position.y += 5;

                    o.geometry.clearGroups();
                    o.geometry.addGroup( 0, Infinity, 0 );
                    o.geometry.addGroup( 0, Infinity, 1 );
                    o.geometry.addGroup( 0, Infinity, 2 );

                    const material0 = new THREE.MeshLambertMaterial( {
                        color: 0xffffff,
                        visible: true
                    } );
                    const material1 = new THREE.MeshLambertMaterial( {
                        color: 0xffffff,
                        visible: true,
                        wireframe: true,
                        // transparent:true,
                        // opacity: 0.3
                    } );
                    const material2 = new THREE.MeshNormalMaterial( {
                        opacity: 0.5,
                        transparent: true,
                        visible: true
                    } );

                    o.material = [material0, material1, material2];
                    


                   

                    


                }
            })
            this.hill.children[1].traverse(o=>{
                if(o.isMesh){
                    o.position.z += -50;
                    o.position.y += 5;
                    
                    o.geometry.clearGroups();
                    o.geometry.addGroup( 0, Infinity, 0 );
                    o.geometry.addGroup( 0, Infinity, 1 );
                    o.geometry.addGroup( 0, Infinity, 2 );

                    const material0 = new THREE.MeshLambertMaterial( {
                        color: 0xffffff,
                        visible: true
                    } );
                    const material1 = new THREE.MeshLambertMaterial( {
                        color: 0xffffff,
                        visible: true,
                        wireframe: true,
                        // transparent:true,
                        // opacity: 1
                    } );
                    const material2 = new THREE.MeshNormalMaterial( {
                        opacity: 0.5,
                        transparent: true,
                        visible: true
                    } );

                    o.material = [material0, material1, material2];


                }
            })
            this.hill.children[2].traverse(o=>{
                if(o.isMesh){
                    o.position.z += -50;
                    o.position.y += 5;
                   
                    o.geometry.clearGroups();
                    o.geometry.addGroup( 0, Infinity, 0 );
                    o.geometry.addGroup( 0, Infinity, 1 );
                    o.geometry.addGroup( 0, Infinity, 2 );

                    const material0 = new THREE.MeshLambertMaterial( {
                        color: 0xffffff,
                        visible: true
                    } );
                    const material1 = new THREE.MeshLambertMaterial( {
                        color: 0xffffff,
                        visible: true,
                        wireframe: true,
                        // transparent:true,
                        // opacity: 0.3
                    } );
                    const material2 = new THREE.MeshNormalMaterial( {
                        opacity: 0.5,
                        transparent: true,
                        visible: true
                    } );

                    o.material = [material0, material1, material2];


                }
            })
            this.scene.add(this.hill);
        })
    }
    addObjects(){
        this.geometry = new THREE.BoxGeometry( 5, 5, 5 );
        this.material = new THREE.MeshNormalMaterial();
        

        
        this.cube = new THREE.Mesh( this.geometry, this.material );
        this.cube.position.set(0,0,-50);
        this.scene.add( this.cube );
    }
}

const sceneInit = args => new SceneInit(args);

export default sceneInit;