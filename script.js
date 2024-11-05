

// TYPED
var typed = new Typed('.typed', {
    strings: ["Bienvenue sur mon <strong>portfolio</strong>, je me présente je m'appelle Diégane Faye. Je suis ingénieur en transmission des données et sécurité de l'information (<strong>TDSI</strong>). Après une formation m'ayant fait découvrir plusieurs domaines de l'informatique, j'ai décidé de me lancer à fond dans l'apprentissage du code, notamment aux langages <strong>Front</strong> tels que CSS, HTML, Javascript, React, react Native, Angular et aux langages <strong>back end</strong> comme java, Spring boot afin de devenir développeur. Plus qu'un avenir professionnel, je me suis découvert une passion, celle de coder. J'ai une maitrise de l'ERP Odoo. Je suis également passionné par la cybersécurité et aussi par les nouvelles technologies. J'ai effectué une année de stage chez Neurotech SA, où j'ai travaillé comme support Odoo, je maitrise également Talend pour l'intégration de données."],
    typeSpeed: 20,
    loop: false
  });

let compteur = 0;

$(window).scroll(function() {

  const top = $('.counter').offset().top - window.innerHeight;

  if (compteur == 0 && $(window).scrollTop() > top) {
    $('.counter-value').each(function() {
      let $this = $(this),
        countTo = $this.attr('data-count');
      $({
        countNum: $this.text()
      }).animate({
        countNum : countTo
      },
      {
        duration: 10000,
        easing: 'swing',
        step: function() {
          $this.text(Math.floor(this.countNum));
        },
        complete: function() {
          $this.text(this.countNum);
        }
      });
    });
    compteur = 1;
  }
});

//AOS
AOS.init();
