namespace SpriteKind {
    export const cockpit = SpriteKind.create()
    export const grassPlanet = SpriteKind.create()
    export const volcanicPlanet = SpriteKind.create()
    export const StatusBar = SpriteKind.create()
    export const sun = SpriteKind.create()
    export const deadAlien1 = SpriteKind.create()
    export const friendlyCreature = SpriteKind.create()
    export const plant = SpriteKind.create()
    export const deadAlien2 = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    vxx = 0
    vyy = 0 - bulletSpeed
    playerFacing = "n"
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.grassPlanet, function (sprite, otherSprite) {
    if (gameStateLocation == "space") {
        gameStateLocation = "planet"
        Render.moveWithController(0, 0, 0)
        Render.setViewMode(ViewMode.tilemapView)
        tiles.setCurrentTilemap(tilemap`lushPlanet`)
        sprites.destroyAllSpritesOfKind(SpriteKind.grassPlanet)
        sprites.destroyAllSpritesOfKind(SpriteKind.volcanicPlanet)
        sprites.destroyAllSpritesOfKind(SpriteKind.sun)
        mySprite = sprites.create(assets.image`astronaut`, SpriteKind.Player)
        controller.moveSprite(mySprite, 70, 70)
        sprites.destroy(cockpit)
        scene.cameraFollowSprite(mySprite)
        for (let value of tiles.getTilesByType(assets.tile`myTile5`)) {
            tree = sprites.create(img`
                ................86..................
                ...........6688867886...............
                ...........8666555688868............
                ............865555765768............
                .........688667575576688............
                ........67565575775778666...........
                .........6776667767666868...........
                ..........866667667657688...........
                .........8666666666667578...........
                ........667766666666666676..........
                .......65566667666776667756.........
                ......886667576676557666688.........
                .....55766757665567777666568........
                ....6576666666757667776666756.......
                .....8667776667766676675556776......
                ......8757666666667776777576688.....
                ....6887765776677657555577776776....
                ..8866666657767575577577766666778...
                .86666666777665565777566666576668...
                ..88677666666777677677666667776668..
                ..86776677666666666666667776666668..
                886666677766667666666776675766668...
                6668666676667766767767766677666668..
                88866666666777677677667666666776668.
                .86668866666766776776666667766666668
                .86688666666666776666667667776666688
                .668866666666666666666677666666688..
                ..8866686666666666677667776666668...
                ...866886666666666677667776666668...
                ...86886668666666667666666666888....
                ....88866886686666666666666668......
                ......86886668666866668666868.......
                ......88866688668866688866888.......
                ........8888888688888ce868..........
                ..............e88e88.ec.8...........
                ...............eeee..e..............
                ...............ceef.ce..............
                ...............ceefcec..............
                ...............feefce...............
                ..............ffceeec...............
                ..............ffcceec...............
                .............ffceefcee..............
                ............ffceefe.ccee............
                ...........f...efce.................
                .............eec..ce................
                ............c......ce...............
                .............c......................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                ....................................
                `, SpriteKind.plant)
            tiles.placeOnRandomTile(tree, assets.tile`myTile5`)
        }
        for (let value of tiles.getTilesByType(sprites.castle.tileDarkGrass1)) {
            Alien2 = sprites.create(img`
                ..............................
                ..............................
                .....................bbbd.....
                ....................b..ccbd...
                ..............c.........cbbdd.
                ...............cc..c......cbd.
                ...............ccc..c.c...ccb.
                ..........c...c.ccbccccccccbdd
                ..........ccccccbbb555555cdddd
                ............ccbbb5555555555ddd
                .........cccbb5555555555555ddc
                ...c..cc..cb555dd5555ff155555c
                ...cccccc.b5555dddd555ff55dc5c
                ....cb.ccb5555ddddd5555555555c
                ..cccd.cb5555dddbbdd55bb13bbc.
                ..cccc.c555555dd55bd55bb3335c.
                ...ccccc555555dd555cdd55b335c.
                ccccbcc5555555ddb55bdcdd5555c.
                cddddddddd55dbccbb55cccccccc..
                cbdddddddd555dbbbb55c5c.......
                .ccbdddbbdd555cbcbcccc........
                ...cccbbbbdd55ccdbbbc.........
                ......cccbdddbccccccc.........
                ........cdd555dc..............
                `, SpriteKind.friendlyCreature)
            tiles.placeOnRandomTile(Alien2, sprites.castle.tileDarkGrass1)
            sprites.setDataNumber(Alien2, "health", 10)
        }
    }
})
sprites.onOverlap(SpriteKind.friendlyCreature, SpriteKind.friendlyCreature, function (sprite, otherSprite) {
    otherSprite.setVelocity(0, 0)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (gameStateLocation == "planet") {
        if (playerFacing == "n") {
            projectile = sprites.createProjectileFromSprite(img`
                5 5 
                5 5 
                f f 
                `, mySprite, vxx, vyy)
        }
        if (playerFacing == "s") {
            projectile = sprites.createProjectileFromSprite(assets.image`bulletNS`, mySprite, vxx, vyy)
        }
        if (playerFacing == "e") {
            projectile = sprites.createProjectileFromSprite(img`
                f 5 5 
                f 5 5 
                `, mySprite, vxx, vyy)
        }
        if (playerFacing == "w") {
            projectile = sprites.createProjectileFromSprite(assets.image`bulletEW`, mySprite, vxx, vyy)
        }
    } else {
        projectile2 = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . 5 . . . . . . . . . . . . 5 . 
            . 5 . . . . . . . . . . . . 5 . 
            . 5 . . . . . . . . . . . . 5 . 
            `, mySpaceShip, Render.getAttribute(Render.attribute.dirX) * 100, Render.getAttribute(Render.attribute.dirY) * 100)
    }
})
tiles.onMapLoaded(function (tilemap2) {
    for (let value of tiles.getTilesByType(assets.tile`myTile`)) {
        planet = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 8 d d 8 . . . . . . 
            . . . . 8 8 d d d d 8 8 . . . . 
            . . . 6 6 d d 8 8 d d 8 6 . . . 
            . . 8 6 6 6 d 8 8 d d d 6 9 . . 
            . . 6 6 6 6 6 8 8 8 d d 1 6 . . 
            . 8 6 6 6 6 8 8 8 8 8 6 1 6 9 . 
            . 8 6 6 6 8 8 8 8 8 8 8 7 6 9 . 
            . 8 8 6 6 8 8 8 8 8 8 8 8 6 9 . 
            . 8 8 6 6 8 8 8 8 8 8 8 8 6 9 . 
            . . 8 8 6 6 8 8 8 8 8 8 8 6 . . 
            . . 8 8 8 6 8 8 8 8 8 8 8 9 . . 
            . . . 8 8 8 8 8 8 8 8 8 6 . . . 
            . . . . 8 8 8 8 8 8 8 6 . . . . 
            . . . . . . 8 8 8 6 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.grassPlanet)
        tiles.placeOnTile(planet, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`planet2`)) {
        planet = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . e e 4 4 . . . . . . 
            . . . . 4 e e e e 4 4 4 . . . . 
            . . . e e e e 4 4 e 4 4 4 . . . 
            . . 4 e e e e 2 e 2 e e 4 4 . . 
            . . e e e e e 2 2 2 e e e 4 . . 
            . 4 e e e e 2 1 2 2 2 e e 4 4 . 
            . 4 e e e 2 d 2 4 4 1 e e 4 4 . 
            . 4 4 e e 2 2 4 4 4 e 4 4 4 e . 
            . 4 2 e e 2 2 4 4 4 4 4 4 e e . 
            . . 4 2 e e 2 4 4 e e 4 2 e . . 
            . . 4 2 2 e 2 2 e e 4 2 4 4 . . 
            . . . 4 2 2 d 2 2 2 2 2 4 . . . 
            . . . . 4 4 1 d 2 2 4 4 . . . . 
            . . . . . . 4 4 4 4 . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.volcanicPlanet)
        tiles.placeOnTile(planet, value)
    }
    for (let value of tiles.getTilesByType(assets.tile`planet0`)) {
        planet = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . 2 2 5 5 . . 5 . . . 
            . 5 5 . 5 2 2 2 2 5 5 5 . . . . 
            . 5 . 2 2 2 2 5 5 2 5 5 5 . . . 
            . . 5 2 2 2 2 4 2 4 2 2 5 5 . . 
            . . 2 2 2 2 2 4 4 4 2 2 2 5 . . 
            . 5 2 2 2 2 4 1 4 4 4 2 2 5 5 . 
            . 5 2 2 2 4 d 4 5 5 1 2 2 5 5 . 
            . 5 5 2 2 4 4 5 5 5 2 5 5 5 2 . 
            . 5 4 2 2 4 4 5 5 5 5 5 5 2 2 . 
            . . 5 4 2 2 4 5 5 2 2 5 4 2 . . 
            . . 5 4 4 2 4 4 2 2 5 4 5 5 . . 
            . . . 5 4 4 d 4 4 4 4 4 5 . . . 
            . . . . 5 5 1 d 4 4 5 5 . . 5 . 
            . . 5 5 . . 5 5 5 5 . . 5 5 . . 
            . . . . 5 . . . . . . . . . . . 
            `, SpriteKind.sun)
        tiles.placeOnTile(planet, value)
    }
    Render.takeoverSceneSprites()
})
function goToSpace () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    sprites.destroyAllSpritesOfKind(SpriteKind.deadAlien1)
    sprites.destroyAllSpritesOfKind(SpriteKind.deadAlien2)
    sprites.destroyAllSpritesOfKind(SpriteKind.friendlyCreature)
    sprites.destroyAllSpritesOfKind(SpriteKind.plant)
    gameStateLocation = "space"
    cockpit = sprites.create(assets.image`cockpit`, SpriteKind.cockpit)
    cockpit.setFlag(SpriteFlag.RelativeToCamera, true)
    mySpaceShip = Render.getRenderSpriteVariable()
    tiles.loadMap(tiles.createMap(tilemap`level2`))
    Render.setViewMode(ViewMode.raycastingView)
    Render.getRenderSpriteInstance().setScale(0.1, ScaleAnchor.Middle)
    Render.setSpriteAttribute(mySpaceShip, RCSpriteAttribute.ZOffset, 8)
    mySpaceShip.setPosition(75, 55)
    sprites.destroy(mySprite)
    Render.moveWithController(1, 1, 0)
}
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    vxx = 0 - bulletSpeed
    vyy = 0
    playerFacing = "w"
})
sprites.onCreated(SpriteKind.friendlyCreature, function (sprite) {
    randomTree = sprites.allOfKind(SpriteKind.plant)._pickRandom()
    sprites.setDataSprite(sprite, "favoriteTree", randomTree)
    console.log(randomTree)
    sprite.follow(randomTree, 25)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.friendlyCreature, function (sprite, otherSprite) {
    sprites.changeDataNumberBy(otherSprite, "health", -1)
    for (let value of sprites.allOfKind(SpriteKind.friendlyCreature)) {
        sprites.setDataString(value, "enemyState", "attack")
    }
    otherSprite.startEffect(effects.spray, 100)
    sprites.destroy(sprite)
    if (sprites.readDataNumber(otherSprite, "health") <= 0) {
        otherSprite.setKind(SpriteKind.deadAlien2)
        otherSprite.startEffect(effects.spray, 200)
        otherSprite.setImage(img`
            ..............................
            ..............................
            .....................bbbd.....
            ..............c.....b..ccbd...
            ...............cc..c....cbbdd.
            ...............ccc........cbd.
            ..........c...c.ccbcc.c...ccb.
            ..........ccccccbbb5cccccccbdd
            ............ccbbb55555555cdddd
            .........cccbb5555552255555ddb
            ...ccbcccbcb555dd5545555d55dbc
            ..ccccccc5b5452dddd55bbb55555c
            ..cccc.55554554d5dd55dddd5dc5c
            ...cccc5d45db4dddddd55555d555c
            ......cbd255d2d5bddd555bdbbbc.
            ...cccbd2d555ccb5bdd5bbbbccc..
            .ccbdddddddddbb555cdbbccc.....
            cbddddbbdd55bb5555bbbc........
            cddddbbbdddbcb555bbd..........
            ccccbccdd555cccbbbbc..........
            .......bbbbbcccccccc..........
            ......bbbbbbfffffc............
            ......bbbbbccccffc............
            .......bbb....................
            ..............................
            `)
        otherSprite.follow(mySprite, 0)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.friendlyCreature, function (sprite, otherSprite) {
    otherSprite.setVelocity(0, 0)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    vxx = bulletSpeed
    vyy = 0
    playerFacing = "e"
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    vxx = 0
    vyy = bulletSpeed
    playerFacing = "s"
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.volcanicPlanet, function (sprite, otherSprite) {
    if (gameStateLocation == "space") {
        gameStateLocation = "planet"
        Render.moveWithController(0, 0, 0)
        Render.setViewMode(ViewMode.tilemapView)
        tiles.setCurrentTilemap(tilemap`volcanicPlanet`)
        sprites.destroyAllSpritesOfKind(SpriteKind.volcanicPlanet)
        sprites.destroyAllSpritesOfKind(SpriteKind.grassPlanet)
        sprites.destroyAllSpritesOfKind(SpriteKind.sun)
        mySprite = sprites.create(assets.image`astronaut`, SpriteKind.Player)
        controller.moveSprite(mySprite, 70, 70)
        sprites.destroy(cockpit)
        scene.cameraFollowSprite(mySprite)
        Alien1 = sprites.create(img`
            . . 1 d . . d . . d . . d 1 1 . 
            . 1 . d 1 d . . . . d . d 1 . 1 
            1 . . b . d 1 . . . d . d . 1 1 
            1 . d b . b d . . d b 1 b d . 1 
            1 . b . 1 . b d d b . 1 . b . 1 
            . 1 b 1 . f d 1 1 d f 1 . b . 1 
            b . d . 1 b d d 1 d b a 1 b 1 1 
            . a 1 a 1 f b d d b f 1 a d . b 
            . . 1 a c c f b b f c c a 1 a . 
            . . d c c b c c c c b c c 1 . . 
            . a d b c d b . . b d c b d a . 
            . b c 1 c . . . . . . c d c a . 
            . a c d . c c . . c c . 1 c b . 
            . . a b . . . . . . . . d a . . 
            1 1 d . . . . . . . . . . b d 1 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        tiles.placeOnRandomTile(Alien1, sprites.builtin.oceanDepths5)
        Alien1.follow(mySprite, 45)
        sprites.setDataNumber(Alien1, "health", 7)
    }
})
sprites.onOverlap(SpriteKind.friendlyCreature, SpriteKind.Player, function (sprite, otherSprite) {
    if (sprites.readDataString(sprite, "enemyState") == "attack") {
        if (iFrames <= 0) {
            info.changeLifeBy(-1)
            iFrames = 45
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.sun, function (sprite, otherSprite) {
    if (gameStateLocation == "space") {
        info.changeLifeBy(-100)
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.changeDataNumberBy(otherSprite, "health", -1)
    otherSprite.startEffect(effects.spray, 100)
    sprites.destroy(sprite)
    if (sprites.readDataNumber(otherSprite, "health") <= 0) {
        otherSprite.setKind(SpriteKind.deadAlien1)
        otherSprite.startEffect(effects.spray, 5000)
        otherSprite.setImage(img`
            . . . . . . . . . . . . b . . . 
            . . 1 1 b . d d . . d d b 1 1 . 
            . 1 1 b 1 d 1 . . . d . b . 1 1 
            1 . d b . b d . . d b 1 b d . 1 
            . 1 b . 1 . b d d b . 1 . b 1 . 
            . 1 b 1 . c 2 1 1 d c 1 . b . 1 
            b . d . 1 b d d 2 2 b a 1 b 1 1 
            . a 1 a 1 f b 2 d b f 1 a d . b 
            . . 1 a c c f 2 b f c c a 1 a . 
            . . d c c b c c c c b c c 1 . . 
            . . d b c 2 b . . b d c b d a . 
            . . 2 1 2 c c . . c c c d c a . 
            . . a . 1 c . b . d c a 1 b . . 
            . . . b a d b . . . b d a . . . 
            . . . . b b . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `)
        otherSprite.follow(mySprite, 0)
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    if (iFrames <= 0) {
        info.changeLifeBy(-1)
        iFrames = 20
    }
})
let iFrames = 0
let Alien1: Sprite = null
let randomTree: Sprite = null
let planet: Sprite = null
let mySpaceShip: Sprite = null
let projectile2: Sprite = null
let projectile: Sprite = null
let Alien2: Sprite = null
let tree: Sprite = null
let cockpit: Sprite = null
let mySprite: Sprite = null
let gameStateLocation = ""
let playerFacing = ""
let vxx = 0
let vyy = 0
let bulletSpeed = 0
bulletSpeed = 100
vyy = bulletSpeed
vxx = 0
info.setLife(10)
scene.setBackgroundImage(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffff1fffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    fffffffffffffffffffffffffffffff1ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1fffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `)
goToSpace()
game.onUpdate(function () {
    if (gameStateLocation == "planet") {
        if (tiles.tileIs(mySprite.tilemapLocation(), sprites.dungeon.hazardSpike)) {
            goToSpace()
        }
        mySprite.setImage(assets.image`astronaut`)
        controller.moveSprite(mySprite, 70, 70)
        if (tiles.tileIs(mySprite.tilemapLocation(), assets.tile`myTile3`)) {
            mySprite.setImage(assets.image`astronautSubmerged`)
            controller.moveSprite(mySprite, 50, 50)
        } else if (tiles.tileIs(mySprite.tilemapLocation(), sprites.dungeon.hazardLava0) || tiles.tileIs(mySprite.tilemapLocation(), sprites.dungeon.hazardLava1)) {
            mySprite.setImage(assets.image`astronautSubmerged`)
            controller.moveSprite(mySprite, 50, 50)
        }
        for (let value of sprites.allOfKind(SpriteKind.friendlyCreature)) {
            if (sprites.readDataString(value, "enemyState") == "patrol") {
            	
            }
            if (sprites.readDataString(value, "enemyState") == "attack") {
                value.follow(mySprite, 40)
            }
        }
        iFrames += -1
    }
})
