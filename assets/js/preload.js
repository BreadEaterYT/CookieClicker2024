const { LocalStorage } = require("node-localstorage")
const { ipcRenderer } = require("electron")
const fs = require("fs")

const _0x1dbd4c=_0x2647;(function(_0x212c38,_0x18d8b6){const _0x1cd5bf=_0x2647,_0xb40731=_0x212c38();while(!![]){try{const _0x53cd94=-parseInt(_0x1cd5bf(0x7b))/0x1+parseInt(_0x1cd5bf(0x83))/0x2*(-parseInt(_0x1cd5bf(0x84))/0x3)+parseInt(_0x1cd5bf(0x7a))/0x4*(parseInt(_0x1cd5bf(0x80))/0x5)+-parseInt(_0x1cd5bf(0x7f))/0x6+parseInt(_0x1cd5bf(0x7c))/0x7+parseInt(_0x1cd5bf(0x82))/0x8+parseInt(_0x1cd5bf(0x81))/0x9;if(_0x53cd94===_0x18d8b6)break;else _0xb40731['push'](_0xb40731['shift']());}catch(_0x59fe9a){_0xb40731['push'](_0xb40731['shift']());}}}(_0x2e7c,0x87da8));const storage=new LocalStorage(process[_0x1dbd4c(0x7e)]['APPDATA']+_0x1dbd4c(0x7d));function _0x2647(_0x529945,_0x301a3e){const _0x2e7ca7=_0x2e7c();return _0x2647=function(_0x26475d,_0x4784e1){_0x26475d=_0x26475d-0x7a;let _0x5041ad=_0x2e7ca7[_0x26475d];return _0x5041ad;},_0x2647(_0x529945,_0x301a3e);}function _0x2e7c(){const _0x4c90eb=['4397280CoLxYh','352516CvhANb','12aSUQyx','4404pWDfRR','827624ANskaN','7379841axbitH','/CookieClicker2024','env','5777592CkAlVM','4310aHqwKQ','4491531hMoDtK'];_0x2e7c=function(){return _0x4c90eb;};return _0x2e7c();}

