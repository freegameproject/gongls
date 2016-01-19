$(document).ready(function(){
  //
  gameRender = GameMaker.getGameRender();
        game = GameMaker.getGame('canvas');
        game.setPrecision(0.79);
        res = GameMaker.getRes();
        res.addRes('img', 'bg', '/img/game/airwar/bg.jpg?v9');
        res.addRes('img', 'obj', '/img/game/airwar/obj.png?v9');
        res.addRes('img', 'fire', '/img/game/airwar/fire.png?v1');
        res.addRes('img', 'objfire', '/img/game/airwar/objfire.png?v2');
        res.addRes('img', 'die', '/img/game/airwar/die.png?v2');
        res.addRes('img', 'add', '/img/game/airwar/add.png?v2');
        res.addRes('img', 'bomb', '/img/game/airwar/bomb.png?v2');
        res.addRes('img', 'player', '/img/game/airwar/player.png');
        res.load(function () {
            console.log('res load finish !')
            var bgImg = res.getImage('bg');
            game.setRun(function () {
                c.drawImage(bgImg, 0, 0, canvas.width, canvas.height);
            }, function () {
                c.font = "20px Courier New";
                c.textAlign = 'left';
                c.textBaseline = 'top';
                c.fillStyle = "#ffffff";
                c.fillText("已消灭飞机:" + zs + " 架", 20, 15);
                up();
            });
        });

        audioManager = GameMaker.getAudioManager();
        audioManager.add('bgmusic', '/mp3/game/airwar/bgmusic.mp3');
        audioManager.add('kill', '/mp3/game/airwar/kill.mp3');
        audioManager.play('bgmusic');
        scene_1 = GameMaker.getScene();
        spirit = GameMaker.getSpirit();
        game.setScene(scene_1);//设置游戏场景
        gameRender.setGame(game);//设置游戏
        /* 自定义变量区 */
        zs = 0;
        var sf = 0.5;
        var top_y = 0;
        var canRePlay = false;
        /* 自定义函数区 */
        function up() {
          $(document).attr('title',"消灭了" + zs + "个飞机");
        }
        function gameOver() {
            gameRender.stop();
            canRePlay = false;
            /*
            setTimeout(function () {
                //_("#replay").show();
                canRePlay = true;
            }, 2000);
            */
            window.location.href='#page_gameover';

        }

        init_player =function() {
            scene_1.clearAllSpirit();//清空所有精灵
            //创建玩家精灵
            var playerImg = res.getImage('player');
            console.log(res);
            var player = new Spirit('player', canvas.width / 2, canvas.height - playerImg.height / 2 * 0.5, playerImg.width, playerImg.height);
            player.setScaleXY(0.5);
            player.canDrag = true;
            player.setImage(playerImg);
            player.onclick(function () {


            });
            player.addobjTime = 0;
            player.bombTime = 0;
            player.fireTime=0;
            player.onRun(function () {
                this.bombTime += 1;
                if (this.bombTime === 3500) {
                    this.bombTime = 0;

                    var bomb = new Spirit('bomb', Math.floor(Math.random() * canvas.width), -100, 50, 50);
                    bomb.setImage(res.getImage('bomb'));
                    bomb.onCollision(function (obj) {
                        if (obj.role === 'player') {
                            scene_1.delSpirit(this);
                            scene_1.Spirits.map(function (one) {
                                if (one.role === 'obj') {
                                    //
                                    scene_1.delSpirit(one);
                                    zs += 1;
                                    var die = new Spirit('die', one.x, one.y, 30, 30);
                                    die.setImage(res.getImage('die'));
                                    die.live = 0;
                                    die.onRun(function () {
                                        this.live += 1;
                                        if (this.live === 10) {
                                            scene_1.delSpirit(this);
                                        }
                                    });
                                    scene_1.addSpirit(die);
                                    var addx = one.x + one.w * one.scale;
                                    if (addx > canvas.width) {
                                        addx = one.x - one.w * one.scale;
                                    }
                                    var add = new Spirit('add', addx, one.y, 40, 40);
                                    add.setImage(res.getImage('add'));
                                    add.live = 0;
                                    add.onRun(function () {
                                        this.live += 1;
                                        if (this.live === 8) {
                                            scene_1.delSpirit(this);
                                        }
                                    });
                                    scene_1.addSpirit(add);
                                    //
                                }
                            });
                        }
                        bomb.onRun(function () {
                            this.y += 1;
                        });

                    });
                    scene_1.addSpirit(bomb);
                }
                if (this.x <= 0) {
                    this.x = 0;
                }
                if (this.x >= canvas.width) {
                    this.x = canvas.width;

                }
                if (this.y <= 0) {
                    this.y = 0;
                }
                if (this.y >= canvas.height) {
                    this.y = canvas.height;
                }

                this.fireTime+=1;
                if(this.fireTime>=30){
                    this.fireTime=0;
                    var fire = new Spirit('fire', this.x, this.y - this.h / 2 * this.scale, 5, 15);
                    fire.onCollision(function (obj) {
                        if (obj.role === 'obj') {
                            audioManager.play('kill');
                            scene_1.delSpirit(obj);
                            scene_1.delSpirit(this);
                            zs += 1;
                            var die = new Spirit('die', obj.x, obj.y, 30, 30);
                            die.setImage(res.getImage('die'));
                            die.live = 0;
                            die.onRun(function () {
                                this.live += 1;
                                if (this.live === 10) {
                                    scene_1.delSpirit(this);
                                }
                            });

                            scene_1.addSpirit(die);

                            var addx = obj.x + obj.w * obj.scale;

                            if (addx > canvas.width) {
                                addx = obj.x - obj.w * obj.scale;
                            }

                            var add = new Spirit('add', addx, obj.y, 40, 40);
                            add.setImage(res.getImage('add'));
                            add.live = 0;
                            add.onRun(function () {
                                this.live += 1;
                                if (this.live === 8) {
                                    scene_1.delSpirit(this);
                                }
                            });
                            scene_1.addSpirit(add);
                        }
                        if (obj.role === 'objfire') {
                            audioManager.play('kill');
                            scene_1.delSpirit(obj);
                            scene_1.delSpirit(this);

                            var die = new Spirit('die', obj.x, obj.y, 30, 30);
                            die.setImage(res.getImage('die'));
                            die.live = 0;
                            die.onRun(function () {
                                this.live += 1;
                                if (this.live === 10) {
                                    scene_1.delSpirit(this);
                                }
                            });
                            scene_1.addSpirit(die);
                        }
                    });
                    fire.onRun(function () {
                        this.y -= 4;
                        if (this.y <= -100) {
                            scene_1.delSpirit(this);
                        }
                    });
                    fire.setImage(res.getImage('fire'));
                    scene_1.addSpirit(fire);
                }

                this.addobjTime += 1;
                if (this.addobjTime >= 60) {
                    this.addobjTime = 0;
                    var x = Math.floor(Math.random() * canvas.width);

                    var objImg = res.getImage('obj');

                    var obj = new Spirit('obj', x, -1 * objImg.height, objImg.width, objImg.height);

                    obj.setImage(objImg);
                    //obj.canDrag = true;
                    obj.time = 0;

                    obj.setScaleXY(0.5);
                    obj.onCollision(function (obj) {

                    });
                    obj.onRun(function () {
                        this.y += 0.5;
                        if (this.y >= canvas.height) {
                            scene_1.delSpirit(this);
                        }
                        this.time += 1;
                        if (this.time === 80) {
                            this.time = 0;
                            var objfire = new Spirit('objfire', this.x, this.y - this.h / 2 * this.scale, 15, 15);
                            objfire.onCollision(function (obj) {
                                if (obj.role === 'player') {
                                    gameOver();
                                }
                            });
                            objfire.scale = 0.5;
                            objfire.onRun(function () {
                                this.y += 4;
                                if (this.y >= canvas.height) {
                                    scene_1.delSpirit(this);
                                }
                            });
                            objfire.setImage(res.getImage('objfire'));
                            scene_1.addSpirit(objfire);
                        }
                    });
                    scene_1.addSpirit(obj);
                }
            });
            player.onCollision(function (obj) {
                if (obj.role === 'obj') {
                    gameOver();
                }
            });
            scene_1.addSpirit(player);
        }
        play = function () {
            gameRender.start();
        }
  //
});


$(document).on("pageshow","#page_gamestart",function(){ // 当进入页面二时
  //game_start
  zs = 0;
  init_player();
  play();
});
$(document).on("pageshow","#page_gameover",function(){
  //gameover
  $('#num').text(zs);
});
