// form.js
// Función para crear la sección de formulario
const createForm = () => {
    // Crear un formulario
    const form = document.createElement('form');
    form.id = 'simpleForm';
    form.style.backgroundColor = '#F9F9F9'; // Color de fondo #F9F9F9
    form.style.padding = '20px'; // Agregar relleno
    form.style.border = '1px solid #CCC'; // Agregar borde
    form.style.borderRadius = '4px'; // Agregar radio de borde
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    form.style.alignItems = 'center'; // Centrar el formulario

    // Crear campo de entrada para el texto
    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = 'Ingresa texto aquí';
    input.style.padding = '10px';
    input.style.border = '1px solid #CCC';
    input.style.borderRadius = '4px';
    input.style.width = '100%'; // Ancho completo

    // Crear botón de envío
    const button = document.createElement('button');
    button.type = 'submit';
    button.textContent = 'Enviar';
    button.style.padding = '10px';
    button.style.backgroundColor = '#4CAF50';
    button.style.color = '#FFF';
    button.style.border = 'none';
    button.style.borderRadius = '4px';
    button.style.cursor = 'pointer';
    button.style.marginTop = '10px';

    // Crear párrafo para mostrar mensajes
    const messageParagraph = document.createElement('p');
    messageParagraph.id = 'message';
    messageParagraph.style.fontSize = '16px';
    messageParagraph.style.color = 'black';
    messageParagraph.style.marginTop = '10px';

    // Añadir los elementos al formulario
    form.appendChild(input);
    form.appendChild(button);
    form.appendChild(messageParagraph);

    // Manejar el evento de envío del formulario
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const text = input.value.trim(); // Eliminar espacios en blanco

        // Validar la entrada del usuario
        if (text.length > 0) {
            messageParagraph.textContent = `Has ingresado: "${text}"`;
        } else {
            messageParagraph.textContent = 'Por favor, ingresa algún texto.';
        }

        // Limpiar el campo de entrada
        input.value = '';
    });

    return form;
};

// Exportar la función para usarla en main.js
export default createForm;