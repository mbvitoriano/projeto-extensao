// Array da seleção das imagens e músicas

var img = [$('#img1'), $('#img2'), $('#img3'), $('#img4'), $('#img5'), $('#img6')];
var som = [$('#song1'), $('#song2'), $('#song3'), $('#song4'), $('#song5'), $('#song6')];

// função tocar musicas

this.playing = false;

function tocar(musica, song) {
	//Vai parar todas as músicas
	for (var i = 0; i < som.length; i++) {
		som[i][0].pause();
		img[i].css('opacity', '1');
	}

	//Vai tocar a música passada por parâmetro
	if (!this.playing) {
		song[0].play();
		musica.css('opacity', '0.3');
	}

	this.playing = !this.playing;
}

//Imagens, ao clicar tocar música

img[0].click(function () {
	tocar(img[0], som[0]);
});

// Segunda imagem

img[1].click(function () {
	tocar(img[1], som[1]);
});

// Terceira imagem

img[2].click(function () {
	tocar(img[2], som[2]);
});

// Quarta imagem

img[3].click(function () {
	tocar(img[3], som[3]);
});

// Quinta imagem

img[4].click(function () {
	tocar(img[4], som[4]);
});

// última imagem

img[5].click(function () {
	tocar(img[5], som[5]);
});

//Aparecer legenda em baixo dos albuns

$('figure').mouseleave(function () {
	$('figcaption').css('visibility', 'hidden');
});

$($('figure')).mouseenter(function () {
	$('figcaption', this).css('visibility', 'visible');
	$(this).css('cursor', 'pointer');
});