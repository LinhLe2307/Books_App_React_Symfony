<?php

namespace App\Controller;

use App\Entity\Orders;
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

    #[Route('/api/checkout', name: 'checkout', methods:['GET'])]
    public function listOrders(EntityManagerInterface $em): Response
    {
        $orders = $em->getRepository(Orders::class)->findAll();
        $data = [];
        foreach($orders as $order){
            $data[] = [
                'order_id' => $order->getOrderId(),
                'user_id' => $order->getUserId(),
                'address' => $order->getAddress(),
            ];
        }
        return $this->json($data);
    }

    #[Route('/api/checkout', name: 'place_order', methods:['POST'])]
    public function placeOrder(Request $request, ManagerRegistry $doctrine): Response
    {
        $em = $doctrine->getManager();
        $order = new Orders();
        $order->setAddress($request->request->get('address'));
        $em->persist($order);
        $em->flush();

        return $this->json('Placed order successfully');
    }
    
}
