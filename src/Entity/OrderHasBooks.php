<?php

namespace App\Entity;

use App\Repository\OrderHasBooksRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OrderHasBooksRepository::class)]
class OrderHasBooks
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: PlaceOrders::class, inversedBy: 'booksIds')]
    #[ORM\JoinColumn(nullable: false)]
    private $order_id;

    #[ORM\Column(type: 'string', length: 255)]
    private $product_id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOrderId(): ?PlaceOrders
    {
        return $this->order_id;
    }

    public function setOrderId(?PlaceOrders $order_id): self
    {
        $this->order_id = $order_id;

        return $this;
    }

    public function getProductId(): ?string
    {
        return $this->product_id;
    }

    public function setProductId(string $product_id): self
    {
        $this->product_id = $product_id;

        return $this;
    }
}
