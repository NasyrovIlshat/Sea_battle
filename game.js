/*Игра "Морской бой" заключается в уничтожении кораблей противника быстрее, чем он уничтожит твои! 
Имеем два поля боя (две карты). Компьютер в роли противника.*/

(function(w, h) {
//рисуем карту с рандомным расположением своих кораблей
    var pole1 = ['0000000000',
                 '0000000000',
                 '0000000000',
                 '0000000000',
                 '0000000000',
                 '0000000000',
                 '0000000000',
                 '0000000000',
                 '0000000000',
                 '0000000000'];
    
    var ship1 = ['s000000000', 
                 '000ss00000', 
                 '0s00000000', 
                 '0000sss000', 
                 '000000000s', 
                 '0ss0000000', 
                 '000000ss00', 
                 'sss0000000', 
                 '00000000s0', 
                 '00ssss0000'];
    
    var map1 = ship1.concat(pole1);
    
    map1.length = 10;
    
    function compareRandom(a, b) {
        return Math.random() - 0.5;
    }
   
    map1.sort(compareRandom);
    
    //рисуем карту с рандомным расположением кораблей противника
    var pole2 = ['0000000000',
                 '0000000000',
                 '0000000000',
                 '0000000000',
                 '0000000000',
                 '0000000000',
                 '0000000000',
                 '0000000000',
                 '0000000000',
                 '0000000000'];
    
    var ship2 = ['s000000000', 
                 '000ss00000', 
                 '0s00000000', 
                 '0000sss000', 
                 '000000000s', 
                 '0ss0000000', 
                 '000000ss00', 
                 'sss0000000', 
                 '00000000s0', 
                 '00ssss0000'];
    
    var map2 = ship2.concat(pole2);
    
    map2.length = 10;
     
    function compareRandom(a, b) {
        return Math.random() - 0.5;
    }
   
    map2.sort(compareRandom);
    
    //создаем переменные
    var pb1 = document.querySelector('#pb1'); 
    var pb2 = document.querySelector('#pb2');
    
    //ввод имени пользователя
    var iAm = prompt('Ваше имя?', '');
    if (iAm == '') {
        alert('Вы не указали свое имя!');
        var iAm = prompt('Ваше имя?', '');
    }

    var name = document.getElementById("n");
    name.innerHTML = iAm;
    
    //ход игры
    for (i=0;i<w;i++) for (j=0;j<h;j++) {
        
        div1 = document.createElement('div');
        div1.id = i+'_'+j, div1.className = map1[i][j] == 's' ? 's' : 'w';
        pb1.appendChild(div1);
    
        div2 = document.createElement('div');
        div2.className = map2[i][j] == 's' ? 's' : 'w';
        div2.onclick = function () { 
                            if (fire(this)) backfire();
                       };
        pb2.appendChild(div2);
     }
    
    //если победил
    function fire(el) {
        if (el.className == 'd' || el.className == 'm') return false;
        el.className = el.className == 's' ? 'd' : 'm';
        if (document.querySelectorAll('#pb2 .s').length === 0) {
            document.getElementById("result").innerHTML='Победа!'; 
            return false;
        }
        if (el.className == 'm') return true; 
    }
        
    //если проиграл
    function backfire() {
        for (i=w*h;i>0;i--) {
                    var targets = document.querySelectorAll('#pb1 .s, #pb1 .w');
                    if (targets.length === 0 || fire(targets[Math.floor(Math.random() * targets.length)])) break; 
        }
        if (document.querySelectorAll('#pb1 .s').length === 0) 
            document.getElementById("result").innerHTML='Поражение!';
    }
})(10, 10);