$(document).ready(function() {
  function changemusiclose(){
 let musicgo = document.createElement('audio');
 musicgo.src = 'songs/loosesound.wav';
 musicgo.setAttribute('autoplay','');
 setTimeout(function(){
   let youl_voice = document.createElement('audio')
   youl_voice.src = 'songs/you.wav';
   youl_voice.setAttribute('autoplay','');
 },1000);
 setTimeout(function () {
   let loose_voice = document.createElement('audio')
   loose_voice.src = 'songs/loose.wav';
   loose_voice.setAttribute('autoplay','');
 },2000);
  }
  function changemusicwin(){
    let musicw = document.createElement('audio');
    musicw.src = 'songs/winsound.wav';
    musicw.setAttribute('autoplay','');
    setTimeout(function(){
      let youw_voice = document.createElement('audio')
      youw_voice.src = 'songs/you.wav';
      youw_voice.setAttribute('autoplay','');
    },1000);
    setTimeout(function () {
      let win_voice = document.createElement('audio')
      win_voice.src = 'songs/win.wav';
      win_voice.setAttribute('autoplay','');
    },2000);
  }
  let score = 0;
  setInterval(function(){
    $("#scoreboard").html(score);
  })
  //fonction Start
  function start(){
    //chosit un nombre aléatoire
    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    let carre = document.getElementById("carre");
    let ennemi1 = document.getElementById("ennemi1");
    let ennemi2 = document.getElementById("ennemi2");
    let ennemi3 = document.getElementById("ennemi3");
    let ennemi4 = document.getElementById("ennemi4");
    let ennemi5 = document.getElementById("ennemi5");
    let ennemi6 = document.getElementById("ennemi6");
    let obstacleAll = document.getElementsByClassName('obstacle');
    function hero_obst_left() {
      let carre_pos_left = parseInt(window.getComputedStyle(carre).getPropertyValue("left"));
      let carre_pos_top = parseInt(window.getComputedStyle(carre).getPropertyValue("top"));
        for (var i = 0; i < obstacleAll.length; i++) {
          let obst_pos_top = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("top"));
          let obst_pos_left = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("left"));
          let obst_pos_right = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("right"));
          let obst_pos_bottom = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("bottom"));
          if (obst_pos_left < carre_pos_left + 50 && obst_pos_left + 50 > carre_pos_left && obst_pos_top < carre_pos_top + 50 && obst_pos_top + 50 > carre_pos_top ) {
            let nc_pos_left = obst_pos_left + 50;
            carre.style.left = nc_pos_left + "px";
          }
        }
    }
    function hero_obst_right() {
      let carre_pos_left = parseInt(window.getComputedStyle(carre).getPropertyValue("left"));
      let carre_pos_top = parseInt(window.getComputedStyle(carre).getPropertyValue("top"));
      for (var i = 0; i < obstacleAll.length; i++) {
        let obst_pos_top = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("top"));
        let obst_pos_left = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("left"));
        if (obst_pos_left < carre_pos_left + 50 && obst_pos_left + 50 > carre_pos_left && obst_pos_top < carre_pos_top + 50 && obst_pos_top + 50 > carre_pos_top ) {
          let nc_pos_right = obst_pos_left - 50;
          carre.style.left = nc_pos_right + "px";
        }
      }
    }
    function hero_obst_bot() {
      let carre_pos_left = parseInt(window.getComputedStyle(carre).getPropertyValue("left"));
      let carre_pos_top = parseInt(window.getComputedStyle(carre).getPropertyValue("top"));
        for (var i = 0; i < obstacleAll.length; i++) {
          let obst_pos_top = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("top"));
          let obst_pos_left = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("left"));
          if (obst_pos_left < carre_pos_left + 50 && obst_pos_left + 50 > carre_pos_left && obst_pos_top < carre_pos_top + 50 && obst_pos_top + 50 > carre_pos_top ) {
            let nc_pos_bottom = obst_pos_top - 50;
            carre.style.top = nc_pos_bottom + "px";
          }
        }
    }
    function hero_obst_top() {
      let carre_pos_left = parseInt(window.getComputedStyle(carre).getPropertyValue("left"));
      let carre_pos_top = parseInt(window.getComputedStyle(carre).getPropertyValue("top"));
        for (var i = 0; i < obstacleAll.length; i++) {
          let obst_pos_top = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("top"));
          let obst_pos_left = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("left"));
          if (obst_pos_left < carre_pos_left + 50 && obst_pos_left + 50 > carre_pos_left && obst_pos_top < carre_pos_top + 50 && obst_pos_top + 50 > carre_pos_top ) {
            let nc_pos_top = obst_pos_top + 50;
            carre.style.top = nc_pos_top + "px";
          }
        }
    }
    function move(element, direction) {
      let top_element = parseInt(
        window.getComputedStyle(element).getPropertyValue("top")
      );
      let left_element = parseInt(
        window.getComputedStyle(element).getPropertyValue("left")
      );

      switch (direction) {
        case "bas":
        top_element = parseInt(
          window.getComputedStyle(element).getPropertyValue("top")
        );
        if (top_element < 650) {
          top_element += 50;
          element.style.top = top_element + "px";
        }
        break;
        case "haut":
        top_element = parseInt(
          window.getComputedStyle(element).getPropertyValue("top")
        );
        if (top_element > 0) {
          top_element -= 50;
          element.style.top = top_element + "px";
        }
        break;
        case "droite":
        left_element = parseInt(
          window.getComputedStyle(element).getPropertyValue("left")
        );
        if (left_element < 650) {
          left_element += 50;
          element.style.left = left_element + "px";
        }
        break;
        case "gauche":
        left_element = parseInt(
          window.getComputedStyle(element).getPropertyValue("left")
        );
        if (left_element > 0) {
          left_element -= 50;
          element.style.left = left_element + "px";
        }
        break;
      }
    }

    //generateur d'ENNEMIS
    function enemy1(name){
      this.name = name;
        let screen1 = document.getElementById('ecran');
        let n_enemy1 = document.createElement('div');
        n_enemy1.setAttribute('class','enemy');
        n_enemy1.classList.add("epos1")
        screen1.appendChild(n_enemy1);
        function epos1_obst_top() {
          let epos1_pos_left = parseInt(window.getComputedStyle(n_enemy1).getPropertyValue("left"));
          let epos1_pos_top = parseInt(window.getComputedStyle(n_enemy1).getPropertyValue("top"));
            for (var i = 0; i < obstacleAll.length; i++) {
              let obst_pos_top = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("top"));
              let obst_pos_left = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("left"));
              if (obst_pos_left < epos1_pos_left + 50 && obst_pos_left + 50 > epos1_pos_left && obst_pos_top < epos1_pos_top + 50 && obst_pos_top + 50 > epos1_pos_top ) {
                let nc_pos_top = obst_pos_top + 50;
                n_enemy1.style.top = nc_pos_top + "px";
              }
            }
        }
        function epos1_obst_bot() {
          let epos1_pos_left = parseInt(window.getComputedStyle(n_enemy1).getPropertyValue("left"));
          let epos1_pos_top = parseInt(window.getComputedStyle(n_enemy1).getPropertyValue("top"));
            for (var i = 0; i < obstacleAll.length; i++) {
              let obst_pos_top = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("top"));
              let obst_pos_left = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("left"));
              if (obst_pos_left < epos1_pos_left + 50 && obst_pos_left + 50 > epos1_pos_left && obst_pos_top < epos1_pos_top + 50 && obst_pos_top + 50 > epos1_pos_top ) {
                let nc_pos_bottom = obst_pos_top - 50;
                n_enemy1.style.top = nc_pos_bottom + "px";
              }
            }
        }
        function epos1_obst_left() {
          let epos1_pos_left = parseInt(window.getComputedStyle(n_enemy1).getPropertyValue("left"));
          let epos1_pos_top = parseInt(window.getComputedStyle(n_enemy1).getPropertyValue("top"));
            for (var i = 0; i < obstacleAll.length; i++) {
              let obst_pos_top = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("top"));
              let obst_pos_left = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("left"));
              if (obst_pos_left < epos1_pos_left + 50 && obst_pos_left + 50 > epos1_pos_left && obst_pos_top < epos1_pos_top + 50 && obst_pos_top + 50 > epos1_pos_top ) {
                let nc_pos_left = obst_pos_left + 50;
                n_enemy1.style.left = nc_pos_left + "px";
              }
            }
        }
        function epos1_obst_right() {
          let epos1_pos_left = parseInt(window.getComputedStyle(n_enemy1).getPropertyValue("left"));
          let epos1_pos_top = parseInt(window.getComputedStyle(n_enemy1).getPropertyValue("top"));
            for (var i = 0; i < obstacleAll.length; i++) {
              let obst_pos_top = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("top"));
              let obst_pos_left = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("left"));
              if (obst_pos_left < epos1_pos_left + 50 && obst_pos_left + 50 > epos1_pos_left && obst_pos_top < epos1_pos_top + 50 && obst_pos_top + 50 > epos1_pos_top ) {
                let nc_pos_right = obst_pos_left - 50;
                n_enemy1.style.left = nc_pos_right + "px";
              }
            }
        }

      this.moveAuto1 = setInterval(function(){
            let random = getRandomInt(4);
            switch (random) {
              case 0:
              if(parseInt(window.getComputedStyle(n_enemy1).getPropertyValue("top")) === 0){
                move(n_enemy1, "bas");
                n_enemy1.style.background = "URL('img/ennemi/ennemi_bas.gif')"
                epos1_obst_bot();
              }
              else{
                move(n_enemy1, "haut");
                n_enemy1.style.background = "URL('img/ennemi/ennemi_haut.gif')"
                epos1_obst_top();
              }
              break;
              case 1:
              if(parseInt(window.getComputedStyle(n_enemy1).getPropertyValue("top")) === 650){
                move(n_enemy1, "haut");
                n_enemy1.style.background = "URL('img/ennemi/ennemi_haut.gif')"
                epos1_obst_top();
              }
              else{
                move(n_enemy1, "bas");
                n_enemy1.style.background = "URL('img/ennemi/ennemi_bas.gif')"
                epos1_obst_bot();
              }
              break;
              case 2:
              if(parseInt(window.getComputedStyle(n_enemy1).getPropertyValue("left")) === 0){
                move(n_enemy1, "droite");
                n_enemy1.style.background = "URL('img/ennemi/ennemi_droite.gif')"
                epos1_obst_right();
              }
              else{
                move(n_enemy1, "gauche");
                n_enemy1.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
                epos1_obst_left();
              }
              break;
              case 3:
              if(parseInt(window.getComputedStyle(n_enemy1).getPropertyValue("left")) === 650){
                move(n_enemy1, "gauche");
                n_enemy1.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
                epos1_obst_left();
              }
              else{
                move(n_enemy1, "droite");
                n_enemy1.style.background = "URL('img/ennemi/ennemi_droite.gif')"
                epos1_obst_right();
              }
              break;
            }
          },1000)
    }
    function enemy3(name){
      this.name = name;
        let screen3 = document.getElementById('ecran');
        let n_enemy3 = document.createElement('div');
        n_enemy3.setAttribute('class','enemy');
        n_enemy3.classList.add('epos3')
        screen3.appendChild(n_enemy3);
        function epos3_obst_top() {
          let epos3_pos_left = parseInt(window.getComputedStyle(n_enemy3).getPropertyValue("left"));
          let epos3_pos_top = parseInt(window.getComputedStyle(n_enemy3).getPropertyValue("top"));
            for (var i = 0; i < obstacleAll.length; i++) {
              let obst_pos_top = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("top"));
              let obst_pos_left = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("left"));
              if (obst_pos_left < epos3_pos_left + 50 && obst_pos_left + 50 > epos3_pos_left && obst_pos_top < epos3_pos_top + 50 && obst_pos_top + 50 > epos3_pos_top ) {
                let nc_pos_top = obst_pos_top + 50;
                n_enemy3.style.top = nc_pos_top + "px";
              }
            }
        }
        function epos3_obst_bot() {
          let epos3_pos_left = parseInt(window.getComputedStyle(n_enemy3).getPropertyValue("left"));
          let epos3_pos_top = parseInt(window.getComputedStyle(n_enemy3).getPropertyValue("top"));
            for (var i = 0; i < obstacleAll.length; i++) {
              let obst_pos_top = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("top"));
              let obst_pos_left = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("left"));
              if (obst_pos_left < epos3_pos_left + 50 && obst_pos_left + 50 > epos3_pos_left && obst_pos_top < epos3_pos_top + 50 && obst_pos_top + 50 > epos3_pos_top ) {
                let nc_pos_bottom = obst_pos_top - 50;
                n_enemy3.style.top = nc_pos_bottom + "px";
              }
            }
        }
        function epos3_obst_left() {
          let epos3_pos_left = parseInt(window.getComputedStyle(n_enemy3).getPropertyValue("left"));
          let epos3_pos_top = parseInt(window.getComputedStyle(n_enemy3).getPropertyValue("top"));
            for (var i = 0; i < obstacleAll.length; i++) {
              let obst_pos_top = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("top"));
              let obst_pos_left = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("left"));
              if (obst_pos_left < epos3_pos_left + 50 && obst_pos_left + 50 > epos3_pos_left && obst_pos_top < epos3_pos_top + 50 && obst_pos_top + 50 > epos3_pos_top ) {
                let nc_pos_left = obst_pos_left + 50;
                n_enemy3.style.left = nc_pos_left + "px";
              }
            }
        }
        function epos3_obst_right() {
          let epos3_pos_left = parseInt(window.getComputedStyle(n_enemy3).getPropertyValue("left"));
          let epos3_pos_top = parseInt(window.getComputedStyle(n_enemy3).getPropertyValue("top"));
            for (var i = 0; i < obstacleAll.length; i++) {
              let obst_pos_top = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("top"));
              let obst_pos_left = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("left"));
              if (obst_pos_left < epos3_pos_left + 50 && obst_pos_left + 50 > epos3_pos_left && obst_pos_top < epos3_pos_top + 50 && obst_pos_top + 50 > epos3_pos_top ) {
                let nc_pos_right = obst_pos_left - 50;
                n_enemy3.style.left = nc_pos_right + "px";
              }
            }
        }
        this.moveAuto3 = setInterval(function(){
              let random = getRandomInt(4);
              switch (random) {
                case 0:
                if(parseInt(window.getComputedStyle(n_enemy3).getPropertyValue("top")) === 0){
                  move(n_enemy3, "bas");
                  n_enemy3.style.background = "URL('img/ennemi/ennemi_bas.gif')"
                  epos3_obst_bot()
                }
                else{
                  move(n_enemy3, "haut");
                  n_enemy3.style.background = "URL('img/ennemi/ennemi_haut.gif')"
                  epos3_obst_top()
                }
                break;
                case 1:
                if(parseInt(window.getComputedStyle(n_enemy3).getPropertyValue("top")) === 650){
                  move(n_enemy3, "haut");
                  n_enemy3.style.background = "URL('img/ennemi/ennemi_haut.gif')"
                  epos3_obst_top()
                }
                else{
                  move(n_enemy3, "bas");
                  n_enemy3.style.background = "URL('img/ennemi/ennemi_bas.gif')"
                  epos3_obst_bot()
                }
                break;
                case 2:
                if(parseInt(window.getComputedStyle(n_enemy3).getPropertyValue("left")) === 0){
                  move(n_enemy3, "droite");
                  n_enemy3.style.background = "URL('img/ennemi/ennemi_droite.gif')"
                  epos3_obst_right()
                }
                else{
                  move(n_enemy3, "gauche");
                  n_enemy3.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
                  epos3_obst_left()
                }
                break;
                case 3:
                if(parseInt(window.getComputedStyle(n_enemy3).getPropertyValue("left")) === 650){
                  move(n_enemy3, "gauche");
                  n_enemy3.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
                  epos3_obst_left()
                }
                else{
                  move(n_enemy3, "droite");
                  n_enemy3.style.background = "URL('img/ennemi/ennemi_droite.gif')"
                  epos3_obst_right()
                }
                break;
              }
            },1000)
    }
    function enemy2(name){
      this.name = name;
        let screen2 = document.getElementById('ecran');
        let n_enemy2 = document.createElement('div');
        n_enemy2.setAttribute('class','enemy');
        n_enemy2.classList.add('epos2')
        screen2.appendChild(n_enemy2);
        function epos2_obst_top() {
          let epos2_pos_left = parseInt(window.getComputedStyle(n_enemy2).getPropertyValue("left"));
          let epos2_pos_top = parseInt(window.getComputedStyle(n_enemy2).getPropertyValue("top"));
            for (var i = 0; i < obstacleAll.length; i++) {
              let obst_pos_top = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("top"));
              let obst_pos_left = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("left"));
              if (obst_pos_left < epos2_pos_left + 50 && obst_pos_left + 50 > epos2_pos_left && obst_pos_top < epos2_pos_top + 50 && obst_pos_top + 50 > epos2_pos_top ) {
                let nc_pos_top = obst_pos_top + 50;
                n_enemy2.style.top = nc_pos_top + "px";
              }
            }
        }
        function epos2_obst_bot() {
          let epos2_pos_left = parseInt(window.getComputedStyle(n_enemy2).getPropertyValue("left"));
          let epos2_pos_top = parseInt(window.getComputedStyle(n_enemy2).getPropertyValue("top"));
            for (var i = 0; i < obstacleAll.length; i++) {
              let obst_pos_top = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("top"));
              let obst_pos_left = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("left"));
              if (obst_pos_left < epos2_pos_left + 50 && obst_pos_left + 50 > epos2_pos_left && obst_pos_top < epos2_pos_top + 50 && obst_pos_top + 50 > epos2_pos_top ) {
                let nc_pos_bottom = obst_pos_top - 50;
                n_enemy2.style.top = nc_pos_bottom + "px";
              }
            }
        }
        function epos2_obst_left() {
          let epos2_pos_left = parseInt(window.getComputedStyle(n_enemy2).getPropertyValue("left"));
          let epos2_pos_top = parseInt(window.getComputedStyle(n_enemy2).getPropertyValue("top"));
            for (var i = 0; i < obstacleAll.length; i++) {
              let obst_pos_top = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("top"));
              let obst_pos_left = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("left"));
              if (obst_pos_left < epos2_pos_left + 50 && obst_pos_left + 50 > epos2_pos_left && obst_pos_top < epos2_pos_top + 50 && obst_pos_top + 50 > epos2_pos_top ) {
                let nc_pos_left = obst_pos_left + 50;
                n_enemy2.style.left = nc_pos_left + "px";
              }
            }
        }
        function epos2_obst_right() {
          let epos2_pos_left = parseInt(window.getComputedStyle(n_enemy2).getPropertyValue("left"));
          let epos2_pos_top = parseInt(window.getComputedStyle(n_enemy2).getPropertyValue("top"));
            for (var i = 0; i < obstacleAll.length; i++) {
              let obst_pos_top = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("top"));
              let obst_pos_left = parseInt(window.getComputedStyle(obstacleAll[i]).getPropertyValue("left"));
              if (obst_pos_left < epos2_pos_left + 50 && obst_pos_left + 50 > epos2_pos_left && obst_pos_top < epos2_pos_top + 50 && obst_pos_top + 50 > epos2_pos_top ) {
                let nc_pos_right = obst_pos_left - 50;
                n_enemy2.style.left = nc_pos_right + "px";
              }
            }
        }
        this.moveAuto2 = setInterval(function(){
              let random = getRandomInt(4);
              switch (random) {
                case 0:
                if(parseInt(window.getComputedStyle(n_enemy2).getPropertyValue("top")) === 0){
                  move(n_enemy2, "bas");
                  n_enemy2.style.background = "URL('img/ennemi/ennemi_bas.gif')"
                  epos2_obst_bot()
                }
                else{
                  move(n_enemy2, "haut");
                  n_enemy2.style.background = "URL('img/ennemi/ennemi_haut.gif')"
                  epos2_obst_top()
                }
                break;
                case 1:
                if(parseInt(window.getComputedStyle(n_enemy2).getPropertyValue("top")) === 650){
                  move(n_enemy2, "haut");
                  n_enemy2.style.background = "URL('img/ennemi/ennemi_haut.gif')"
                  epos2_obst_top()
                }
                else{
                  move(n_enemy2, "bas");
                  n_enemy2.style.background = "URL('img/ennemi/ennemi_bas.gif')"
                  epos2_obst_bot()
                }
                break;
                case 2:
                if(parseInt(window.getComputedStyle(n_enemy2).getPropertyValue("left")) === 0){
                  move(n_enemy2, "droite");
                  n_enemy2.style.background = "URL('img/ennemi/ennemi_droite.gif')"
                  epos2_obst_right()
                }
                else{
                  move(n_enemy2, "gauche");
                  n_enemy2.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
                  epos2_obst_left()
                }
                break;
                case 3:
                if(parseInt(window.getComputedStyle(n_enemy2).getPropertyValue("left")) === 650){
                  move(n_enemy2, "gauche");
                  n_enemy2.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
                  epos2_obst_left()
                }
                else{
                  move(n_enemy2, "droite");
                  n_enemy2.style.background = "URL('img/ennemi/ennemi_droite.gif')"
                  epos2_obst_right()
                }
                break;
              }
            },1000)

    }
    setInterval(function(){
      let new_enm1 = new enemy1('topleftEnemy')
      let new_enm2 = new enemy2('bottomleftEnemy')
      let new_enm3 = new enemy3('toprightEnemy')
    },10000)
    // event listener pour écouter les touches du clavier, et bouger le carré en fonction de ces touches
    //heromove
    window.addEventListener("keydown", function(event) {
      switch (event.keyCode) {
        //haut
        case 38:
        event.preventDefault();
        //code quand on va en haut
        move(carre, "haut");
        carre.style.background = "URL('img/hero/hero_haut.gif')"
        hero_obst_top()
        break;

        //droite
        case 39:
        event.preventDefault();
        //code quand on va à droite
        move(carre, "droite");
        carre.style.background = "URL('img/hero/hero_droite.gif')"
        hero_obst_right()
        break;

        //bas
        case 40:
        event.preventDefault();
        move(carre, "bas");
        carre.style.background = "URL('img/hero/hero_bas.gif')"
        hero_obst_bot()
        //code quand on va à bas
        break;

        //gauche
        case 37:
        //code quand on va à gauche
        event.preventDefault();
        move(carre, "gauche");
        carre.style.background = "URL('img/hero/hero_gauche.gif')"
        hero_obst_left()
        break;
      }
    });

    window.addEventListener("keyup", function(event) {
      switch (event.keyCode) {
        //haut
        case 38:
        //code quand on va en haut

        carre.style.background = "URL('img/hero/hero_fixe_haut.png')"
        break;

        //droite
        case 39:
        //code quand on va à droite

        carre.style.background = "URL('img/hero/hero_fixe_droite.png')"
        break;

        //bas
        case 40:

        carre.style.background = "URL('img/hero/hero_fixe_bas.png')"
        //code quand on va à bas
        break;

        //gauche
        case 37:
        //code quand on va à gauche

        carre.style.background = "URL('img/hero/hero_fixe_gauche.png')"
        break;
      }
    });

    // faire bouger l'ennemi dans une direction aléatoirement
    // Ennemi n°1
    setInterval(function(){
      let random = getRandomInt(4);
      switch (random) {
        case 0:
        if(parseInt(window.getComputedStyle(ennemi1).getPropertyValue("top")) === 0){
          move(ennemi1, "bas");
          ennemi1.style.background = "URL('img/ennemi/ennemi_bas.gif')"
        }
        else{
          move(ennemi1, "haut");
          ennemi1.style.background = "URL('img/ennemi/ennemi_haut.gif')"
        }
        break;
        case 1:
        if(parseInt(window.getComputedStyle(ennemi1).getPropertyValue("top")) === 650){
          move(ennemi1, "haut");
          ennemi1.style.background = "URL('img/ennemi/ennemi_haut.gif')"
        }
        else{
          move(ennemi1, "bas");
          ennemi1.style.background = "URL('img/ennemi/ennemi_bas.gif')"
        }
        break;
        case 2:
        if(parseInt(window.getComputedStyle(ennemi1).getPropertyValue("left")) === 0){
          move(ennemi1, "droite");
          ennemi1.style.background = "URL('img/ennemi/ennemi_droite.gif')"
        }
        else{
          move(ennemi1, "gauche");
          ennemi1.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
        }
        break;
        case 3:
        if(parseInt(window.getComputedStyle(ennemi1).getPropertyValue("left")) === 650){
          move(ennemi1, "gauche");
          ennemi1.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
        }
        else{
          move(ennemi1, "droite");
          ennemi1.style.background = "URL('img/ennemi/ennemi_droite.gif')"
        }
        break;
      }
    },1000)
