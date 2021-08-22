function setPlayerStyle(player) {
    player.style.border = '1px solid red';
    player.style.borderRadius = '10px';
    player.style.padding = '10px';
    player.style.margin = '10px';
}

const players = document.getElementsByClassName('player');
for (const player of players) {
    setPlayerStyle(player);
    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'yellow';
    // })
   
};
function addPlayer() {
    const playerContainer = document.getElementById('players');
    const player = document.createElement('div');
    player.classList.add('player');
    player.innerHTML = `
    <h4 class="player-name">player-4</h4>
    <p>Harum mollitia reiciendis odit aliquid modi quibusdam assumenda esse doloremque? Dolor, eos. Totam, magni suscipit! Asperiores provident corrupti quisquam nostrum corporis quae rerum, consectetur dolore eos. Sunt maxime, magnam enim, voluptatum quo accusamus facilis eius voluptas, eaque doloribus autem pariatur!</p>
    `;
    setPlayerStyle(player)
    // player.addEventListener('click', function () {
    //     player.style.backgroundColor = 'yellow';
    // })
   
    playerContainer.appendChild(player);
}
document.getElementById('players').addEventListener('click', function (event) {
    if (event.target.tagName.toLowerCase() == 'div') {
        event.target.style.backgroundColor = 'yellow';
    }
    else {
        event.target.parentNode.style.backgroundColor = 'yellow';
    }
})