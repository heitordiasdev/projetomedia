var botao = document.querySelector("#adicionar-aluno");
botao.addEventListener("click", function(event) {
	event.preventDefault()

	var form = document.querySelector("#form-alunos")

	var aluno = obterNotasDosAlunos(form);

	var alunoTr = montaTr(aluno);

	var tabela = document.querySelector("#info-tabela");

	tabela.appendChild(alunoTr);

	form.reset();


})



function obterNotasDosAlunos(form) {

	var aluno = {
		nome: form.nome.value,
		nota1: form.nota1.value,
		nota2: form.nota2.value, 
		nota3: form.nota3.value,
		media5: calculaMedia(form.nota1.value,form.nota2.value,form.nota3.value),
		situacao: situacao_media(calculaMedia(form.nota1.value,form.nota2.value,form.nota3.value))

	}

	return aluno;

}

function montaTd(dado, classe) {
	var td = document.createElement("td");
	td.classList.add(classe)
	td.textContent = dado;

	return td;

}

function montaTr(aluno) {
	var alunoTr = document.createElement("tr");
	alunoTr.classList.add("aluno");


	alunoTr.appendChild(montaTd(aluno.nome, "info-nome"));
	alunoTr.appendChild(montaTd(aluno.nota1, "info-nota1"));
	alunoTr.appendChild(montaTd(aluno.nota2, "info-nota2"));
	alunoTr.appendChild(montaTd(aluno.nota3, "info-nota3"));
	alunoTr.appendChild(montaTd(aluno.media5, "media-aluno"));
	alunoTr.appendChild(montaTd(aluno.situacao, "situacao"));

	return alunoTr;
}