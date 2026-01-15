<?php
class PortfolioController extends AbstractController {
    
    public function home() : void
    {
        $this->render("home", ["titre" => "Accueil"]);
    }

    public function experiences() : void
    {
        $this->render("experiences", ["titre" => "Mes Expériences"]);
    }

    public function skills() : void
    {
        $this->render("skills", ["titre" => "Mes Compétences"]);
    }

    public function projets() : void
    {
        $this->render("projets", ["titre" => "Mes Projets"]);
    }

    public function links() : void
    {
        $this->render("links", ["titre" => "Mes Liens"]);
    }

    public function notFound() : void
    {
        $this->render("notFound", []);
    }
}
?>