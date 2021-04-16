enum RadioMessage {
    message1 = 49434,
    findgame = 53864,
    gamestart = 47984
}
radio.onReceivedMessage(RadioMessage.findgame, function () {
    radio.sendValue("player", player)
    my_num = player
})
input.onButtonPressed(Button.A, function () {
    if (game2 == 1) {
        hand += randint(0, 13)
        if (hand > 21) {
            basic.showIcon(IconNames.Ghost)
            basic.showString("you had a hand of")
            basic.showNumber(hand)
        } else {
            basic.showNumber(hand)
            basic.showString("what do you want to do")
        }
    } else {
        basic.showString("get into a game first")
        basic.clearScreen()
    }
})
radio.onReceivedMessage(RadioMessage.gamestart, function () {
    game2 = 1
    hand += randint(0, 13)
    hand += randint(0, 13)
    if (hand > 21) {
        basic.showIcon(IconNames.Ghost)
        basic.showString("you had a hand of")
        basic.showNumber(hand)
    } else {
        basic.showNumber(hand)
        basic.showString("what do you want to do")
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.sendMessage(RadioMessage.findgame)
    radio.sendValue("host", 2)
    basic.pause(5000)
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    if (game2 == 1) {
        basic.showNumber(hand)
        basic.pause(5000)
        if (hand == 21) {
            game_coins += 1
            basic.showString("good job you now have")
            basic.showNumber(game_coins)
            basic.showString("coins")
        }
    }
})
input.onGesture(Gesture.Shake, function () {
    radio.sendMessage(RadioMessage.gamestart)
})
radio.onReceivedValue(function (name, value) {
    player = value + 1
})
let game_coins = 0
let my_num = 0
let player = 0
let hand = 0
let game2 = 0
game2 = 0
hand = 0
radio.setGroup(10)
