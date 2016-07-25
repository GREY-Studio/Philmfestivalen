
define(['jquery', 'three'], function($, THREE) {

  var mouseX = 0, mouseY = 0;

  var scene = new THREE.Scene();

  var camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, .1, 1000);
  camera.position.set( 0, 0, 400 );

  var renderer = new THREE.WebGLRenderer();

  renderer.setPixelRatio( window.devicePixelRatio );

  size();
  $(window).on('resize', size);
  $(document).on('mousemove', onDocumentMouseMove);

  function size(e) {
    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  var axis = new THREE.AxisHelper(30);

  scene.add(axis);

  var cubeGEO = new THREE.BoxGeometry(20,20,20);
  var cubeMAT = new THREE.MeshBasicMaterial({color:0xdddddd, wireframe:true});
  var cube = new THREE.Mesh(cubeGEO, cubeMAT);

  cube.position.x = 0;
  cube.position.y = 0;
  cube.position.z = 0;

  scene.add(cube);


  //camera.lookAt(scene.position);

  $('.WebGL').append(renderer.domElement);

  function onDocumentMouseMove( event ) {

		var windowHalfX = window.innerWidth / 2;
		var windowHalfY = window.innerHeight / 2;
		mouseX = ( event.clientX - windowHalfX ) / 2;
		mouseY = ( event.clientY - windowHalfY ) / 2;

	}

  function animate() {

		requestAnimationFrame( animate );

		camera.position.x += ( mouseX - camera.position.x ) * .05;
		camera.position.y += ( -mouseY - camera.position.y ) * .05;
		camera.lookAt( scene.position );

		renderer.render( scene, camera );

	}

  animate();



});
