<?php
// src/AppBundle/Security/FormAuthenticator.php
namespace AppBundle\Security;

use AppBundle\Entity\BlogUser;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RedirectResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\RouterInterface;
use Symfony\Component\Security\Core\Exception\CustomUserMessageAuthenticationException;
use Symfony\Component\Security\Core\Exception\UsernameNotFoundException;
use Symfony\Component\Security\Core\Security;
use Doctrine\ORM\EntityManager;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\Security\Core\User\InMemoryUserProvider;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Security\Guard\AbstractGuardAuthenticator;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\HttpFoundation\Session\Session;

class FormAuthenticator extends AbstractGuardAuthenticator
{

    /**
     * @var \Symfony\Component\Routing\RouterInterface
     */
    private $router;

    /**
     * Default message for authentication failure.
     *
     * @var string
     */
    private $failMessage = 'Invalid credentials';

    /**
     * Creates a new instance of FormAuthenticator
     */

    private $apiToken;

    protected $manager;

    public function __construct(RouterInterface $router, EntityManager $manager) {
        $this->router = $router;
        $this->manager = $manager;
    }
    /**
     * {@inheritdoc}
     */
    public function getCredentials(Request $request)
    {
        if ($request->getPathInfo() != '/login' || !$request->isMethod('POST')) {
            return;
        }

        return array(
            'username' => $request->request->get('_username'),
            'password' => $request->request->get('_password'),
        );
    }

    /**
     * {@inheritdoc}
     */
    public function getUser($credentials, UserProviderInterface $userProvider)
    {
//        if (!$userProvider instanceof UserInterface) {
//            return 'fdsafdsafasdfsa';
//        0}

        try {
            return $userProvider->loadUserByUsername($credentials['username']);
        }
        catch (UsernameNotFoundException $e) {
            throw new CustomUserMessageAuthenticationException($this->failMessage);
        }
    }

    /**
     * {@inheritdoc}
     */
    public function checkCredentials($credentials, UserInterface $user)
    {
        if ($user->getPassword() === $credentials['password']) {
            return true;
        }
        throw new CustomUserMessageAuthenticationException($this->failMessage);
    }

    private function generateToken($token){

        return password_hash($token, PASSWORD_DEFAULT);
    }

    private function saveToken($token){
        $session = new Session();
        $session->set('api_token', $this->generateToken($token));
       //$em = $this->manager->getRepository(BlogUser::class)->findOneBy(array('userLogin' => $token->getUser()->getUserLogin()));
        //$em->setApiToken($session->get('api_token'));
        //$this->manager->flush();

        return new JsonResponse($token->getUser()->getUserType());
    }

    /**
     * {@inheritdoc}
     */
    public function onAuthenticationSuccess(Request $request, TokenInterface $token, $providerKey)
    {
        return $this->saveToken($token);
    }

    /**
     * {@inheritdoc}
     */
    public function onAuthenticationFailure(Request $request, AuthenticationException $exception)
    {
        $data = array(
            'message' => strtr($exception->getMessageKey(), $exception->getMessageData())

            // or to translate this message
            // $this->translator->trans($exception->getMessageKey(), $exception->getMessageData())
        );

        return new JsonResponse($data, Response::HTTP_FORBIDDEN);
    }

    /**
     * {@inheritdoc}
     */
    public function start(Request $request, AuthenticationException $authException = null)
    {
        $url = $this->router->generate('login');
        return new RedirectResponse($url);
    }

    /**
     * {@inheritdoc}
     */
//    public function supports(Request $request)
//    {
//        return false;
//    }

        /**
     * {@inheritdoc}
     */
    public function supportsRememberMe()
    {
        return false;
    }
}