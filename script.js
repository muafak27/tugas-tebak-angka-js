alert('Selamat datang di game tebak angka \n kamu diminta untuk menebak angka 1-3 \n dan kamu akan bermain dalam 5 ronde \n player yang berhasil mengumpulkan tebakan terbanyak akan menang \n SELAMAT BERMAIN!!!')
let player1 = prompt('Player 1 : Masukkan angka 0-3')
let player2 = prompt('Player 2 : Masukkan angka 0-3')

function checkEmpty() {
    
    if(player1 == "" || player2 ==""){
        alert('Harus diisi')
    }
    else if(player1 > 4 || player1 < 0 ){
        alert('Harus angka 0-3')
    }
    else if(player2 > 4 || player2 < 0 ){
        alert('Harus angka 0-3')
    }
}
checkEmpty();

let scorePlayer1 = 0;
let scorePlayer2 = 0;
var com = Math.floor(Math.random() * 4);
function hasil () {
    
    if (player1 == com){
        scorePlayer1 += 1
        alert('player 1 menang')
    } else if (player2 == com){
        scorePlayer2 += 1
        alert('player 2 menang')
    } else {
        alert('seri')
    }
    alert('Nilai yang dicari = ' + com + '\n------------------' +'\nscore player 1 = ' + scorePlayer1 +'\nscore player 2 = ' + scorePlayer2)
}
hasil();

let ulang = 4;
for(let i = 0; i <= ulang; i++) {
    alert(player1)
    alert(player2)
    checkEmpty();
    hasil();
}