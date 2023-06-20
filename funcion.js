let menu = document.querySelector('#menu-icon')
let navbar = document.querySelector('.navbar')

menu.onclick = () =>{
    menu.classList.toggle('bx-x')
    navbar.classList.toggle('active')
}


const container = document.querySelector('.container')
const contra2 = document.querySelector('.contra2')
const container2 =document.querySelector('.container2')

container2.addEventListener('click', ()=> {
    container.classList.add('active');
    });
    contra2.addEventListener('click', ()=> {
        container.classList.remove('active');
        });
        const carForm = document.getElementById('car-form');
        const successMessage = document.getElementById('success-message');
        
        carForm.addEventListener('submit', function(event) {
          event.preventDefault();
        
          const brand = document.getElementById('brand').value;
          const model = document.getElementById('model').value;
          const year = document.getElementById('year').value;
        
          // Aquí puedes realizar cualquier acción adicional con los datos del formulario, como enviarlos a un servidor o guardarlos en una base de datos.
        
          successMessage.textContent = '¡Carro registrado exitosamente!';
          successMessage.style.display = 'block';
        
          // Opcional: Agregar animación con JavaScript
          successMessage.classList.add('fade-in');
        
          setTimeout(function() {
            successMessage.classList.remove('fade-in');
            successMessage.style.display = 'none';
          }, 3000);
        
          carForm.reset();
        });
        

