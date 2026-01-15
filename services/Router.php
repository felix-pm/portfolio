<?php

class Router
{
    public function handleRequest(array $get) : void
    {
        if(isset($get["path"]))
        {
            if($get["path"] === "home")
            {
                $ctrl = new PortfolioController();
                $ctrl->home();
            }
            else if($get["path"] === "skills")
            {
                $ctrl = new PortfolioController();
                $ctrl->skills();
            }
            else if($get["path"] === "projets")
            {
                $ctrl = new PortfolioController();
                $ctrl->projets();
            }
            else if($get["path"] === "links")
            {
                $ctrl = new PortfolioController();
                $ctrl->links();
            }
            else if($get["path"] === "experiences")
            {
                $ctrl = new PortfolioController();
                $ctrl->experiences();
            }
            else
            {
                $ctrl = new PortfolioController();
                $ctrl->notFound();
            }
        }
        else
        {
            $ctrl = new PortfolioController();
            $ctrl->home();
        }
    }
}

?>