let currentPhase = "Pré-Flop";
        let currentPlayer = 1;
        setCurrentPlayer(currentPlayer);
        let newRaise = 0;

        let pote = 0;
        const players = {};

        function addPlayer(playerNumber) {
            const playerName = prompt("Nome do jogador:");
            const chips = parseInt(prompt("Quantidade de fichas:"));
            if (playerName && !isNaN(chips) && chips >= 0) {
                players[`player${playerNumber}`] = { name: playerName, chips: chips };
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
            
            nextPlayer();
        }

        function check(playerNumber) {
            alert(`${players[`player${playerNumber}`].name} escolheu Check.`);
            nextPlayer();
        }

        function call(playerNumber) {
            const raiseAmount = newRaise;
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
                newRaise = raiseAmount;
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
                newRaise = 0;
            } else if (currentPhase === "Flop") {
                currentPhase = "Turn";
                newRaise = 0;
            } else if (currentPhase === "Turn") {
                currentPhase = "River";
                newRaise = 0;
            } else if (currentPhase === "River") {
                currentPhase = "Showdown";
                newRaise = 0;
            } else if (currentPhase === "Showdown") {
                currentPhase = "Pré-Flop"; // Recomeçar o jogo
                currentPlayer = 1;
                newRaise = 0;
                setCurrentPlayer(currentPlayer);
            }
            document.getElementById("game-phase").textContent = `Fase: ${currentPhase}`;
        }
        
        function setCurrentPlayer(currentPlayer){
            document.getElementById("currentPlayer").innerHTML = `Ação do jogador: ${currentPlayer}`;
        }

        //_________________________________________________________________________________________________
       
        function endGame() {
            const vencedorNome = prompt("Informe o nome do jogador vencedor:");
            for (const playerKey in players) {
                if (players[playerKey].name === vencedorNome) {
                    const vencedor = playerKey;
                    alert(`${vencedor} venceu a partida! Pote: ${pote}`);
                    players[vencedor].chips += pote;
                    pote = 0
                    currentPhase = "Pré-Flop"
                    document.getElementById("pote").textContent = `Pote: ${pote}`;
                    nextPlayer(); // Avança para o próximo jogador
                    setCurrentPlayer(currentPlayer); // Atualiza o jogador atual
                    return;
                }
            }
            alert("Jogador não encontrado ou já está fora da partida. Tente novamente.");
        }
        