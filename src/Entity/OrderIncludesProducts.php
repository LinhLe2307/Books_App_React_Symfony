<?php

namespace App\Entity;

use App\Repository\OrderIncludesProductsRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OrderIncludesProductsRepository::class)]
class OrderIncludesProducts
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: Orders::class)]
    #[ORM\JoinColumn(nullable: false)]
    private $order_id;

    #[ORM\Column(type: 'string', length: 255)]
    private $product_id;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getOrderId(): ?Orders
    {
        return $this->order_id;
    }

    public function setOrderId(?Orders $order_id): self
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
