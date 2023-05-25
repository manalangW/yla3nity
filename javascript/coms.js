
document.querySelectorAll('.imgc img').forEach(image =>{
    image.onclick = ( ) =>{
    document.querySelector('.popup').style.display='block';
    document.querySelector('.popup img').src = image.getAttribute('src');
    }
});
document.querySelector('.popup span').onclick = () =>{
    document.querySelector('.popup').style.display='none';
}

function Alert()
{
    alert("Apologies, this blog post has yet to be finished.\nPlease Choose a different post.");
}

function Alert1()
{
    alert("You Are Already Here.");
}


function ServiceButton()
{
    window.location.href='../html/service.html';
}

//=========================================================================================
const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText=option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});
