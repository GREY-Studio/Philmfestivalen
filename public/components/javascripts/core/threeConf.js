
define(['jquery', 'three'], function($, THREE) {

  var mouseX = 0,
      mouseY = 0,
      scene = new THREE.Scene(),
      renderer = new THREE.WebGLRenderer(),
      camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, .1, 1000),
      axis = new THREE.AxisHelper(30);

  camera.position.set( 0, 0, 400 );
  renderer.setPixelRatio( window.devicePixelRatio );
  scene.add(axis);

  var cubeGEO = new THREE.BoxGeometry(20,20,20),
      cubeMAT = new THREE.MeshBasicMaterial({color:0xdddddd, wireframe:true}),
      cube = new THREE.Mesh(cubeGEO, cubeMAT);

  cube.position.x = 0;
  cube.position.y = 0;
  cube.position.z = 0;

  scene.add(cube);

  $('.WebGL').append(renderer.domElement);

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
  
});
