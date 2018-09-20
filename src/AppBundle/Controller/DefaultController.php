<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use AppBundle\Entity\BlogUser;
use Symfony\Component\HttpFoundation\Response;


class DefaultController extends Controller
{
    /**
     * @Route("/api/{slug}", name="API")
     */
    public function apiAction(Request $request, $slug = null)
    {
        // replace this example code with whatever you need
        // Symfony Backend integration
    }

    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request, $slug = null)
    {
        $req = $request->request->all();
        //$req = json_decode($req["username"], true);
        // replace this example code with whatever you need

        return $this->render('default/index.html.twig');
    }
    /**
     * @Route("/admin", name="admin")
     */
    public function adminAction(Request $request, $slug = null)
    {
        $req = $request->request->all();
        if(!isset($req['_token'])){
            return $this->redirectToRoute('homepage');
        }else {
            $em = $this->getDoctrine()->getManager();
            $user = $em->getRepository(BlogUser::class)->findOneBy(array('apiToken' => $req['_token']));
            if ($user == null) {
                return new Response(json_encode('not allowed', true), 403);
            }else if ($user->getUserType() == 'ROLE_ADMIN') {
                return $this->render('default/index.html.twig');
            }
            //$req = json_decode($req["username"], true);
            // replace this example code with whatever you need
        }
    }
    /**
     * @Route("/", name="errorpage")
     */
    public function errorAction(Request $request, $slug = null)
    {
        $req = $request->request->all();
        //$req = json_decode($req["username"], true);
        // replace this example code with whatever you need


        return $this->render('default/error.html.twig');
    }
}