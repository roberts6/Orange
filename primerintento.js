const buttons = document.querySelectorAll('.btn')
const formPages = document.querySelectorAll('.form-page')
const bars = document.querySelectorAll('.bar-circle')

let pageStates = {
    oldPageNum: null,
    currentPage: null,
}

const pageTransform = () => {
    formPages.forEach(page => {
        page.style.transform = `translateX(-${(pageStates.currentPage) * 100}%)`
    })
}

const handleClasses = () => {

    bars.forEach(bar => {
        bar.classList.remove('active')
    })

    if (bars[pageStates.currentPage]) {
        for (let i = 0; i < pageStates.currentPage + 1; i++) {
            bars[i].classList.add('active')
        }
    } else {
        bars.forEach(bar => {
            bar.classList.add('active')
            bar.classList.add('done')
        })
    }
}

const indexFinder = (el) => {
    let i = 0;
    for (; el = el.previousElementSibling; i++);
    return i;
}

const pageHandler = (e) => {
    e.preventDefault()

    const navData = e.currentTarget.getAttribute('data-nav')
    pageStates.oldPageNum = indexFinder(e.currentTarget.parentElement)

    if (navData == "prev") {
        pageStates.currentPage = pageStates.oldPageNum - 1
    } else {
        pageStates.currentPage = pageStates.oldPageNum + 1
    }

    pageTransform()
    handleClasses()
}


const barHandler = (e) => {
    e.preventDefault()
    pageStates.currentPage = indexFinder(e.currentTarget)

    pageTransform()
    handleClasses()
}

document.querySelector('#btn-0').addEventListener('click', pageHandler)
document.querySelector('#btn-2').addEventListener('click', pageHandler)
document.querySelector('#btn-3').addEventListener('click', pageHandler)
document.querySelector('#btn-4').addEventListener('click', pageHandler)
document.querySelector('#btn-6').addEventListener('click', pageHandler)
document.querySelector('#btn-8').addEventListener('click', pageHandler)
document.querySelector('#btn-10').addEventListener('click', pageHandler)
document.querySelector('#btn-12').addEventListener('click', pageHandler)

// buttons.forEach(button => {
//     button.addEventListener('click', pageHandler)
// })

bars.forEach(bar => {
    bar.addEventListener('click', barHandler)
})



const person = {};
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;


document.addEventListener("DOMContentLoaded", () => {
    const name = document.getElementById('nombre');
    const lastName = document.getElementById('apellido');
    const email = document.getElementById('correo');
    const phone = document.getElementById('telefono');
    const terms = document.getElementById('flexCheckDefault');

    person.name = name.value;
    person.lastName = lastName.value;
    person.email = email.value;
    person.phone = phone.value;
    person.terms = terms.checked;

    if (name.value.trim() && lastName.value.trim() && emailRegex.test(email.value) && phoneRegex.test(phone.value) && terms.checked) {

    } else {
        console.log('no pasa')
    }
})

document.querySelector('#btn-1').addEventListener('click', e => {
    e.preventDefault();
    const name = document.getElementById('nombre');
    const lastName = document.getElementById('apellido');
    const email = document.getElementById('correo');
    const phone = document.getElementById('telefono');
    const terms = document.getElementById('flexCheckDefault');

    person.name = name.value;
    person.lastName = lastName.value;
    person.email = email.value;
    person.phone = phone.value;
    person.terms = terms.checked;

    if (!name.value.trim()) {
        showMessage('error-' + name.id);
    } else if (!lastName.value.trim()) {
        showMessage('error-' + lastName.id);
    } else if (!emailRegex.test(email.value)) {
        showMessage('error-' + email.id);
    } else if (!phoneRegex.test(phone.value)) {
        showMessage('error-' + phone.id);
    } else if (!terms.checked) {
        showMessage('error-' + terms.id);
    } else {
        pageHandler(e)
        console.log(person.name);
        console.log(person.lastName);
        console.log(person.email);
        console.log(person.phone);
        console.log(person.terms);

    }
})


