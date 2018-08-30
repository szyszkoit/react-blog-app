<?php

namespace AppBundle\Controller;

use AppBundle\Entity\BlogUser;
use AppBundle\Entity\BlogPosts;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\HttpFoundation\Session\Session;


class adminPostsController extends Controller
{

    /**
     * @Route("/addpost", name="addpost")
     */
    public function addPostAction(Request $request)
    {
    }


    /**
     * @Route("editpost/{slug}", name="editPost", requirements={"slug" = "[0-9a-zA-Z\/\-]*"})
     */
    public function editPostAction($slug)
    {
    }

    /**
     * @Route("detelepost", name="deletepost", requirements={"slug" = "[0-9a-zA-Z\/\-]*"})
     */
    public function deletePostAction(Request $request)
    {
        $req = $request->request->all();
        $em = $this->getDoctrine()->getManager();

// Get a reference to the entity ( will not generate a query )
        $post = $em->getReference('AppBundle:BlogPosts', $req['_postId']);

// OR you can get the entity itself ( will generate a query )
// $user = $em->getRepository('ProjectBundle:User')->find($id);

// Remove it and flush
        $em->remove($post);
        $em->flush();
        return $this->render('default/index.html.twig');

    }
}