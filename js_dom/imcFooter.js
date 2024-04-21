//imcFooter
const createIMCFooterSection = () => {
    const imcFooterSection = document.createElement('div');
    
    // Establecer estilos para la sección de IMC y pie de página
    imcFooterSection.style.marginTop = '20px';
    imcFooterSection.style.padding = '10px';
    imcFooterSection.style.border = '1px solid #CCC';
    imcFooterSection.style.borderRadius = '4px';
    imcFooterSection.style.backgroundColor = '#F9F9F9';
    imcFooterSection.style.width = '80%';
    imcFooterSection.style.textAlign = 'center';
    
    // Crear un título para describir la calculadora IMC
    const imcTitle = document.createElement('h2');
    imcTitle.textContent = 'Calculadora de IMC';
    imcTitle.style.marginBottom = '10px';
    imcTitle.style.color = "#4A90E2"
    
    // Crear elementos para el formulario de IMC
    const weightInput = document.createElement('input');
    weightInput.type = 'number';
    weightInput.placeholder = 'Peso (kg)';
    weightInput.style.margin = '5px';
    weightInput.style.padding = '5px';
    
    const heightInput = document.createElement('input');
    heightInput.type = 'number';
    heightInput.placeholder = 'Altura (m)';
    heightInput.style.margin = '5px';
    heightInput.style.padding = '5px';
    
    const calculateButton = document.createElement('button');
    calculateButton.textContent = 'Calcular IMC';
    calculateButton.style.margin = '5px';
    calculateButton.style.padding = '10px';
    calculateButton.style.backgroundColor = '#4CAF50';
    calculateButton.style.color = '#FFF';
    calculateButton.style.border = 'none';
    calculateButton.style.borderRadius = '4px';
    calculateButton.style.cursor = 'pointer';
    
    const resultParagraph = document.createElement('p');
    resultParagraph.id = 'imcResult';
    resultParagraph.style.marginTop = '10px';
    resultParagraph.style.fontSize = '16px';
    
    // Agregar el título y los elementos a la sección de IMC
    imcFooterSection.appendChild(imcTitle);
    imcFooterSection.appendChild(weightInput);
    imcFooterSection.appendChild(heightInput);
    imcFooterSection.appendChild(calculateButton);
    imcFooterSection.appendChild(resultParagraph);
    
    // Función para calcular el IMC y dar un comentario sobre el peso
    const calculateIMC = () => {
        const weight = parseFloat(weightInput.value);
        const height = parseFloat(heightInput.value);
        
        if (isNaN(weight) || isNaN(height) || height === 0) {
            resultParagraph.textContent = 'Por favor, ingresa valores válidos.';
            return;
        }
        
        const imc = weight / (height * height);
        
        // Comentar sobre el peso según el IMC
        let comment = '';
        if (imc < 18.5) {
            comment = 'Estás bajo de peso.';
        } else if (imc >= 18.5 && imc < 24.9) {
            comment = 'Tienes un peso normal.';
        } else if (imc >= 25 && imc < 29.9) {
            comment = 'Estás en sobrepeso.';
        } else {
            comment = 'Tienes obesidad.';
        }
        
        // Mostrar el resultado del IMC y el comentario
        resultParagraph.textContent = `Tu IMC es: ${imc.toFixed(2)}. ${comment}`;
        
        // Limpiar los campos de entrada después del cálculo
        weightInput.value = '';
        heightInput.value = '';
    };
    
    // Añadir evento de clic al botón de cálculo
    calculateButton.addEventListener('click', calculateIMC);
    
    // Agregar contenido del pie de página a la sección combinada
    const footer = document.createElement('footer');
    footer.textContent = 'Gracias por usar la calculadora de IMC';
    footer.style.marginTop = '20px';
    footer.style.padding = '10px';
    footer.style.backgroundColor = '#F9F9F9';
    footer.style.color = '#333';
    footer.style.fontSize = '14px';
    
    // Añadir el pie de página a la sección combinada
    imcFooterSection.appendChild(footer);
    
    return imcFooterSection;
  };
  
  // Exportar la función
  export default createIMCFooterSection;