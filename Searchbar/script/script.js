const dataContainer = document.getElementById('userContainer');
const input = document.getElementById('input');

fetch("../data/users.json")
.then(response => {
   return response.json();
})
.then(data => {
    data.forEach(user => {
        const div = document.createElement('div');
        div.classList.add('user');
        div.textContent = user;
        dataContainer.appendChild(div);
    });
});

input.addEventListener('input', inp => {
    const query = inp.target.value;
    const target = [...dataContainer.children];
    target.forEach(user => {
        if (user.textContent.includes(query)) user.classList.remove('hide');
        else user.classList.add('hide');
    })
})