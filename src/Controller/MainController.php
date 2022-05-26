<?php

namespace App\Controller;

use App\Entity\Orders;
use App\Entity\OrdersHasProducts;
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
    
    #[Route('/api/shopping_cart', name: 'list_books', methods:['GET'] )]
    public function listBooks(EntitiManagerInterface $em): Response
    {
        $books = $em->getRepository(OrdersHasProducts::class)->findAll();
        $data = [];
        foreach($book as $books) {
            $data[] = [
                'id' => $books->getId(),
                'order_id' => $books->getOrderId(),
                'product_id' => $books->getProductId()
            ];
        }
        return $this->json(data);
    }

    #[Route('/api/shopping_cart', name: 'add_books', methods: ['POST'])]
    public function addBooks(Request $request, ManagerRegistry $doctrine): Response {
        $em = $doctrine->getManager();
        $books = new OrdersHasProducts();
        $books->setProductId($request->request->get('product_id'));
        $em->persist($books);
        $em->flush();
        return $this->json("Add books successfully");
    }
}
