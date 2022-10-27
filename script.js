console.log("Hello World")
let einkaufsliste = []
function clickme() {
	let input= $("#textbox").val()
	console.log(input)
  einkaufsliste.push(input)
  console.log(einkaufsliste)
  $("#einkaufsliste").html("")
  for (let i of einkaufsliste) {
  	let checkbox = '<input type="checkbox">'
  	let item = $("<li></li>").html(checkbox + i)
  	$("#einkaufsliste").append(item)
  }
}
