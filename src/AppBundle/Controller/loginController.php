<?php

namespace AppBundle\Controller;

use AppBundle\Entity\BlogUser;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\HttpFoundation\Session\Session;


class loginController extends Controller
{



    /**
     * @Route("/login", name="login")
     */
    public function loginAction(Request $request)
    {
        $req = $request->request->all();
        if(sizeof($req) == 0){
            return $this->render('default/index.html.twig');
        }
        $user = $this->getUser();
        if ($user instanceof UserInterface) {
            return new Response(json_encode($user, true), 200);
        }
        /** @var AuthenticationException $exception */
        $exception = $this->get('security.authentication_utils')
            ->getLastAuthenticationError();
        $exception = $exception ? $exception->getMessage() : NULL;
        return new Response(json_encode($exception, true), 404);
    }

    /**
     * @Route("/auth", name="adminAuth")
     */
    public function authAction(Request $request)
    {
        $user = $this->getUser();


        if ($user instanceof UserInterface) {
            $role = $user->getUserType();
            return new Response ($role);
        }

        /** @var AuthenticationException $exception */
        $exception = $this->get('security.authentication_utils')
            ->getLastAuthenticationError();
        $exception = $exception ? $exception->getMessage() : NULL;
        return new Response(json_encode('exception', true), 404);
    }

//    /**
//     * @Route("/userAuth", name="auth")
//     */
//    public function userAuthAction(Request $request)
//    {
//        $user = $this->getUser();
//        $role = $user->getUserType();
//
//        if (($user instanceof UserInterface) && (($role == 'ROLE_ADMIN') || ($role == 'ROLE_USER'))) {
//            return new Response(json_encode($user, true), 200);
//        }
//
//        /** @var AuthenticationException $exception */
//        $exception = $this->get('security.authentication_utils')
//            ->getLastAuthenticationError();
//        $exception = $exception ? $exception->getMessage() : NULL;
//        return new Response(json_encode('exception', true), 404);
//    }

    /**
     * @Route("/logout", name="logout")
     */
    public function logoutAction() {

    }

}