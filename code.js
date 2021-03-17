var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["eeefd190-f9db-4839-9582-699f873e81f3","1a69bc80-2007-4e03-8070-a333980149ab","4c699032-d909-4fd4-95de-5fc2bd54bdbf","f17e34c2-192b-4762-8bc0-6b7e7e10fe30","36a9f5fb-9525-4933-a0b4-7993f4be7869","e7504e88-6403-4941-88ca-2746b1e18cb9","207c9abd-c5d8-418e-9826-1b73760f6293","d6b98a88-275b-4e13-9c4a-7dba8e20877f","9eab22e4-f4a6-474e-be08-f24d1b322d9b"],"propsByKey":{"eeefd190-f9db-4839-9582-699f873e81f3":{"name":"gameplaybirds_08_1","sourceUrl":"assets/api/v1/animation-library/gamelab/OaNAfn9hqGScu9f9ShBI_jkxwAatrWqg/category_animals/gameplaybirds_08.png","frameSize":{"x":308,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"OaNAfn9hqGScu9f9ShBI_jkxwAatrWqg","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":308,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/OaNAfn9hqGScu9f9ShBI_jkxwAatrWqg/category_animals/gameplaybirds_08.png"},"1a69bc80-2007-4e03-8070-a333980149ab":{"name":"gamefood01_1","sourceUrl":"assets/api/v1/animation-library/gamelab/L9jm5Y4z.D0AXv6kP96ZS8khLd19NN7c/category_food/gamefood01.png","frameSize":{"x":400,"y":382},"frameCount":1,"looping":true,"frameDelay":2,"version":"L9jm5Y4z.D0AXv6kP96ZS8khLd19NN7c","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":382},"rootRelativePath":"assets/api/v1/animation-library/gamelab/L9jm5Y4z.D0AXv6kP96ZS8khLd19NN7c/category_food/gamefood01.png"},"4c699032-d909-4fd4-95de-5fc2bd54bdbf":{"name":"ground_stone_broken_1","sourceUrl":"assets/api/v1/animation-library/gamelab/gFD_mpRrS_YETr33GMLMfeUWuqKvqhhO/category_game_blocks/ground_stone_broken.png","frameSize":{"x":380,"y":94},"frameCount":1,"looping":true,"frameDelay":2,"version":"gFD_mpRrS_YETr33GMLMfeUWuqKvqhhO","categories":["game_blocks"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":94},"rootRelativePath":"assets/api/v1/animation-library/gamelab/gFD_mpRrS_YETr33GMLMfeUWuqKvqhhO/category_game_blocks/ground_stone_broken.png"},"f17e34c2-192b-4762-8bc0-6b7e7e10fe30":{"name":"ore_coal_1","sourceUrl":"assets/api/v1/animation-library/gamelab/RVRggQ8PBfFrgvBQsAw_9S265AaDvQv7/category_game_blocks/ore_coal.png","frameSize":{"x":128,"y":128},"frameCount":1,"looping":true,"frameDelay":2,"version":"RVRggQ8PBfFrgvBQsAw_9S265AaDvQv7","categories":["game_blocks"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":128,"y":128},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RVRggQ8PBfFrgvBQsAw_9S265AaDvQv7/category_game_blocks/ore_coal.png"},"36a9f5fb-9525-4933-a0b4-7993f4be7869":{"name":"sunshine_showers_1","sourceUrl":"assets/api/v1/animation-library/gamelab/2RNMR6.K0ycRUzGH2f_.KDC56AlzdXPI/category_backgrounds/sunshine_showers.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"2RNMR6.K0ycRUzGH2f_.KDC56AlzdXPI","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/2RNMR6.K0ycRUzGH2f_.KDC56AlzdXPI/category_backgrounds/sunshine_showers.png"},"e7504e88-6403-4941-88ca-2746b1e18cb9":{"name":"background_landscape07_1","sourceUrl":"assets/api/v1/animation-library/gamelab/oy1yIltrLNQf4iGHFFcLGgYTezk0.f73/category_backgrounds/background_landscape07.png","frameSize":{"x":400,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"oy1yIltrLNQf4iGHFFcLGgYTezk0.f73","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/oy1yIltrLNQf4iGHFFcLGgYTezk0.f73/category_backgrounds/background_landscape07.png"},"207c9abd-c5d8-418e-9826-1b73760f6293":{"name":"textGameOver_1","sourceUrl":"assets/api/v1/animation-library/gamelab/LBlP81tVFOe5pivbH48aq_4zoApgk97p/category_game_blocks/textGameOver.png","frameSize":{"x":412,"y":78},"frameCount":1,"looping":true,"frameDelay":2,"version":"LBlP81tVFOe5pivbH48aq_4zoApgk97p","categories":["game_blocks"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":412,"y":78},"rootRelativePath":"assets/api/v1/animation-library/gamelab/LBlP81tVFOe5pivbH48aq_4zoApgk97p/category_game_blocks/textGameOver.png"},"d6b98a88-275b-4e13-9c4a-7dba8e20877f":{"name":"sticker_21_1","categories":["stickers"],"frameCount":1,"frameSize":{"x":250,"y":250},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:38:57 UTC","pngLastModified":"2021-01-05 19:38:37 UTC","version":"_kpwQra2QlXpIDLpNDiKcrQxbd6.8BN1","sourceUrl":"assets/api/v1/animation-library/gamelab/_kpwQra2QlXpIDLpNDiKcrQxbd6.8BN1/category_stickers/sticker_21.png","sourceSize":{"x":250,"y":250},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/_kpwQra2QlXpIDLpNDiKcrQxbd6.8BN1/category_stickers/sticker_21.png"},"9eab22e4-f4a6-474e-be08-f24d1b322d9b":{"name":"sticker_45_1","categories":["stickers"],"frameCount":1,"frameSize":{"x":172,"y":162},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:37:58 UTC","pngLastModified":"2021-01-05 19:39:14 UTC","version":"HuAb3L8ZYr3yntKFl3nD8whCdxC1nt.i","sourceUrl":"assets/api/v1/animation-library/gamelab/HuAb3L8ZYr3yntKFl3nD8whCdxC1nt.i/category_stickers/sticker_45.png","sourceSize":{"x":172,"y":162},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/HuAb3L8ZYr3yntKFl3nD8whCdxC1nt.i/category_stickers/sticker_45.png"}}};
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

