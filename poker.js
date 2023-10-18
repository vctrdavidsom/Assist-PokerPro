let currentPhase = "Pré-Flop";
        let currentPlayer = 1;
        setCurrentPlayer(currentPlayer);

        let pote = 0;
        const players = {};

        function addPlayer(playerNumber) {
            const playerName = prompt("Nome do jogador:");
            const chips = parseInt(prompt("Quantidade de fichas:"));
            if (playerName && !isNaN(chips) && chips >= 0) {
                players[`player${playerNumber}`] = { name: playerName, chips: chips, inGame: true };
                document.getElementById(`player${playerNumber}-info`).innerHTML = `<div class="player-info">${playerName}</div>Fichas: ${chips}`;
            }
        }

        function nextPlayer() {
            if (currentPlayer === 6 || currentPlayer == Object.keys(players).length) {
                currentPlayer = 1;
            } else {
                currentPlayer++;
            }
            setCurrentPlayer(currentPlayer);

        }

        function fold(playerNumber) {
            alert(`${players[`player${playerNumber}`].name} escolheu Fold.`);
            players[`player${currentPlayer}`].inGame = false;
            
            nextPlayer();
        }

        function check(playerNumber) {
            alert(`${players[`player${playerNumber}`].name} escolheu Check.`);
            nextPlayer();
        }

        function call(playerNumber) {
            const raiseAmount = pote;
            if (players[`player${playerNumber}`].chips >= raiseAmount) {
                players[`player${playerNumber}`].chips -= raiseAmount;
                pote += raiseAmount;
                document.getElementById("pote").textContent = `Pote: ${pote}`;
                document.getElementById(`player${playerNumber}-info`).innerHTML = `<div class="player-info">${players[`player${playerNumber}`].name}</div>Fichas: ${players[`player${playerNumber}`].chips}`;
                alert(`${players[`player${playerNumber}`].name} escolheu Call.`);
            } else {
                alert(`${players[`player${playerNumber}`].name} não possui fichas suficientes para dar Call.`);
            }
            nextPlayer();
        }

        function raise(playerNumber) {
            const raiseAmount = parseInt(prompt(`Quanto ${players[`player${playerNumber}`].name} deseja apostar no Raise?`));
            if (!isNaN(raiseAmount) && raiseAmount >= 0 && raiseAmount <= players[`player${playerNumber}`].chips) {
                players[`player${playerNumber}`].chips -= raiseAmount;
                pote += raiseAmount;
                document.getElementById("pote").textContent = `Pote: ${pote}`;
                document.getElementById(`player${playerNumber}-info`).innerHTML = `<div class="player-info">${players[`player${playerNumber}`].name}</div>Fichas: ${players[`player${playerNumber}`].chips}`;
                alert(`${players[`player${playerNumber}`].name} escolheu Raise ${raiseAmount}.`);
            } else {
                alert("Valor de Raise inválido.");
            }
            nextPlayer();
        }

        function nextPhase() {
            if (currentPhase === "Pré-Flop") {
                currentPhase = "Flop";
            } else if (currentPhase === "Flop") {
                currentPhase = "Turn";
            } else if (currentPhase === "Turn") {
                currentPhase = "River";
            } else if (currentPhase === "River") {
                currentPhase = "Showdown";
            } else if (currentPhase === "Showdown") {
                currentPhase = "Pré-Flop"; // Recomeçar o jogo
                currentPlayer = 1;
                setCurrentPlayer(currentPlayer);
            }
            document.getElementById("game-phase").textContent = `Fase: ${currentPhase}`;
        }
        
        function setCurrentPlayer(currentPlayer){
            document.getElementById("currentPlayer").innerHTML = `Jogador atual: ${currentPlayer}`;
        }