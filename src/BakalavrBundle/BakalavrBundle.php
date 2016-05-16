<?php

namespace BakalavrBundle;

use Symfony\Component\HttpKernel\Bundle\Bundle;

class BakalavrBundle extends Bundle
{
    public function getParent()
    {
        return 'FOSUserBundle';
    }
}
