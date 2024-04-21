// Función para crear una sección informativa dinámica sobre IMC y salud
const createIMCAdviceSection = () => {
    // Crear un contenedor para la sección informativa
    const informativeSection = document.createElement('div');
    informativeSection.style.marginTop = '20px';
    informativeSection.style.padding = '10px';
    informativeSection.style.border = '1px solid #CCC';
    informativeSection.style.borderRadius = '4px';
    informativeSection.style.backgroundColor = '#F9F9F9';
    informativeSection.style.width = '80%';
    informativeSection.style.textAlign = 'left';
    informativeSection.style.marginBottom ='50px';
    
    // Título de la sección informativa
    const title = document.createElement('h2');
    title.textContent = 'Consejos de salud personalizados basados en tu IMC';
    title.style.color = '#4A90E2';
    
    // Campo de entrada para el IMC
    const imcInput = document.createElement('input');
    imcInput.type = 'number';
    imcInput.placeholder = 'Ingresa tu IMC';
    imcInput.style.marginBottom = '10px';
    imcInput.style.paddingTop = '5px';
    imcInput.style.paddingBottom = '5px';
    imcInput.style.width = '99%';
    
    // Botón para obtener consejos personalizados
    const getAdviceButton = document.createElement('button');
    getAdviceButton.textContent = 'Obtener consejos';
    getAdviceButton.style.padding = '10px';
    getAdviceButton.style.backgroundColor = '#4CAF50';
    getAdviceButton.style.color = '#FFF';
    getAdviceButton.style.border = 'none';
    getAdviceButton.style.borderRadius = '4px';
    getAdviceButton.style.cursor = 'pointer';
    
    // Párrafo para mostrar consejos personalizados
    const adviceParagraph = document.createElement('p');
    adviceParagraph.id = 'adviceResult';
    adviceParagraph.style.marginTop = '10px';
    adviceParagraph.style.fontSize = '16px';
    
    // Función para obtener consejos personalizados
    const getPersonalizedAdvice = () => {
        const imc = parseFloat(imcInput.value);
        
        if (isNaN(imc)) {
            adviceParagraph.textContent = 'Por favor, ingresa un IMC válido.';
            return;
        }
        
        // Generar consejos personalizados según el IMC ingresado
        let advice = '';
        if (imc < 18.5) {
            advice = 'Te recomendamos aumentar tu ingesta calórica y hablar con un profesional de la salud.';
        } else if (imc >= 18.5 && imc < 24.9) {
            advice = '¡Tienes un peso saludable! Mantén una dieta equilibrada y realiza actividad física regularmente.';
        } else if (imc >= 25 && imc < 29.9) {
            advice = 'Considera reducir tu ingesta calórica y aumentar tu nivel de actividad física.';
        } else {
            advice = 'Consulta con un profesional de la salud para obtener orientación sobre cómo alcanzar un peso saludable.';
        }
        
        // Mostrar el consejo personalizado
        adviceParagraph.textContent = advice;
        
        // Limpiar el campo de entrada después de obtener el consejo
        imcInput.value = '';
    };
    
    // Añadir evento de clic al botón de obtener consejos
    getAdviceButton.addEventListener('click', getPersonalizedAdvice);
    
    // Agregar el título, campo de entrada, botón y párrafo a la sección informativa
    informativeSection.appendChild(title);
    informativeSection.appendChild(imcInput);
    informativeSection.appendChild(getAdviceButton);
    informativeSection.appendChild(adviceParagraph);
    
    // Retornar la sección informativa dinámica
    return informativeSection;
};

// Exportar la función para usarla en main.js
export default createIMCAdviceSection;