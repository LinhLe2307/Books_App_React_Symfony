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

    #[ORM\ManyToOne(targetEntity: PlaceOrders::class, inversedBy: 'bookId')]
    #[ORM\JoinColumn(nullable: false)]
    private $orderId;

    #[ORM\Column(type: 'string', length: 50)]
    private $productId;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOrderId(): ?PlaceOrders
    {
        return $this->orderId;
    }

    public function setOrderId(?PlaceOrders $orderId): self
    {
        $this->orderId = $orderId;

        return $this;
    }

    public function getProductId(): ?string
    {
        return $this->productId;
    }

    public function setProductId(string $productId): self
    {
        $this->productId = $productId;

        return $this;
    }
}
