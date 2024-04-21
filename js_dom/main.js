// Importar los componentes
import createHeader from './header.js';
import createForm from './form.js';
import createIMCFooterSection from './imcFooter.js';
import createIMCAdviceSection from './imcAdvice.js';

// Seleccionar el div con id "app"
const appDiv = document.getElementById('app');

// Aplicar estilo al div para centrar los componentes
appDiv.style.display = 'flex';
appDiv.style.flexDirection = 'column';
appDiv.style.alignItems = 'center';

// Agregar componentes
appDiv.appendChild(createHeader());
appDiv.appendChild(createForm());

// Agregar la sección de IMC y footer
appDiv.appendChild(createIMCFooterSection());
// Agregar la sección informativa 
appDiv.appendChild(createIMCAdviceSection());