document.querySelector('#btn-1').addEventListener('click', e => {
    e.preventDefault();
    const name = document.getElementById('nombre');
    const lastName = document.getElementById('apellido');
    const email = document.getElementById('correo');
    const phone = document.getElementById('telefono');
    const terms = document.getElementById('flexCheckDefault');

    person.name = name.value;
    person.lastName = lastName.value;
    person.email = email.value;
    person.phone = phone.value;
    person.terms = terms.checked;

    const validateInputs = (name, lastName, email, phone, terms) => {
        if (!name.value.trim()) {
          showMessage('error-' + name.id);
        } else if (!lastName.value.trim()) {
          showMessage('error-' + lastName.id);
        } else if (!emailRegex.test(email.value)) {
          showMessage('error-' + email.id);
        } else if (!phoneRegex.test(phone.value)) {
          showMessage('error-' + phone.id);
        } else if (!terms.checked) {
          showMessage('error-' + terms.id);
        } else {
          return true;
        }
        return false;
      };
    
    
      
      document.querySelector('#btn-1').addEventListener('click', (e) => {
        e.preventDefault();
        const name = document.getElementById('nombre');
        const lastName = document.getElementById('apellido');
        const email = document.getElementById('correo');
        const phone = document.getElementById('telefono');
        const terms = document.getElementById('flexCheckDefault');
      
        person.name = name.value;
        person.lastName = lastName.value;
        person.email = email.value;
        person.phone = phone.value;
        person.terms = terms.checked;

        const updateSpanValue = (spanElement, value) => {
            spanElement.textContent = value;
          };
      
        if (validateInputs(name, lastName, email, phone, terms)) {
          updateSpanValue(document.getElementById('nombreCheckeo'), person.name);
          updateSpanValue(document.getElementById('nombreCheckeo2'), person.name);
          updateSpanValue(document.getElementById('apellidoCheckeo'), person.lastName);
          updateSpanValue(document.getElementById('correoCheckeo'), person.email);
          updateSpanValue(document.getElementById('telefonoCheckeo'), person.phone);
      
          pageHandler(e);
      
          console.log(person.name);
          console.log(person.lastName);
          console.log(person.email);
          console.log(person.phone);
          console.log(person.terms);
        }
      })
    }
)


  

const btn5ClickHandler = (e) => {   
    e.preventDefault();
    const musica = document.querySelector('input[name="musica"]:checked');
    if (musica) {
        person.musica = musica.value;
        console.log(person.musica);
        pageHandler(e);
    } else {
        alert("Por favor, elige tu música.");
        person.musica = ""
    }
};
document.querySelector('#btn-5').addEventListener('click', btn5ClickHandler);

const btn7ClickHandler = (e) => {   
    e.preventDefault();
    const estilo = document.querySelector('input[name="estilo"]:checked');
    if (estilo) {
        person.estilo = estilo.value;
        console.log(person.estilo);
        pageHandler(e);
    } else {
        alert("Por favor, elige un estilo.");
        person.estilo = ""
    }
};
document.querySelector('#btn-7').addEventListener('click', btn7ClickHandler);

const btn9ClickHandler = (e) => {   
    e.preventDefault();
    const gorra = document.querySelector('input[name="gorra"]:checked');
    if (gorra) {
        person.gorra = gorra.value;
        console.log(person.gorra);
        pageHandler(e);
    } else {
        alert("Por favor, elige una gorra.");
        person.gorra = ""
    }
};
document.querySelector('#btn-9').addEventListener('click', btn9ClickHandler);

const btn11ClickHandler = (e) => {   
    e.preventDefault();
    const color = document.querySelector('input[name="color"]:checked');
    if (color) {
        person.color = color.value;
        console.log(person.color);
        pageHandler(e);
    } else {
        alert("Por favor, elige un color.");
        person.color = ""
    }
};
document.querySelector('#btn-11').addEventListener('click', btn11ClickHandler);

const btn13ClickHandler = (e) => {   
    e.preventDefault();
    const insignia = document.querySelector('input[name="insignia"]:checked');
    if (insignia) {
        person.insignia = insignia.value;
        console.log(person.insignia);
        pageHandler(e);
    } else {
        alert("Por favor, elige una insignia.");
    }
};
document.querySelector('#btn-13').addEventListener('click', btn13ClickHandler);


function showMessage(id) {
    const divMessage = document.querySelector('#' + id);
    divMessage.classList.add('d-block');
}

function hiddeMessage(id) {
    const divMessage = document.querySelector('#' + id);
    divMessage.classList.remove('d-block');
}