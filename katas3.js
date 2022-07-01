const sampleArray = [469, 755, 244, 245, 758, 450, 302, 17, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function kata1() {

    let resp = []
    for (let i = 1; i <= 25; i++){
        resp.push(i)

    }

    return console.log (resp)
}
kata1()

function kata2() {

        let resp = []
    for (let i = 25; i > 0; i--){
        resp.push(i)

    }

    return console.log (resp)
}
kata2()

function kata3() {

    let resp = []
    for (let i = -1; i >= -25; i--){
        resp.push(i)

    }

    return console.log (resp)
}
kata3()

function kata4() {

    let resp = []
    for (let i = -25; i < 0; i++){
        resp.push(i)

    }

    return console.log (resp)
}
kata4()

function kata5() {

    let resp = []
    for (let i = 25; i >= -25; i -= 2){
        resp.push(i)

    }

    return console.log (resp)
}
kata5()

function kata6() {
    
    let resp = []
    for (let i = 3; i < 100; i += 3){
    resp.push(i)
    }

    return console.log (resp)
}
kata6()

function kata7() {
    let resp = []
    for (let i = 7; i < 100; i += 7){
    resp.push(i)
    }

    return console.log (resp)
}
kata7()

function kata8() {
    let resp = []
    for (let i = 100; i > 0; i-- ){
        if (i % 3 == 0 || i % 7 == 0){
            resp.push(i)
        }
    }

    return console.log (resp)
}
kata8()

function kata9() {
    let resp = []
    for (let i = 0; i < 100; i++ ){
        if (i % 5 == 0 && i % 2 != 0){
            resp.push(i)
        }
    }

    return console.log (resp)
}
kata9()

function kata10() {
    return console.log (sampleArray)
}
kata10()

function kata11() {

    let resp = []
    for(let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] % 2 == 0){
            resp.push(sampleArray[i])
        }
    }

    return console.log (resp)
}
kata11()

function kata12() {
    let resp = []
    for(let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] % 2 != 0){
            resp.push(sampleArray[i])
        }
    }

    return console.log (resp)
}
kata12()

function kata13() {
    let resp = []
    for(let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] % 8 == 0){
            resp.push(sampleArray[i])
        }
    }

    return console.log (resp)
}
kata13()

function kata14() {
    
    let resp = []
    for(let i = 0; i < sampleArray.length; i++){
        resp.push(sampleArray[i]**2)
    }

    return console.log (resp)
}
kata14()

function kata15() {
    let soma = 0
    for(let i = 1; i <=20; i++){
        soma = soma + i
    }

    return console.log(soma)
}
kata15()

function kata16() {
    let soma = 0
    for(let i = 0; i < sampleArray.length; i++){
        soma = soma + sampleArray[i]
    }

    return console.log (soma)
}
kata16()

function kata17() {
    
    let resp = sampleArray[0]
    for(let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] < resp ){
            resp = sampleArray[i]
        }
    }

    return console.log (resp)
}
kata17()

function kata18() {
    let resp = sampleArray[0]
    for(let i = 0; i < sampleArray.length; i++){
        if (sampleArray[i] > resp ){
            resp = sampleArray[i]
        }
    }

    return console.log (resp)
}
kata18()

