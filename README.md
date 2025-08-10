[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=32&pause=1000&width=435&lines=Challenger+Amigo+Secreto)](https://git.io/typing-svg)

# 🎁  Proyecto App Sorteo(Frontend)

## Descripción del Proyecto



Aplicación web para organizar y realizar sorteos de **Amigo Secreto** de forma simple, interactiva y con animaciones 🎉.  
Permite registrar hasta 20 participantes, sortear nombres aleatoriamente, guardar los datos en el navegador y reiniciar el sorteo cuando se desee.


![alt text](<assets/Screenshot 2025-08-09 at 15-07-24 Amigo Secreto.png>)

## 📌 Características principales



- **Registro de participantes** con validación de:
  - No dejar el campo vacío.
  - Solo letras y espacios.
  - Límite máximo de **10 caracteres** por nombre.
  - No se permiten nombres duplicados.
  - Límite total de **20 participantes**.

- **Sorteo aleatorio**:
  - Se debe tener al menos 3 participantes para iniciar el sorteo.
  - Cada nombre sorteado se elimina de la lista de participantes y pasa a la lista de "Sorteados".
  - Animación de **confeti** para celebrar cada sorteo.

- **Persistencia de datos**:
  - Los nombres cargados y sorteados se guardan en **`localStorage`**, por lo que no se pierden al recargar la página.

- **Contador dinámico**:
  - Muestra cuántos amigos están cargados y cuántos sorteos restan.
  - Ejemplo: `Amigos cargados: 5 / 20 | Sorteos restantes: 5`

- **Reinicio del sorteo**:
  - Opción para vaciar ambas listas (cargados y sorteados) con confirmación.

- **Interfaz adaptativa (Responsive)**:
  - Compatible con móviles, tablets y computadoras.

## 🛠 Tecnologías usadas
![lenguajes utilizados](https://imgs.search.brave.com/Xo2kes1eZSI4UI0BPeX-jU1-ctyVU1jlRq6M1oGUS98/rs:fit:860:0:0/g:ce/aHR0cDovL3d3dy5j/dXJzb3NnaXMuY29t/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzA2L2xlbmd1YWpl/c18xLnBuZw)


- **HTML5** → Estructura del sitio.
- **CSS3** → Estilos, responsive design y variables de color.
- **JavaScript** → Lógica del sorteo, validaciones y persistencia de datos.
- **[SweetAlert2](https://sweetalert2.github.io/)** → Ventanas emergentes con mensajes personalizados.
- **[Canvas-Confetti](https://www.npmjs.com/package/canvas-confetti)** → Animación de confeti al sortear.
- **[Font Awesome](https://fontawesome.com/)** → Íconos para redes sociales.
- **Google Fonts** → Tipografías personalizadas.

## Uso de JavaScript

JavaScript es clave para la interacción y dinamismo en la página. 


## Estructura del Proyecto

1. **HTML**: Estructura base de la app
2. **CSS**: Estilos personalizados  donde se definen los colores, fuentes y el diseño responsive.
3. **JavaScript**: Archivo principal donde se maneja la interacción del usuario
4. **Imágenes**: Ubicadas en la carpeta `assets`, todas las imágenes del diseño se cargan desde aquí.

## 🚀 Instalación y uso

1. **Clonar o descargar el proyecto**
   ```bash
  git@github.com:MLauraSal/Challenger_Alura-amigo-secreto.git
   cd amigo-secreto

## Estructura de archivos
/amigo-secreto
├── index.html      # Página principal
├── styles.css      # Estilos
├── app.js          # Lógica del sorteo
└── assets/         # Imágenes y recursos

## Abrir en el navegador

 Haz doble clic en index.html o abre el archivo con Live Server
 
## 📖 Funcionamiento paso a paso
1. Agregar un participante

    Escribir un nombre en el campo de texto.

    Pulsar "Agregar".

    El sistema validará el nombre y lo añadirá a la lista si es válido.

2. Sortear un nombre

    Pulsar "Sortear".

    Si hay al menos 3 participantes, se elegirá uno aleatoriamente.

    El nombre sorteado pasará a la lista de "Nombres ya sorteados".

    Se mostrará un mensaje de felicitación con confeti.

3. Ver el contador

    En todo momento podrás ver:

        Cuántos amigos están cargados.

        Cuántos sorteos faltan.

4. Reiniciar el sorteo

    Pulsar "Reiniciar".

    Confirmar la acción para vaciar ambas listas.

📂 Persistencia con LocalStorage

    Datos guardados:

        Lista de amigos cargados (names)

        Lista de amigos sorteados (sorteados)

    Ventajas:

        No se pierden los datos si se recarga o se cierra la pestaña.

        Solo se borran con la opción "Reiniciar".

📱 Responsive Design

    En pantallas menores a 650px, el diseño se adapta para que:

        Las secciones se muestren una debajo de otra.

        Botones y textos sean más pequeños para una mejor visualización.

📌 Mejoras futuras

    Agregar opción de importar/exportar listas de participantes.

    Posibilidad de personalizar el límite de participantes.

    Cambiar los colores del contador cuando queden pocos sorteos.

    Animaciones adicionales al agregar o eliminar nombres.

👩‍💻 Autor

    Mariana Salgueiro
   

