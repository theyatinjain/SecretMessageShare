const { hash } = window.location;
const message = atob(hash.replace('#', ''));

if(message) {
    document.getElementById('message-form').classList.add('hide');
    document.getElementById('message-show').classList.remove('hide');
    document.querySelector('#message-show h1').innerHTML = message;
}

document.querySelector('form').addEventListener('submit', event => {
    event.preventDefault();
    
    const input = document.getElementById('message-input');
    const encrypted = btoa(input.value);
    const linkInput = document.getElementById('link-input');
    
    document.getElementById('message-form').classList.add('hide');
    document.getElementById('link-form').classList.remove('hide');
    
    linkInput.value = `${window.location}#${encrypted}`;
    linkInput.select();
});