window.onload=function() {
    var zim= document.getElementById('vieta').getContext('2d');   
        //background
        var grad = zim.createLinearGradient(0,0,0,1000);
            grad.addColorStop(0, '#000547');
            grad.addColorStop(0.5, '#c77108');
            zim.fillStyle = grad;
            zim.fillRect(0, 0, 1000, 1000);
        //background town
        zim.fillStyle = "#000000"
        zim.fillRect(0,600,1000,100);
        //town walls top
        zim.fillRect(0,525,30,75);
        zim.fillRect(60,550,50,50);
        zim.fillRect(130,540,50,60);
        zim.fillRect(220,550,100,50);
        zim.fillRect(245,470,50,80);
        zim.fillRect(360,550,100,50);
        zim.fillRect(480,540,50,60);
        zim.fillRect(570,540,50,60);
        //castle
        zim.fillRect(700,530,50,70);
        zim.fillRect(690,520,70,10);
        zim.fillRect(750,550,250,50);
        zim.fillRect(850,470,150,80);
        zim.fillRect(940,410,50,70);
        zim.fillRect(935,370,60,40);
        //roofs
        zim.beginPath();
        zim.moveTo(0,500);
        zim.lineTo(0,525);
        zim.lineTo(40,525);
        zim.fill();
        zim.beginPath();
        zim.moveTo(50,550);
        zim.lineTo(60,525);
        zim.lineTo(110,525);
        zim.lineTo(120,550)
        zim.fill();
        zim.beginPath();
        zim.moveTo(120,545);
        zim.lineTo(130,515);
        zim.lineTo(180,515);
        zim.lineTo(190,545)
        zim.fill();
        zim.beginPath();
        zim.moveTo(210,550);
        zim.lineTo(245,525);
        zim.lineTo(245,550);
        zim.fill();
        zim.beginPath();
        zim.moveTo(295,550);
        zim.lineTo(295,525);
        zim.lineTo(330,550);
        zim.fill();
        zim.beginPath();
        zim.moveTo(240,470);
        zim.lineTo(300,470);
        zim.lineTo(271,400);
        zim.lineTo(270,400);
        zim.fill();
        zim.beginPath();
        zim.moveTo(350,550);
        zim.lineTo(360,525);
        zim.lineTo(460,525);
        zim.lineTo(470,550)
        zim.fill();
        zim.beginPath();
        zim.moveTo(470,540);
        zim.lineTo(480,515);
        zim.lineTo(530,515);
        zim.lineTo(540,540)
        zim.fill();
        zim.beginPath();
        zim.moveTo(560,540);
        zim.lineTo(570,515);
        zim.lineTo(620,515);
        zim.lineTo(630,540)
        zim.fill();
        zim.beginPath();
        zim.moveTo(930,370);
        zim.lineTo(1000,370);
        zim.lineTo(966,270);
        zim.lineTo(965,270);
        zim.fill();
        //merlons
        for (var x=692; x<760; x=x+10){
            zim.fillStyle="#000000"
            zim.fillRect(x,515,5,5)
        }
        for (var x=753; x<850; x=x+10){
            zim.fillStyle="#000000"
            zim.fillRect(x,545,5,5)
        }
        for (var x=852; x<1000; x=x+10){
            zim.fillStyle="#000000"
            zim.fillRect(x,465,5,5)
        }
        //details
        zim.fillStyle=grad;
        zim.beginPath();
        zim.moveTo(260,510);
        zim.lineTo(260,490);
        zim.quadraticCurveTo(270,430,280,490);
        zim.lineTo(280,510)
        zim.lineTo(260,510);
        zim.fill();
        zim.beginPath();
        zim.moveTo(955,400);
        zim.lineTo(955,380);
        zim.quadraticCurveTo(965,320,975,380);
        zim.lineTo(975,400)
        zim.lineTo(955,400);
        zim.fill();
        //water
        var grad1 = zim.createLinearGradient(0,1000,0,0);
            grad1.addColorStop(0, '#00032e');
            grad1.addColorStop(0.8, '#c77108');
            zim.fillStyle = grad1;
            zim.fillRect(0,700, 1000, 800);
}