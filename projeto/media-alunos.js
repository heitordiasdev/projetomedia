var alunos = document.querySelectorAll(".aluno");
console.log(alunos);

for (var i = 0; i < alunos.length; i++) {
	var aluno = alunos[i]
 	var tdNota1 = aluno.querySelector(".info-nota1")
	var nota1= tdNota1.textContent;
	console.log(nota1);

	var tdNota2 = aluno.querySelector(".info-nota2")
	var nota2= tdNota2.textContent;
	console.log(nota2);

	var tdNota3 = aluno.querySelector(".info-nota3")
	var nota3= tdNota3.textContent;
	console.log(nota3);


	var notaValida = true

	if (nota1<0 || nota2<0 || nota3<0) {
		console.log("Alguma(s) nota(s) está invalida")
		var notaValida = false
	}

	if (notaValida) {
		var tdSituacao = aluno.querySelector('.situacao')
		var media = 0
		var media = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;
		console.log(media);

		var tdMedia = aluno.querySelector(".media-aluno");
		tdMedia.textContent= media.toFixed(0);

		if (media>=70) {
		var situacao = "Aprovado"
		tdSituacao.textContent= situacao;
	}
			if (media<40) {
			var situacao = "reprovado"
			tdSituacao.textContent= situacao;
		}
			if (media>40 && media<70) {
			var situacao = "Prova final"
			tdSituacao.textContent= situacao;
		}

}



var titulo = document.querySelector(".menu");
titulo.addEventListener("click", function() {
	console.log("Tomara que não passe :)")
})

function mostraMensagem() {
	console.log("Tomara que não passe :)")
 }


 function calculaMedia(nota1, nota2, nota3) {
 	var medias = 0;
 	medias = (parseInt(nota1) + parseInt(nota2) + parseInt(nota3)) / 3;
 	return medias.toFixed(2);
 }

}

function situacao_media(media) {

	if (media>=70) {
		return 'Aprovado'
	}
			
	if (media<40) {
		return 'Reprovado'
	}
	if (media>40 && media<70) {
		return 'Prova final'
		
	}
}
