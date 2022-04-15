function EnviarComentario() {

	// variaveis que são pegas do html
	var assunto = document.getElementById('idAssunto').value
	var conteudo = document.getElementById('idConteudo').value

	// criação das div
	var div1 =	document.createElement("div")
	div1.classList.add("card") //adição de class para a div
	div1.classList.add("mt-5")//TEM QUE FAZER ISSO DE UMA POR UMAAA :v

	var div2 = document.createElement("div")
	div2.classList.add("card-body")

	var hr = document.createElement("hr")

	var h5 = document.createElement("h5")

	var p = document.createElement("p")		

	// coloquei uma div dentro da outra, padrão bootstrap
	document.getElementById("idNewComentario").appendChild(div1)
	div1.appendChild(div2)
	div2.appendChild(h5).innerHTML = assunto
	div2.appendChild(hr)
	div2.appendChild(p).innerHTML = conteudo



}