var bg1=createSprite(200,224,400,400);
bg1.setAnimation("background_landscape07_1");
var gm1=createSprite(200,200,70,30);
gm1.setAnimation("textGameOver_1");
gm1.scale=0.9;
var lives=3;
var gameState="start";
var score = 0;
var bird = createSprite(200,200);
bird.setAnimation("gameplaybirds_08_1");
bird.scale = 0.14; 
var foodGroup=new Group();
var enemyGroup=new Group();
var i1=createSprite(30,30,50,50);
i1.setAnimation("sticker_45_1");
i1.scale=0.2;
var i2=createSprite(80,50,50,50);
i2.setAnimation("sticker_45_1");
i2.scale=0.2;
var i3=createSprite(38,70,50,50);
i3.setAnimation("sticker_45_1");
i3.scale=0.1;
function draw() {
  //refresh the page
background(254, 142, 144);
if(gameState==="start"){
  
   gm1.visible=false;
   bg1.visible=false;
   bird.visible=false;
   stroke("blue");
   strokeWeight(3);
   textSize(20);
   textFont("Times New Roman");
   text("SAVE THE BIRD",130,50);
   stroke("black");
   strokeWeight(1);
   textSize(12);
   textFont("Times New Roman");
   text(".KEEP THE BIRD HEALTHY",100,110);
   text(".COLLECT ALL THE FOOD",100,130);
   text(".DONT LET THE LIVES DECREASE TO 0",100,150);
   text("PRESS SPACE TO START THE GAME",100,200);
  
}
  if(keyDown("space") && gameState==="start"){
   gameState="play";

} 
  

 if (gameState==="play"){
   bird.visible=true;
   bg1.visible=true;
   i1.visible=false;
   stroke("black");
   strokeWeight(1);
   text("LIVES :"+lives,10,12);
   text("SCORE :"+score,10,24);
   
   spawnFood();
   spawnEnemy();
  
   if(keyDown("right")){
   bird.x = bird.x+2;
}
if(keyDown("left")){
  bird.x = bird.x-2;
}
if(keyDown("up")){
  bird.y = bird.y-2;
}
if(keyDown("down")){
  bird.y = bird.y+2;
}
if(bird.isTouching(foodGroup))
{
  score=score+2;
  foodGroup.destroyEach();
}
if(bird.isTouching(enemyGroup)){
  lives=lives-1;
  enemyGroup.destroyEach();
}
  if(lives===0)
{
  gameState="end";
}
 }
 if(gameState==="end")
{
  background("black");
  gm1.visible=true;
  bg1.visible=false;
  bird.visible=false;
}
  drawSprites();
}
function spawnFood(){
  if(World.frameCount%200===0)
  {
    var food = createSprite(randomNumber(50,350),randomNumber(30,60));
    food.setAnimation("gamefood01_1");
    food.scale = 0.1;
    food.velocityY =4+6*score/20;
    foodGroup.add(food);
  }
}
function spawnEnemy(){
  if(World.frameCount%40===0){
    var enemy1 = createSprite(randomNumber(-5,10),randomNumber(30,400));
    enemy1.setAnimation("ore_coal_1");
    enemy1.velocityX = 5+6*score/20;
    enemy1.scale = 0.35;
    enemyGroup.add(enemy1);
    //enemy1.debug = true;
    enemy1.setCollider("circle",0,0,10);
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