// Ennemi n°2
    setInterval(function(){
      let random = getRandomInt(4);
      switch (random) {
        case 0:
        if(parseInt(window.getComputedStyle(ennemi2).getPropertyValue("top")) === 0){
          move(ennemi2, "bas");
          ennemi2.style.background = "URL('img/ennemi/ennemi_bas.gif')"
        }
        else{
          move(ennemi2, "haut");
          ennemi2.style.background = "URL('img/ennemi/ennemi_haut.gif')"
        }
        break;
        case 1:
        if(parseInt(window.getComputedStyle(ennemi2).getPropertyValue("top")) === 650){
          move(ennemi2, "haut");
          ennemi2.style.background = "URL('img/ennemi/ennemi_haut.gif')"
        }
        else{
          move(ennemi2, "bas");
          ennemi2.style.background = "URL('img/ennemi/ennemi_bas.gif')"
        }
        break;
        case 2:
        if(parseInt(window.getComputedStyle(ennemi2).getPropertyValue("left")) === 0){
          move(ennemi2, "droite");
          ennemi2.style.background = "URL('img/ennemi/ennemi_droite.gif')"
        }
        else{
          move(ennemi2, "gauche");
          ennemi2.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
        }
        break;
        case 3:
        if(parseInt(window.getComputedStyle(ennemi2).getPropertyValue("left")) === 650){
          move(ennemi2, "gauche");
          ennemi2.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
        }
        else{
          move(ennemi2, "droite");
          ennemi2.style.background = "URL('img/ennemi/ennemi_droite.gif')"
        }
        break;
      }

    },1000)
    // Ennemi n°3
    setInterval(function(){
      let random = getRandomInt(4);
      switch (random) {
        case 0:
        if(parseInt(window.getComputedStyle(ennemi3).getPropertyValue("top")) === 0){
          move(ennemi3, "bas");
          ennemi3.style.background = "URL('img/ennemi/ennemi_bas.gif')"
        }
        else{
          move(ennemi3, "haut");
          ennemi3.style.background = "URL('img/ennemi/ennemi_haut.gif')"
        }
        break;
        case 1:
        if(parseInt(window.getComputedStyle(ennemi3).getPropertyValue("top")) === 650){
          move(ennemi3, "haut");
          ennemi3.style.background = "URL('img/ennemi/ennemi_haut.gif')"
        }
        else{
          move(ennemi3, "bas");
          ennemi3.style.background = "URL('img/ennemi/ennemi_bas.gif')"
        }
        break;
        case 2:
        if(parseInt(window.getComputedStyle(ennemi3).getPropertyValue("left")) === 0){
          move(ennemi3, "droite");
          ennemi3.style.background = "URL('img/ennemi/ennemi_droite.gif')"
        }
        else{
          move(ennemi3, "gauche");
          ennemi3.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
        }
        break;
        case 3:
        if(parseInt(window.getComputedStyle(ennemi3).getPropertyValue("left")) === 650){
          move(ennemi3, "gauche");
          ennemi3.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
        }
        else{
          move(ennemi3, "droite");
          ennemi3.style.background = "URL('img/ennemi/ennemi_droite.gif')"
        }
        break;
      }

    },1000)
    // Ennemi n°4
    setInterval(function(){
      let random = getRandomInt(4);
      switch (random) {
        case 0:
        if(parseInt(window.getComputedStyle(ennemi4).getPropertyValue("top")) === 0){
          move(ennemi4, "bas");
          ennemi4.style.background = "URL('img/ennemi/ennemi_bas.gif')"
        }
        else{
          move(ennemi4, "haut");
          ennemi4.style.background = "URL('img/ennemi/ennemi_haut.gif')"
        }
        break;
        case 1:
        if(parseInt(window.getComputedStyle(ennemi4).getPropertyValue("top")) === 650){
          move(ennemi4, "haut");
          ennemi4.style.background = "URL('img/ennemi/ennemi_haut.gif')"
        }
        else{
          move(ennemi4, "bas");
          ennemi4.style.background = "URL('img/ennemi/ennemi_bas.gif')"
        }
        break;
        case 2:
        if(parseInt(window.getComputedStyle(ennemi4).getPropertyValue("left")) === 0){
          move(ennemi4, "droite");
          ennemi4.style.background = "URL('img/ennemi/ennemi_droite.gif')"
        }
        else{
          move(ennemi4, "gauche");
          ennemi4.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
        }
        break;
        case 3:
        if(parseInt(window.getComputedStyle(ennemi4).getPropertyValue("left")) === 650){
          move(ennemi4, "gauche");
          ennemi4.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
        }
        else{
          move(ennemi4, "droite");
          ennemi4.style.background = "URL('img/ennemi/ennemi_droite.gif')"
        }
        break;
      }
    },1000)

    setInterval(function(){
      let random = getRandomInt(4);
      switch (random) {
        case 0:
        if(parseInt(window.getComputedStyle(ennemi5).getPropertyValue("top")) === 0){
          move(ennemi5, "bas");
          ennemi5.style.background = "URL('img/ennemi/ennemi_bas.gif')"
        }
        else{
          move(ennemi5, "haut");
          ennemi5.style.background = "URL('img/ennemi/ennemi_haut.gif')"
        }
        break;
        case 1:
        if(parseInt(window.getComputedStyle(ennemi5).getPropertyValue("top")) === 650){
          move(ennemi5, "haut");
          ennemi5.style.background = "URL('img/ennemi/ennemi_haut.gif')"
        }
        else{
          move(ennemi5, "bas");
          ennemi5.style.background = "URL('img/ennemi/ennemi_bas.gif')"
        }
        break;
        case 2:
        if(parseInt(window.getComputedStyle(ennemi5).getPropertyValue("left")) === 0){
          move(ennemi5, "droite");
          ennemi5.style.background = "URL('img/ennemi/ennemi_droite.gif')"
        }
        else{
          move(ennemi5, "gauche");
          ennemi5.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
        }
        break;
        case 3:
        if(parseInt(window.getComputedStyle(ennemi5).getPropertyValue("left")) === 650){
          move(ennemi5, "gauche");
          ennemi5.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
        }
        else{
          move(ennemi5, "droite");
          ennemi5.style.background = "URL('img/ennemi/ennemi_droite.gif')"
        }
        break;
      }
    },1000)

    setInterval(function(){
      let random = getRandomInt(4);
      switch (random) {
        case 0:
        if(parseInt(window.getComputedStyle(ennemi6).getPropertyValue("top")) === 0){
          move(ennemi6, "bas");
          ennemi6.style.background = "URL('img/ennemi/ennemi_bas.gif')"
        }
        else{
          move(ennemi6, "haut");
          ennemi6.style.background = "URL('img/ennemi/ennemi_haut.gif')"
        }
        break;
        case 1:
        if(parseInt(window.getComputedStyle(ennemi6).getPropertyValue("top")) === 650){
          move(ennemi6, "haut");
          ennemi6.style.background = "URL('img/ennemi/ennemi_haut.gif')"
        }
        else{
          move(ennemi6, "bas");
          ennemi6.style.background = "URL('img/ennemi/ennemi_bas.gif')"
        }
        break;
        case 2:
        if(parseInt(window.getComputedStyle(ennemi6).getPropertyValue("left")) === 0){
          move(ennemi6, "droite");
          ennemi6.style.background = "URL('img/ennemi/ennemi_droite.gif')"
        }
        else{
          move(ennemi6, "gauche");
          ennemi6.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
        }
        break;
        case 3:
        if(parseInt(window.getComputedStyle(ennemi6).getPropertyValue("left")) === 650){
          move(ennemi6, "gauche");
          ennemi6.style.background = "URL('img/ennemi/ennemi_gauche.gif')"
        }
        else{
          move(ennemi6, "droite");
          ennemi6.style.background = "URL('img/ennemi/ennemi_droite.gif')"
        }
        break;
      }
    },1000)

    // fonction invulnérabilité et vies du héros
    let cooldown_hit = 0;
    let vie = 3;
    function contact_enemy() {
      let enemy_temp = document.getElementsByClassName('enemy');
      for (let i = 0; i < enemy_temp.length; i++) {
        let hero_pos_top = parseInt(window.getComputedStyle(carre).getPropertyValue("top"));
        let hero_x = parseInt(window.getComputedStyle(carre).getPropertyValue("left"));
        let hero_y =  parseInt(window.getComputedStyle(carre).getPropertyValue("bottom"));
        let hero_pos_right = parseInt(window.getComputedStyle(carre).getPropertyValue("right"));
        let hero_width = parseInt(window.getComputedStyle(carre).getPropertyValue("width"))
        let hero_height = parseInt(window.getComputedStyle(carre).getPropertyValue("height"))
        let enemy_pos_left = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("left"));
        let enemy_pos_bottom = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("bottom"));
        let enemy_width = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("width"));
        let enemy_height = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("height"));
        let enemy_pos_right = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("right"));
        let enemy_pos_top = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("top"));
        if (hero_pos_top === enemy_pos_top && hero_pos_top === enemy_pos_top && hero_x === enemy_pos_left && hero_x === enemy_pos_left) {
          if (cooldown_hit == 0) {
            cooldown_hit = 1;
            let affiche_cd = document.getElementsByClassName('affiche-cd');
            function affiche_gmod(){
              affiche_cd[1].classList.remove('dis-none');
            }
            affiche_gmod()
            setTimeout(function(){
              cooldown_hit = 0;
              affiche_cd[1].classList.add('dis-none');
            },500)

            if(cooldown_hit = 1){
              vie -= 1;
              if (vie == 2){
                let life3 = document.getElementById('life3');
                life3.src = "img/Barres/vie_perdu.png"
              }
              if (vie == 1){
                let life2 = document.getElementById('life2');
                life2.src = "img/Barres/vie_perdu.png"
              }
              if (vie == 0){
                let life1 = document.getElementById('life1');
                life1.src = "img/Barres/vie_perdu.png"
              }
              if(vie == 0){
                let retry_screen = document.getElementById('retry-screen');
                retry_screen.classList.remove('dis-none')
                changemusiclose()
              }

            }
          }
        }
      }

    }
    setInterval(function () {
      contact_enemy()
    },100)


