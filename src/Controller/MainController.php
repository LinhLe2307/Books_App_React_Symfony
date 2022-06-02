<?php

namespace App\Controller;

// use App\Entity\Address;
// use App\Entity\PlaceOrders;
// use App\Entity\OrderHasBooks;
// use App\Entity\Users;
// use App\Entity\PaymentCard;
use Doctrine\ORM\EntityManagerInterface;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

// #[Route('/api', name: 'api_main')]
class MainController extends AbstractController
{
    #[Route('/', name: 'app_homepage')]
    public function index(): Response
    {
        return $this->render('main/index.html.twig');
        
    }

    // #[Route('/api/checkout', name: 'checkout', methods:['GET'])]
    // public function listOrders(EntityManagerInterface $em): Response
    // {
    //     $orders = $em->getRepository(PlaceOrders::class)->findAll();
    //     $data = [];
    //     foreach($orders as $order){
    //         $data[] = [
    //             'id' => $order->getId(),
    //             'user_id' => $order->getUserId(),
    //             'address' => $order->getAddress(),
    //         ];
    //     }
    //     return $this->json($data);
    // }

    // #[Route('/api/checkout', name: 'place_order', methods:['POST'])]
    // public function placeOrder(Request $request, ManagerRegistry $doctrine): Response
    // {
    //     $em = $doctrine->getManager();
        
    //     $address = new Address();
    //     $order = new PlaceOrders();
    //     $user = new Users();
    //     $paymentCard = new PaymentCard();

    //     // Address
    //     $address->setStreetAddress($request->request->get('streetAddress'));
    //     $address->setAptAddress($request->request->get('aptAddress'));
    //     $address->setCityAddress($request->request->get('cityAddress'));
    //     $address->setCountryAddress($request->request->get('countryAddress'));
    //     $address->setZipAddress($request->request->get('zipAddress'));
    //     $address->setSaveAddress($request->request->get('saveAddress'));

    //     // Payment Card
    //     $paymentCard->setCardNumber($request->request->get('cardNumber'));
    //     $paymentCard->setCvv($request->request->get('cvv'));
    //     $paymentCard->setValidMonth($request->request->get('validMonth'));
    //     $paymentCard->setNameCard($request->request->get('nameCard'));
    //     $paymentCard->setSaveCard($request->request->get('saveCard'));

    //     // Users 
    //     $user->setFirstname($request->request->get('firstname'));
    //     $user->setLastname($request->request->get('lastname'));
    //     $user->setEmail($request->request->get('email'));
    //     $user->setPhone($request->request->get('phone'));
    //     $user->setPhone($request->request->get('phone'));
    //     $user->addAddressId($address);
    //     $user->addCardId($paymentCard);

        
    //     $order->setAddress($request->request->get('address'));
    //     $order->setUserId($user);
        
    //     // because product_id is an array => we take it by using $request->request->all()
    //     $arr = $request->request->all();

    //     //the array items append only in the first position [0] => "a,b,c", split and persist it
    //     $split_arr = explode(",", $arr["product_id"][0]);        
    //     foreach($split_arr as $key) {
    //         $books = new OrderHasBooks();
    //         $books->setOrderId($order);    
    //         $books->setProductId($key);
    //         $em->persist($books);
    //     }
    //     $em->persist($address);
    //     $em->persist($order);
    //     $em->persist($user);
    //     $em->persist($paymentCard);
        
    //     $em->flush();
    //     return $this->json('Placed order successfully');
    // }

}

