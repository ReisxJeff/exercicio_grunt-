document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('calIMC').addEventListener('submit', function(e) {
        e.preventDefault();
    
        const peso = parseFloat(document.getElementById('peso').value);
        const altura = parseFloat(document.getElementById('altura').value);
        const sexo = document.getElementById('sexo').value;
    
        if (isNaN(peso) || isNaN(altura)) {
            alert("Por favor, insira valores válidos!");
            return;
        }
    
        const imc = peso / (altura * altura);
        let categoria = '';
    
        if (sexo === 'masculino') {
            if (imc < 18.5) categoria = 'Abaixo do peso';
            else if (imc >= 18.5 && imc <= 24.9) categoria = 'Peso normal';
            else if (imc >= 25 && imc <= 29.9) categoria = 'Sobrepeso';
            else categoria = 'Obesidade';
        } else {
            if (imc < 18.5) categoria = 'Abaixo do peso';
            else if (imc >= 18.5 && imc <= 24.9) categoria = 'Peso normal';
            else if (imc >= 25 && imc <= 29.9) categoria = 'Sobrepeso';
            else categoria = 'Obesidade';
        }
    
        document.getElementById('resultadoIMC').textContent = `${imc.toFixed(2)}`;
        document.getElementById('categoriaIMC').textContent = `${categoria}`;
        document.querySelector('.resultado').style.display = 'block';
    });    
})