// fonction utiliser bombe
    function drop_bomb() {
      let nuub_x = parseInt(window.getComputedStyle(carre).getPropertyValue("left"));
      let nuub_pos_top = parseInt(window.getComputedStyle(carre).getPropertyValue("top"));
      let nuub_pos_right = parseInt(window.getComputedStyle(carre).getPropertyValue("right"));
      let nuub_y =  parseInt(window.getComputedStyle(carre).getPropertyValue("bottom"));
      let nuub_width = parseInt(window.getComputedStyle(carre).getPropertyValue("width"))
      let nuub_height = parseInt(window.getComputedStyle(carre).getPropertyValue("height"))
      let screen = document.getElementById('ecran');
      let bomb_noise = document.createElement('audio')
      bomb_noise.setAttribute('src', 'songs/bruitbombe.mp3')
      bomb_noise.setAttribute('autoplay','')
      let bomba = document.createElement('div');
      bomba.classList.add('bombashit')
      screen.appendChild(bomba)
      bomba.style.left = nuub_x + "px";
      bomba.style.bottom = nuub_y + "px";
      setTimeout(function() {
        bomba.remove()
        ie -= 1;
      }, 1500);
      setTimeout(function () {
        let screen = document.getElementById('ecran');
        let explosion = document.createElement('div');
        explosion.classList.add('explosion');
        screen.appendChild(explosion);
        explosion.style.left = nuub_x + "px";
        explosion.style.bottom = nuub_y + "px";
        explosion.classList.add('ex2');
        let ex2value = document.getElementsByClassName('ex2');
        let enemy_temp = document.getElementsByClassName('enemy');

// Hitbox de la bombe aux ennemis
        function hitbox(){
          for (var i = 0; i < ex2value.length; i++) {
            ex2value[i].style.left = nuub_x - 50 + "px";
            ex2value[i].style.bottom = nuub_y - 50 + "px";
            let ex2_pos_left = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("left"));
            let ex2_pos_bottom = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("bottom"));
            let ex2_width = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("width"));
            let ex2_height = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("height"));
            let ex2_pos_right = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("right"));
            let ex2_pos_top = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("top"));
            for (var i = 0; i < enemy_temp.length; i++) {
              let enemy_pos_left = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("left"));
              let enemy_pos_bottom = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("bottom"));
              let enemy_width = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("width"));
              let enemy_height = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("height"));
              let enemy_pos_right = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("right"));
              let enemy_pos_top = parseInt(window.getComputedStyle(enemy_temp[i]).getPropertyValue("top"));
              if (enemy_pos_top < ex2_pos_top + ex2_width && enemy_pos_top + enemy_width > ex2_pos_top && enemy_pos_left < ex2_pos_left + ex2_height && enemy_height + enemy_pos_left > ex2_pos_left) {
                enemy_temp[i].remove();
                score += 2;

              }
            }
          }
        }
        hitbox();
        // fonction hitbox de la bombe au héros
        function hitbox_hero(){
          for (var i = 0; i < ex2value.length; i++) {
            let hero_pos_top = parseInt(window.getComputedStyle(carre).getPropertyValue("top"));
            let hero_x = parseInt(window.getComputedStyle(carre).getPropertyValue("left"));
            let hero_y =  parseInt(window.getComputedStyle(carre).getPropertyValue("bottom"));
            let hero_pos_right = parseInt(window.getComputedStyle(carre).getPropertyValue("right"));
            let hero_width = parseInt(window.getComputedStyle(carre).getPropertyValue("width"))
            let hero_height = parseInt(window.getComputedStyle(carre).getPropertyValue("height"))
            let ex2_pos_left = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("left"));
            let ex2_pos_bottom = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("bottom"));
            let ex2_width = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("width"));
            let ex2_height = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("height"));
            let ex2_pos_right = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("right"));
            let ex2_pos_top = parseInt(window.getComputedStyle(ex2value[i]).getPropertyValue("top"));
            if (hero_pos_top < ex2_pos_top + ex2_width && hero_pos_top + hero_width > ex2_pos_top && hero_pos_right < ex2_pos_right + ex2_height && hero_height + hero_pos_right > ex2_pos_right) {
                let suicide_screen = document.getElementById('suicide-screen')
                suicide_screen.classList.remove('dis-none')
                changemusiclose()
            }
          }
        }
        hitbox_hero()
        setTimeout(function(){
          explosion.remove()
        },500)
      },1000)

    }

    // afficher la bombe

    let ie = 0;
    let cooldown_keyboard = 0;
    window.addEventListener('keydown', function (e) {
      if (e.keyCode === 32) {
        e.preventDefault();
        if (cooldown_keyboard == 0) {
          cooldown_keyboard = 1;
          let affiche_cd = document.getElementsByClassName('affiche-cd');
          function affiche_bomb_drop(){
            affiche_cd[0].classList.remove('dis-none');
          }
          affiche_bomb_drop()
          setTimeout(function(){
            cooldown_keyboard = 0;
            affiche_cd[0].classList.add('dis-none');
          },500)
          if (ie < 3) {
            ie += 1;
            drop_bomb();
          }
        }

      }

    })
// Nouvel fonction
};

  // Bouton start et recommencer

  let start_butn = document.getElementById('start-button');
  start_butn.addEventListener('click',function(){
    let start_screen = document.getElementById('start-screen');
    start_screen.classList.add('dis-none');
    start()
  });
  let retry_butn1 = document.getElementById('retry-button1');
  retry_butn1.addEventListener('click',function(){
    let retry_screen = document.getElementById('retry-screen');
    retry_screen.classList.add('dis-none');
    window.location.reload();
  });
  let retry_butn2 = document.getElementById('retry-button2');
  retry_butn2.addEventListener('click',function(){
    let win_screen = document.getElementById('win-screen');
    win_screen.classList.add('dis-none');
    window.location.reload();
  });
  let retry_butn3 = document.getElementById('retry-button3');
  retry_butn3.addEventListener('click',function(){
    let suicide_screen = document.getElementById('suicide-screen');
    suicide_screen.classList.add('dis-none');
    window.location.reload();
  });




  // fin du jeu
})
