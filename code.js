var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["5c85a142-c6b8-466a-a411-abba4a643306"],"propsByKey":{"5c85a142-c6b8-466a-a411-abba4a643306":{"name":"bee","sourceUrl":"assets/v3/animations/DVmJNv1gnfguefRSIrgeUIkRHfnZO6E4LrZxvSriBtQ/5c85a142-c6b8-466a-a411-abba4a643306.png","frameSize":{"x":63,"y":50},"frameCount":1,"looping":true,"frameDelay":4,"version":"VyPPOpOgw.WC63EF1JSmJrovupbslgOS","loadedFromSource":true,"saved":true,"sourceSize":{"x":63,"y":50},"rootRelativePath":"assets/v3/animations/DVmJNv1gnfguefRSIrgeUIkRHfnZO6E4LrZxvSriBtQ/5c85a142-c6b8-466a-a411-abba4a643306.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Click on the bee to make it stop flying and fall down.
createEdgeSprites();
var bee = createSprite(200, 200);
bee.setAnimation("bee");
bee.x = 400;
bee.y = randomNumber(0, 400);
bee.velocityX = randomNumber(-5, -1);
function draw() {
  background("white");
  drawSprites();
  if (mousePressedOver(bee)) {
    bee.pause();
    bee.velocityX = 0;
    bee.velocityY = 5;
  }
  if (bee.x < 0 || bee.y > 400) {
    bee.play();
    bee.x = 400;
    bee.y = randomNumber(0, 400);
    bee.velocityX = randomNumber(-5, -1);
    bee.velocityY = 0;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