document.addEventListener("DOMContentLoaded", function (){
    const menubtn = document.getElementById("menubtn")
    const cookienumber = document.getElementById("cookieamount")
    const resetbtn = document.getElementById("resetbtn")
    const savebtn = document.getElementById("savebtn")
    const cookie = document.getElementById("cookie")
    const menu = document.getElementById("menu")

    const scrapgenbuy = document.getElementById("scrapgenbuy")
    const badgenbuy = document.getElementById("badgenbuy")
    const normalgenbuy = document.getElementById("normalgenbuy")

    let lastwarned = false
    let is_scrapgen_buy = false
    let is_badgen_buy = false
    let is_normalgen_buy = false

    let cookieamount = 0
    let limitpersec = 40
    let penality = 100
    let seconds = 1000 // 1 second
    let clicks = 0
    let toggle = 1

    setInterval(function (){
        clicks = 0
    }, 1000)

    if (storage.getItem("save.json") !== null){
        const savefile = storage.getItem("save.json")
        const datas = JSON.parse(savefile)

        cookieamount = datas.cookies
        penality = datas.cookiepenality
        lastwarned = datas.lastwarn
        is_scrapgen_buy = datas.scrapgenbuyed
        is_badgen_buy = datas.badgenbuyed
        is_normalgen_buy = datas.normalgenbuyed

        cookienumber.textContent = cookieamount

        if (is_scrapgen_buy === true){
            scrapgenbuy.disabled = true
            scrapgenbuy.textContent = "Owned"
        }

        if (is_badgen_buy === true){
            badgenbuy.disabled = true
            badgenbuy.textContent = "Owned"
        }
    }

    function checkmoney(amountToAdd){
        if (!(cookieamount >= 1000000000)){
            cookieamount = cookieamount + amountToAdd
        } else {
            cookieamount = 1000000000
        }
    }

    function reset(){
        const choice = confirm("Are you sure to Reset the game, this will remove the savefile !")

        if (choice === true){
            fs.unlink(`${process.env.APPDATA}/CookieClicker2024/save.json`, () => {})
            window.location.reload()
        }
    }

    function forcereset(){
        fs.unlink(`${process.env.APPDATA}/CookieClicker2024/save.json`, () => {})
        window.location.reload()
    }

    resetbtn.addEventListener("click", function (){
        reset()
    })

    savebtn.addEventListener("click", function (){
        savebtn.disabled = true
        const savearray = {
            cookies: cookieamount,
            cookiepenality: penality,
            lastwarn: lastwarned,

            scrapgenbuyed: is_scrapgen_buy,
            badgenbuyed: is_badgen_buy,
            normalgenbuyed: is_normalgen_buy
        }

        const savejson = JSON.stringify(savearray)
        storage.setItem("save.json", savejson)
        savebtn.disabled = false
    })

    cookie.addEventListener("click", function (){
        var _0x57c6b3=_0x3947;function _0x3947(_0x38ca62,_0x34cd64){var _0x49482d=_0x4948();return _0x3947=function(_0x394797,_0x320a4d){_0x394797=_0x394797-0x145;var _0x13f48c=_0x49482d[_0x394797];return _0x13f48c;},_0x3947(_0x38ca62,_0x34cd64);}function _0x4948(){var _0x3296e7=['Ok\x20buddy\x20you\x20got\x20too\x20much\x20warns,\x20last\x20warn,\x20if\x20you\x20get\x20caught\x20again\x20your\x20savefile\x20will\x20be\x20deleted\x20forever\x20!','118964rrKSzI','198hXyXwJ','26dyjLzg','7160910WqzjSk','7529820ASXvWW','4597341JwqNjx','textContent','4335404IKrNtG','5012378EYWszi','log','2169112Jgbzrr'];_0x4948=function(){return _0x3296e7;};return _0x4948();}(function(_0xc633fa,_0x1b5f4f){var _0x5f4eb1=_0x3947,_0x2cebd4=_0xc633fa();while(!![]){try{var _0x1f2f5d=-parseInt(_0x5f4eb1(0x14a))/0x1*(parseInt(_0x5f4eb1(0x14c))/0x2)+-parseInt(_0x5f4eb1(0x14f))/0x3+-parseInt(_0x5f4eb1(0x145))/0x4+-parseInt(_0x5f4eb1(0x14e))/0x5+parseInt(_0x5f4eb1(0x14d))/0x6+-parseInt(_0x5f4eb1(0x146))/0x7+-parseInt(_0x5f4eb1(0x148))/0x8*(-parseInt(_0x5f4eb1(0x14b))/0x9);if(_0x1f2f5d===_0x1b5f4f)break;else _0x2cebd4['push'](_0x2cebd4['shift']());}catch(_0x1d984a){_0x2cebd4['push'](_0x2cebd4['shift']());}}}(_0x4948,0xbce3f));clicks>=limitpersec?penality>0x3e8?lastwarned===![]?(alert(_0x57c6b3(0x149)),lastwarned=!![]):forcereset():(alert('Slow\x20down\x20buddy,\x20you\x27re\x20going\x20too\x20fast,\x20you\x20getting\x20a\x20penality\x20of\x20'+penality+'\x20cookies\x20as\x20a\x20lesson'),cookieamount=cookieamount-penality,cookienumber[_0x57c6b3(0x150)]=cookieamount,lastwarned!==!![]&&(penality=penality+0x64)):(clicks++,checkmoney(0x1),cookienumber[_0x57c6b3(0x150)]=cookieamount,console[_0x57c6b3(0x147)](clicks));
    })

    menubtn.addEventListener("click", function (){
        if (toggle === 1){
            menu.style.top = "60px"
            menubtn.style.rotate = "90deg"
            menubtn.style.transition = "1s"
            toggle = 0
        } else {
            menu.style.top = "-500px"
            menubtn.style.rotate = "0deg"
            menubtn.style.transition = "1s"
            toggle++
        }
    })

    scrapgenbuy.addEventListener("click", function (){
        scrapgen()
    })

    badgenbuy.addEventListener("click", function (){
        badgen()
    })

    normalgenbuy.addEventListener("click", function (){
        normalgen()
    })

    setInterval(function (){
        if (is_scrapgen_buy === true){
            checkmoney(5)
            cookienumber.textContent = cookieamount
        }

        if (is_badgen_buy === true){
            checkmoney(30)
            cookienumber.textContent = cookieamount
        }

        if (is_normalgen_buy === true){
            checkmoney(125)
            cookienumber.textContent = cookieamount
        }
    }, seconds)

    function scrapgen(){
        if (is_scrapgen_buy !== true){
            if (cookieamount >= 50){
                cookieamount = cookieamount - 50
                cookienumber.textContent = cookieamount
                scrapgenbuy.textContent = "Owned"
                is_scrapgen_buy = true
            }
        }
    }

    function badgen(){
        if (is_badgen_buy !== true){
            if (cookieamount >= 300){
                cookieamount = cookieamount - 300
                cookienumber.textContent = cookieamount
                badgenbuy.textContent = "Owned"
                is_badgen_buy = true
            }
        }
    }

    function normalgen(){
        if (is_normalgen_buy !== true){
            if (cookieamount >= 2500){
                cookieamount = cookieamount - 2500
                cookienumber.textContent = cookieamount
                normalgenbuy.textContent = "Owned"
                is_normalgen_buy = true
            }
        }
    }
})