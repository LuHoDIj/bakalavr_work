<?php

namespace BakalavrBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Security;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class VideoStreamController extends Controller
{
    /**
     * @Security("has_role('ROLE_USER')")
     * @Route("/video-stream", name="video.stream")
     */
    public function videoHome() {
        return $this->render('@Bakalavr/main.html.twig');
    }
}
