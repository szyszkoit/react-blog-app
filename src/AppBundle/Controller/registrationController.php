<?php
// src/AppBundle/Controller/RegistrationController.php
namespace AppBundle\Controller;

use AppBundle\Entity\BlogUser;
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
public function registerAction(Request $request, UserPasswordEncoderInterface $passwordEncoder)
{
// 1) build the form
    $req = $request->request->all();
    $user = new BlogUser();
// 2) handle the submit (will only happen on POST)
if (sizeof($req) != 0) {
// 3) Encode the password (you could also do this via Doctrine listener)
    //$token = new UsernamePasswordToken();
    $user->setUserPassword($req["_password"]);
    $user->setUserName($req["_username"]);
    $user->setUserEmail($req["_useremail"]);
    $user->setUserType('ROLE_USER');
    $user->setUserActive('1');
    $user->setUserDateAdd(new \Datetime());
// 4) save the User!
$entityManager = $this->getDoctrine()->getManager();
$entityManager->persist($user);
$entityManager->flush();
}
return $this->render('default/index.html.twig');
}
}
