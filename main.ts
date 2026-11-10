function BitmapTerminalSequence () {
    adventure.addToTextlog("RetrOS (Codename Bitmap)")
    adventure.addToTextlog("Version: " + Version)
    adventure.addToTextlog("Screen Res: " + scene.screenWidth() + "x" + scene.screenHeight())
    adventure.addToTextlog("Stored Values: " + blockSettings.list().length)
    adventure.addToTextlog("CPU: " + "Operational!")
    adventure.addToTextlog("GPU: " + "Operational!")
    if (true) {
        adventure.addToTextlog("ROM: " + "Operational!")
    } else {
        adventure.addToTextlog("ROM: " + "Non-operational (try reinstalling)")
    }
    blockSettings.writeString("SRAM test var", "Operational")
    blockSettings.writeBoolean("SRAM test bool", true)
    if (blockSettings.readString("SRAM test var") == "Operational" && blockSettings.readBoolean("SRAM test bool")) {
        adventure.addToTextlog("SRAM: " + "Operational!")
    } else {
        adventure.addToTextlog("SRAM: " + "Non-operational :(")
    }
    blockSettings.remove("SRAM test var")
    blockSettings.remove("SRAM test bool")
    adventure.addToTextlog("Press \"A\" when ready...")
    pauseUntil(() => controller.A.isPressed())
    adventure.clearTextLog()
    BitmapLoadingScreenGUI()
}
function BitmapLoadingScreenGUI () {
    scene.setBackgroundImage(assets.image`BootSplash`)
    statusbar = statusbars.create(scene.screenWidth(), 4, StatusBarKind.Health)
    statusbar.value = 0
    statusbar.positionDirection(CollisionDirection.Bottom)
    for (let index = 0; index < 50; index++) {
        statusbar.value += 2
        pause(200)
    }
    sprites.destroy(statusbar)
    music.play(music.stringPlayable("C D - C C - C5 C5 ", 240), music.PlaybackMode.UntilDone)
    scene.setBackgroundImage(assets.image`blank`)
    LoginGUI()
}
function BitmapRecoveryEnviroment () {
    adventure.addToTextlog("All Settings: {")
    for (let index2 = 0; index2 <= blockSettings.list().length - 1; index2++) {
        adventure.addToTextlog("" + blockSettings.list()[index2] + ",")
    }
    adventure.addToTextlog("}")
    adventure.addToTextlog("Press \"A\" when ready...")
    pauseUntil(() => controller.A.isPressed())
    adventure.clearTextLog()
    if (game.ask("Do you wanna ", "delete all that?")) {
        if (game.ask("Are you sure?", "Everything will be gone.")) {
            if (game.ask("LAST CHANCE TO SAVE DATA", "Are you sure?")) {
                adventure.addToTextlog("Begining setting deletion.")
                for (let index22 = 0; index22 <= blockSettings.list().length - 1; index22++) {
                    adventure.addToTextlog("Deleting setting " + blockSettings.list()[index22] + ".................")
                    blockSettings.remove(blockSettings.list()[index22])
                }
                adventure.addToTextlog("Done with reset process!")
                game.reset()
            } else {
                game.reset()
            }
        } else {
            game.reset()
        }
    } else {
        game.reset()
    }
}
function LoginGUI () {
    scene.setBackgroundImage(assets.image`Wallpaper1`)
    UserMenuList = [miniMenu.createMenuItem("Create User", assets.image`Plus`), miniMenu.createMenuItem("About", assets.image`Info`)]
    myMenu = miniMenu.createMenuFromArray(UserMenuList)
}
function MyBootMan () {
    music.play(music.createSoundEffect(WaveShape.Sawtooth, 857, 835, 255, 255, 200, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
    story.showPlayerChoices("(SDA1) BitmapBootPart", "(SDA2) BitmapRecoveryPart")
    if (story.checkLastAnswer("(SDA1) BitmapBootPart")) {
        BitmapTerminalSequence()
    } else if (story.checkLastAnswer("(SDA2) BitmapRecoveryPart")) {
        BitmapRecoveryEnviroment()
    } else {
        game.splash("How?")
        game.reset()
    }
}
let myMenu: Sprite = null
let UserMenuList: miniMenu.MenuItem[] = []
let statusbar: StatusBarSprite = null
let Version = ""
Version = "0.0.1B"
MyBootMan()
