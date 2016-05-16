<?php

namespace BakalavrBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;

class DefaultController extends Controller
{
    /**
     * @Route("/")
     */
    public function indexAction()
    {
        $csrfToken = $this->get('security.csrf.token_manager')->getToken('authenticate')->getValue();
        return $this->render('@Bakalavr/index.html.twig', [
            'token' => $csrfToken
        ]);
    }
}
