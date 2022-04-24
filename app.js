<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sudoku</title>
    <link rel="stylesheet" href="style.css">
</head>
<header class="site-header">
    <!--NAV BAR/MENU-->
    <div class="content-wrapper">
        <nav id="site-navigation" class="site-navigation">
            <div class="site-navigation-item">
                <ul class="site-menu">
                    <li class="site-menu-home"><a href="index.html"><strong>Home</strong></a></li>
                    <li class="site-menu-play"><a href="home.html"><strong>Play</strong></a></li>
                    <li class="site-menu-rule-strat"> <a href="rules.html"><strong>Rules & Strategies</strong></a></li>
                </ul>
            </div>
        </nav>
        <div class="theme-wrapper">
            <span class="theme"><strong>Lights</strong></span>
            <div class="checkbox-switch">
                <input type="checkbox" class="input-checkbox" checked="" onchange="toggleFunction()">
                <div class="checkbox-animate">
                    <span class="checkbox-off">OFF</span>
                    <span class="checkbox-on">ON</span>
                </div>"
            </div>
        </div>
        <!-- <div class="theme-switch"><span><strong>LIGHTS</strong></span>
                        <input type="checkbox" id="switch" class="checkbox" />
                        <label for="switch" class="toggle">
                            <p id="status">OFF  ON</p>
                        </label>
                    </div> -->

    </div>
</header>

<body>
    <!--Difficulty-->
    <div class="start-game-menu" id="start-menu">
        <div class="diff" id="game_type">
            <h3>Choose Difficulty:</h3>
            <label><input type="radio" id="easy" class="label" name="diff_level" checked> Easy</label>
            <label><input type="radio" id="medium" class="label" name="diff_level" onclick="window.location='https://mearchy13.github.io/sudoku/medium.html'" > Medium</label>
            <label><input type="radio" id="hard" class="label" name="diff_level" onclick="window.location='https://mearchy13.github.io/sudoku/hard.html'" > Hard</label>
        </div><br><br>

        <div class="start-menu-items">
            <div class="start-menu-item"><button type="button" id="start" onclick="alertMsg()">New Game</button></div><br>
            <div class="start-menu-item"><button type="button" id="start" onclick="clearBoard()">Clear</button></div>
        </div>
        </div>
        <!-- 9x9 board -->
        <div id="board"></div>
        <div id="digits"></div>

         <!-- Timer / Stopwatch -->
         <div class="watch">
            <div class="time">
                00:00:00
            </div>
            <div class="controls">
                <button class="button-controls" id="startWatch">Start</button>
                <button class="button-controls" id="stopWatch">Stop</button>
                <button class="button-controls" id="resetWatch">Reset</button>
            </div>
        </div>

    <script src="app.js"></script>
</body>
</html>
