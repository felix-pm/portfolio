<?php

// 1. On charge le système qui permet d'importer automatiquement vos classes
require "config/autoload.php";

// 2. On instancie le routeur
$router = new Router();

// 3. On demande au routeur de traiter la requête (regarder l'URL et afficher la bonne page)
$router->handleRequest($_GET);

?>