class Boss extends Opponent {
  constructor(game,speed,myImageDeadSrc,myImageSrc) {
    speed=2*OPPONENT_SPEED;
    myImageDeadSrc=BOSS_IMG_MUERTO;
    myImageSrc=BOSS_IMG;
    super(game);
   /* this.height = (OPPONENT_HEIGHT * game.width) / 100;
    this.width = (OPPONENT_WIDTH * game.width) / 100;
    this.x = getRandomNumber(game.width - this.width / 2);
    this.y = 0;
    this.speed = 2 * OPPONENT_SPEED;
    this.myImageSrc = BOSS_IMG;
    this.myImageDeadSrc = BOSS_IMG_MUERTO;
    this.direction = "R"; // Dirección hacia la que se mueve el oponente
    setTimeout(() => this.shoot(), 1000 + getRandomNumber(2500));*/
    this.speed=speed;
    this.myImageDeadSrc=myImageDeadSrc;
    this.myImageSrc=myImageSrc;
    this.image.src=this.myImageSrc
  }
  /**
   * Crea un nuevo disparo
   */
  shoot() {
    super.shoot();
  }

  /**
   * Actualiza los atributos de posición del oponente
   */
  update() {
    super.update();
  }

  /**
   * Mata al oponente
   */
  collide() {
    super.collide();
    this.game.endGame();
  }
}
