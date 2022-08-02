// function kare(sayi){
//     var karesi = sayi * sayi;
//     return karesi;
// }

// //ekrandan sayi alalım
// var x = prompt("Sayı; ");

// //kare fonksiyonunu x ile çalıştıralım ve karex'e atayalım
// var karex = kare(x);

// console.log("sayının karesi =" + karex);

// // bölme işlemi
// function bol(x,y){
//     var sonuc= x/y;
//     console.log("sonuç = " + sonuc);
// }

// var x = prompt("x: ");
// var y = prompt("y: ");
// bol(x,y);

// 0'dan N'e kadar olan çift sayıların yazdırılması

function ciftSayi(x){
    for(var s=0; s<=x; s=s+2)
    console.log(s);
}

var n = Number(prompt("Sayı: "));

ciftSayi(n);
