body, div, h1, h2, h3, p, figure {
    margin: 0;
    padding: 0;
    border: 0;
}

body {
    background-image: url(../img/BackgroundBory.jpg);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

#game {
    background-image: url(../img/BackgroundDaDIv.png);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    height: 490px;
    width: 1250px;
    flex-direction: row;
    padding: -2%;
    margin: 2%;
    align-items: center;
    position: relative;
    left: 120px;
    border-radius: 80px;
}
h1{
    text-align: center;
    color:  #fed38e;
}
h2{
    position: relative;
    color: #ff0000;
    top: 80px;
    left: 540px;
}
/*.action-button{
    width: 40px;
    height: 15px;
    font-size: 10px;
}
.action-button-player{
    width: 150px;
    height: 15px;
    font-size: 10px;
}*/

#pote {
    position: relative;
    color: #ff0000;
    bottom: 150px;
    left: 138px;
    font-size: 50px;

}
.player-slot{
    color: #ccc;
}
#game {
    position: relative;
    display: grid;
    padding-bottom: 65px;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
}

#player1 {
    width: 240px;
    height: 50px;
    position: relative;
    left: -200px;
    top: -35px;
    bottom: 7px;
    border-radius: 80px;
}

#player2 {
    width: 240px;
    height: 50px;
    position: relative;
    top: -35px;
    bottom: 7px;
    right: 25px;
    border-radius: 80px;
}

#player3 {
    width: 210px;
    height: 80px;
    position: relative;
    left: 1005px;
    top: 30px;
    border-radius: 80px;
}

#player4 {
    width: 240px;
    height: 50px;
    position: relative;
    left: 360px;
    top: 285px;
    border-radius: 80px;
}

#player5 {
    width: 240px;
    height: 50px;
    position: relative;
    right: 585px;
    top: 240px;
    top: 285px;
    border-radius: 80px;
}

#player6 {
    width: 210px;
    height: 80px;
    position: relative;
    bottom: 140px;
    left: 5px;
    border-radius: 80px;

}

.player-slot {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
}
.player-info {
    font-weight: bold;
}
#game-phase {
    color: #ff0000;
    text-align: center;
    font-size: 20px;
    margin-top: 20px;
    position: relative;
    bottom: 5px;
}
#next-phase-button {
    text-align: center;
    margin-top: 10px;
    position: relative;
    bottom: 35px;
    right: 420px;
}
.action-button {
    margin: 5px;
}
