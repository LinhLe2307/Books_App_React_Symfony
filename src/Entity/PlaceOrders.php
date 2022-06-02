<?php

namespace App\Entity;

use App\Repository\PlaceOrdersRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PlaceOrdersRepository::class)]
class PlaceOrders
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\ManyToOne(targetEntity: Users::class, inversedBy: 'orderId')]
    #[ORM\JoinColumn(nullable: false)]
    private $userId;

    #[ORM\Column(type: 'text', nullable: true)]
    private $address;

    #[ORM\OneToMany(mappedBy: 'orderId', targetEntity: OrderHasBooks::class)]
    private $bookId;

    public function __construct()
    {
        $this->bookId = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getUserId(): ?Users
    {
        return $this->userId;
    }

    public function setUserId(?Users $userId): self
    {
        $this->userId = $userId;

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
    public function getBookId(): Collection
    {
        return $this->bookId;
    }

    public function addBookId(OrderHasBooks $bookId): self
    {
        if (!$this->bookId->contains($bookId)) {
            $this->bookId[] = $bookId;
            $bookId->setOrderId($this);
        }

        return $this;
    }

    public function removeBookId(OrderHasBooks $bookId): self
    {
        if ($this->bookId->removeElement($bookId)) {
            // set the owning side to null (unless already changed)
            if ($bookId->getOrderId() === $this) {
                $bookId->setOrderId(null);
            }
        }

        return $this;
    }
}
