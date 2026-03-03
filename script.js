// referenciar inputs do formulário
const nomeInput = document.getElementById('nome');
const cargoInput = document.getElementById('cargo');
const departamentoSelect = document.getElementById('departamento');

// referenciar campos dentro do crachá
const badgeNome = document.getElementById('quadrado-nome');
const badgeCargo = document.getElementById('quadrado-cargo');
const badgeDepartamento = document.getElementById('quadrado-departamento');
const badge = document.getElementById('quadrado');

// botão gerar
const btnGerar = document.getElementById('btn-gerar');

btnGerar.addEventListener('click', function() {
	// capturar valores
	const nome = nomeInput.value.trim();
	const cargo = cargoInput.value.trim();
	const departamento = departamentoSelect.value;

	// imprimir no crachá
	badgeNome.textContent = nome;
	badgeCargo.textContent = cargo;
	badgeDepartamento.textContent = departamento;

	// borda verde quando gerado
	badge.style.border = '2px solid green';

	// cor de fundo conforme departamento
	if (departamento === 'Design') {
		badge.style.backgroundColor = 'lightpurple';
	} else if (departamento === 'Desenvolvimento') {
		badge.style.backgroundColor = 'lightblue';
	} else if (departamento === 'Marketing') {
		badge.style.backgroundColor = 'lightyellow';
	} else {
		badge.style.backgroundColor = '#ffffff';
	}
});
