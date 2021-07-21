var tdNome = aluno.querySelectorAll('.media-aluno');
var media1 = tdNome.textContent;

var situacao = aluno.querySelector('situacao');
var reprovado= document.createTextNode('Reprovado')
var aprovado= document.createTextNode('aprovado')
var final= document.createTextNode('final')

if (media1>=70) {
		situacao.appendChild('aprovado') ;
		

	}
			if (media<40) {
			situacao.appendChild('reprovado');
		}
			if (media>40 && media<70) {
			situacao.appendChild('final');
		}



	



			


	