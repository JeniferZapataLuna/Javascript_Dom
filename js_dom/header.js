// header.js
const createHeader = () => {
    const header = document.createElement('header');
    header.textContent = 'Bienvenido, espero que te entretengas';
    
    // Añadir estilos mediante JavaScript
    header.style.color = '#4A90E2';
    header.style.fontSize = '24px';
    header.style.fontWeight = 'bold';
    header.style.marginBottom = '20px';
    header.style.textAlign = 'center';
    header.style.marginTop = '20px'
    
    return header;
};

export default createHeader;
