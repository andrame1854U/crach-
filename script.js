
const nomeInput = document.getElementById('nome');
const cargoInput = document.getElementById('cargo');
const departamentoSelect = document.getElementById('departamento');


const badgeNome = document.getElementById('quadrado-nome');
const badgeCargo = document.getElementById('quadrado-cargo');
const badgeDepartamento = document.getElementById('quadrado-departamento');
const badge = document.getElementById('quadrado');


const btnGerar = document.getElementById('btn-gerar');

btnGerar.addEventListener('click', function() {

	const nome = nomeInput.value.trim();
	const cargo = cargoInput.value.trim();
	const departamento = departamentoSelect.value;

	badgeNome.textContent = nome;
	badgeCargo.textContent = cargo;
	badgeDepartamento.textContent = departamento;

	
	badge.style.border = '2px solid green';
	if (departamento === 'Design') {
		badge.style.backgroundColor = 'lightpurple';
	} else if (departamento === 'Desenvolvimento') {
		badge.style.backgroundColor = 'lightblue';

	} else {
		badge.style.backgroundColor = '#ffffff';
	}
});
