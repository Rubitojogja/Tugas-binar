// //select
// let textTitle = document.querySelector('h2');
// let button = document.querySelector('button');
// const value =[''];

// //event
//     button.addEventListener('click',updateInfo);
//     textTitle.addEventListener('click', updateColor);

// //function event

// // function updateColor(){
// //     textTitle.style.color='red';
// // }
// // function updateFontSize(){
// //     textTitle.style.fontSize='40px';
// // }
// function updateInfo(){
//     if(value < 10){
//         console.log('Berhasil');

//     }
// }


let pesan = document.getElementById('pesan');
let nama = document.getElementById('nama');
let btnKirim = document.getElementById('btn-kirim');


btnKirim.addEventListener('click', sendInputForm);

function sendInputForm(){
    if(nama.value.length == 0){
        pesan.innerHTML = '';
    } else if(nama.value.length <= 10 && nama.value.length > 0){
        pesan.innerHTML = 'Input data gagal!';
        pesan.style.color = 'red';
    } else {
        pesan.innerHTML = 'Input data berhasil disimpan!';
        pesan.style.color = 'green';
    }
}