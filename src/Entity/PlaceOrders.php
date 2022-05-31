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

    #[ORM\Column(type: 'integer', nullable: true)]
    private $user_id;

    #[ORM\Column(type: 'text', nullable: true)]
    private $address;

    #[ORM\OneToMany(mappedBy: 'order_id', targetEntity: OrderHasBooks::class)]
    private $booksIds;

    public function __construct()
    {
        $this->booksIds = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
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
    public function getBooksIds(): Collection
    {
        return $this->booksIds;
    }

    public function addBooksId(OrderHasBooks $booksId): self
    {
        if (!$this->booksIds->contains($booksId)) {
            $this->booksIds[] = $booksId;
            $booksId->setOrderId($this);
        }

        return $this;
    }

    public function removeBooksId(OrderHasBooks $booksId): self
    {
        if ($this->booksIds->removeElement($booksId)) {
            // set the owning side to null (unless already changed)
            if ($booksId->getOrderId() === $this) {
                $booksId->setOrderId(null);
            }
        }

        return $this;
    }
}
