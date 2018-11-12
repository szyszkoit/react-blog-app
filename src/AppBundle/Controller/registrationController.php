<?php
// src/AppBundle/Controller/RegistrationController.php
namespace AppBundle\Controller;

use AppBundle\Entity\BlogUser;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

class registrationController extends Controller
{
/**
* @Route("/register", name="user_registration")
*/
public function registerAction(Request $request, UserPasswordEncoderInterface $encoder)
{
// 1) build the form
    $req = $request->request->all();
    $user = new BlogUser();
// 2) handle the submit (will only happen on POST)
    if (sizeof($req) != 0) {
        $entityManager = $this->getDoctrine()->getManager();
        //$checkUsername = $entityManager->getRepository(BlogUser::class)->findOneBy(array('userName' => $req['_username']));
       // $checkEmail = $entityManager->getRepository(BlogUser::class)->findOneBy(array('userEmail' => $req['_useremail']));
       // if (($checkUsername == null) && ($checkEmail == null)) {
// 3) Encode the password (you could also do this via Doctrine listener)
            //$token = new UsernamePasswordToken();
        $encoded = $encoder->encodePassword($user, $req["_password"]);

        $user->setUserPassword($encoded);
            $user->setUserName($req["_username"]);
            $user->setUserEmail($req["_useremail"]);
            $user->setUserType('ROLE_USER');
            $user->setUserActive('1');
            $user->setUserDateAdd(new \Datetime());
// 4) save the User!
            $entityManager->persist($user);
            $entityManager->flush();
            return new JsonResponse('Successfull register', 200);
   // } else {
          //  if($checkUsername != null) {
         //       return new JsonResponse('User already exists', 400);
           // }
          //  if($checkEmail != null) {
           //     return new JsonResponse('Email is already registered', 400);
           // }
       // }
    } else {
        return $this->render('default/index.html.twig');
    }
}
    /**
     * @Route("/checkifexists/{field}")
     * @Route("/checkifexists/{field}/{value}")
     */
    public function checkIfExistsAction($value, $field)
    {
        $entityManager = $this->getDoctrine()->getManager();
        $checkElement = $entityManager->getRepository(BlogUser::class)->findOneBy(array($field => $value));
        if($checkElement != null) {
            return new JsonResponse($field, 400);
        }else{
            return new JsonResponse('ok', 200);
        }
    }
}
