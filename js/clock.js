let UserName =prompt("Kullanıcı Adını Giriniz")
let myName=document.querySelector("#myName")
myName.innerHTML=`Merhaba ${UserName} ! Hoş geldin!`

    let date = new Date(); 
    let saat = date.getHours();
    let dakika= date.getMinutes();
    let saniye = date.getSeconds();
   
    let gun = date.getDay()
    let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]
    let myClock = document.querySelector("#myClock")
    myClock.innerHTML = saat + ":" + dakika + ":" + saniye + " " + days[gun]
        