scene.onOverlapTile(SpriteKind.Player, sprites.castle.tileGrass2, function (sprite, location) {
    game.over(true)
})
let mySprite = sprites.create(img`
    . . . . f f f f . . . . 
    . . f f e e e e f f . . 
    . f f e e e e e e f f . 
    f f f f 4 e e e f f f f 
    f f f 4 4 4 e e f f f f 
    f f f 4 4 4 4 e e f f f 
    f 4 e 4 4 4 4 4 4 e 4 f 
    f 4 4 f f 4 4 f f 4 4 f 
    f e 4 d d d d d d 4 e f 
    . f e d d b b d d e f . 
    . f f e 4 4 4 4 e f f . 
    e 4 f b 1 1 1 1 b f 4 e 
    4 d f 1 1 1 1 1 1 f d 4 
    4 4 f 6 6 6 6 6 6 f 4 4 
    . . . f f f f f f . . . 
    . . . f f . . f f . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 75)
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(hex`1000100001010000000101000101010101000000020000000001010000000000010001000001000001010101010101000000000000010000000000000101010001010100000000010101010001000000010001000000000101010100010001000100010001010101010101000101010001000000010000000101010000000000000101010100010001000000010000010001010101000100000001010100000100000101000001000101010101000001000000010000010001000000010101010101000101000100010101000101010000010000010001000000000001000100010101010100010101010101010000000003010001000000000000000000010000000000`, img`
    2 2 . . . 2 2 . 2 2 2 2 2 . . . 
    . . . . . 2 2 . . . . . 2 . 2 . 
    . 2 . . 2 2 2 2 2 2 2 . . . . . 
    . 2 . . . . . . 2 2 2 . 2 2 2 . 
    . . . 2 2 2 2 . 2 . . . 2 . 2 . 
    . . . 2 2 2 2 . 2 . 2 . 2 . 2 . 
    2 2 2 2 . 2 2 . 2 2 2 . 2 . . . 
    2 . . . 2 2 2 . . . . . . 2 2 2 
    2 . 2 . 2 . . . 2 . . 2 . 2 2 2 
    2 . 2 . . . 2 2 2 . . 2 . . 2 2 
    . . 2 . 2 2 2 2 2 . . 2 . . . 2 
    . . 2 . 2 . . . 2 2 2 2 2 2 . 2 
    2 . 2 . 2 2 2 . 2 2 2 . . 2 . . 
    2 . 2 . . . . . 2 . 2 . 2 2 2 2 
    2 . 2 2 2 2 2 2 2 . . . . . 2 . 
    2 . . . . . . . . . 2 . . . . . 
    `, [myTiles.transparency16,myTiles.tile2,sprites.builtin.coral0,sprites.castle.tileGrass2], TileScale.Sixteen))
tiles.placeOnRandomTile(mySprite, sprites.builtin.coral0)
scene.cameraFollowSprite(mySprite)
info.startCountdown(60)
