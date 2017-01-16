
//------------------------------------//
// Three Config
//------------------------------------//

define(['jquery', 'three', 'angular'], function($, THREE, angular) {

  (function(window, document, undefined) {

    var mouseX = 0,
        mouseY = 0,
        scene = new THREE.Scene(),
        renderer = new THREE.WebGLRenderer({alpha:true}),
        camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, .1, 1000);

    camera.position.set( 0, 0, 400 );
    renderer.setPixelRatio( window.devicePixelRatio );

    var particles = new THREE.Geometry;

    for (var p = 0; p <= 2000; p++) {
      var particle = new THREE.Vector3(Math.random() * 500 - 250, Math.random() * 500 - 250, Math.random() * 500 - 250);
      particles.vertices.push(particle);
    }

    var particleMaterial = new THREE.ParticleBasicMaterial({ color: 0xffffff, size: 2 });

    var particleSystem = new THREE.ParticleSystem(particles, particleMaterial);

    scene.add(particleSystem);


    /*
    THREE.ImageUtils.crossOrigin = '';
    var mapOverlay = THREE.ImageUtils.loadTexture('https://i.ytimg.com/vi/XV9LHg2dHa4/hqdefault.jpg');
    */
    /*
    var cubeGEO = new THREE.BoxGeometry(20,20,20),
        cubeMAT = new THREE.MeshBasicMaterial({color: 0xdddddd, wireframe: true}), // + map: mapOverlay
        cube = new THREE.Mesh(cubeGEO, cubeMAT);

    cube.position.x = 0;
    cube.position.y = 0;
    cube.position.z = 0;

    scene.add(cube);
    */

    /*
    var cylinderGEO = new THREE.CylinderGeometry(20,10,20),
        cylinderMAT = new THREE.MeshBasicMaterial({color:0xdddddd, wireframe:true}),
        cylinder = new THREE.Mesh(cylinderGEO, cylinderMAT);

    cylinder.position.x = 0;
    cylinder.position.y = 0;
    cylinder.position.z = 0;

    scene.add(cylinder);
    */

    $('.ejo-WebGL').append(renderer.domElement);

    function onDocumentMouseMove(e) {
  		var windowHalfX = window.innerWidth / 2,
          windowHalfY = window.innerHeight / 2;

    	mouseX = ( event.clientX - windowHalfX ) / 2;
  		mouseY = ( event.clientY - windowHalfY ) / 2;
  	}

    function size(e) {
      renderer.setSize(window.innerWidth, window.innerHeight);
    }

    function animate() {
  		requestAnimationFrame( animate );

  		camera.position.x += ( mouseX - camera.position.x ) * .05;
  		camera.position.y += ( -mouseY - camera.position.y ) * .05;
  		camera.lookAt( scene.position );

  		renderer.render( scene, camera );
  	}

    size();
    animate();

    $(window).on('resize', size);
    $(document).on('mousemove', onDocumentMouseMove);

  })(window, document);

});
