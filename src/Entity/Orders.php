<?php

namespace App\Entity;

use App\Repository\OrdersRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: OrdersRepository::class)]
class Orders
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $order_id;

    #[ORM\Column(type: 'integer', nullable: true)]
    private $user_id;

    #[ORM\Column(type: 'string', length: 500, nullable: true)]
    private $address;

    #[ORM\OneToMany(mappedBy: 'order_id', targetEntity: OrderHasBooks::class)]
    private $books;

    public function __construct()
    {
        $this->books = new ArrayCollection();
    }

    public function getOrderId(): ?int
    {
        return $this->order_id;
    }

    public function setOrderId(int $order_id): self
    {
        $this->order_id = $order_id;

        return $this;
    }

    public function getUserId(): ?int
    {
        return $this->user_id;
    }

    public function setUserId(?int $user_id): self
    {
        $this->user_id = $user_id;

        return $this;
    }

    public function getAddress(): ?string
    {
        return $this->address;
    }

    public function setAddress(?string $address): self
    {
        $this->address = $address;

        return $this;
    }

    /**
     * @return Collection<int, OrderHasBooks>
     */
    public function getBooks(): Collection
    {
        return $this->books;
    }

    public function addBook(OrderHasBooks $book): self
    {
        if (!$this->books->contains($book)) {
            $this->books[] = $book;
            $book->setOrderId($this);
        }

        return $this;
    }

    public function removeBook(OrderHasBooks $book): self
    {
        if ($this->books->removeElement($book)) {
            // set the owning side to null (unless already changed)
            if ($book->getOrderId() === $this) {
                $book->setOrderId(null);
            }
        }

        return $this;
    }
}
