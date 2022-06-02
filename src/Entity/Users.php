<?php

namespace App\Entity;

use App\Repository\UsersRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: UsersRepository::class)]
class Users
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $firstname;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $lastname;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $email;

    #[ORM\Column(type: 'string', length: 255, nullable: true)]
    private $phone;

    #[ORM\ManyToMany(targetEntity: Address::class, inversedBy: 'userId')]
    private $addressId;

    #[ORM\ManyToMany(targetEntity: PaymentCard::class, inversedBy: 'userId')]
    private $cardId;

    #[ORM\OneToMany(mappedBy: 'userId', targetEntity: PlaceOrders::class)]
    private $orderId;

    public function __construct()
    {
        $this->addressId = new ArrayCollection();
        $this->cardId = new ArrayCollection();
        $this->orderId = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstname(): ?string
    {
        return $this->firstname;
    }

    public function setFirstname(?string $firstname): self
    {
        $this->firstname = $firstname;

        return $this;
    }

    public function getLastname(): ?string
    {
        return $this->lastname;
    }

    public function setLastname(?string $lastname): self
    {
        $this->lastname = $lastname;

        return $this;
    }

    public function getEmail(): ?string
    {
        return $this->email;
    }

    public function setEmail(?string $email): self
    {
        $this->email = $email;

        return $this;
    }

    public function getPhone(): ?string
    {
        return $this->phone;
    }

    public function setPhone(?string $phone): self
    {
        $this->phone = $phone;

        return $this;
    }

    /**
     * @return Collection<int, Address>
     */
    public function getAddressId(): Collection
    {
        return $this->addressId;
    }

    public function addAddressId(Address $addressId): self
    {
        if (!$this->addressId->contains($addressId)) {
            $this->addressId[] = $addressId;
        }

        return $this;
    }

    public function removeAddressId(Address $addressId): self
    {
        $this->addressId->removeElement($addressId);

        return $this;
    }

    /**
     * @return Collection<int, PaymentCard>
     */
    public function getCardId(): Collection
    {
        return $this->cardId;
    }

    public function addCardId(PaymentCard $cardId): self
    {
        if (!$this->cardId->contains($cardId)) {
            $this->cardId[] = $cardId;
        }

        return $this;
    }

    public function removeCardId(PaymentCard $cardId): self
    {
        $this->cardId->removeElement($cardId);

        return $this;
    }

    /**
     * @return Collection<int, PlaceOrders>
     */
    public function getOrderId(): Collection
    {
        return $this->orderId;
    }

    public function addOrderId(PlaceOrders $orderId): self
    {
        if (!$this->orderId->contains($orderId)) {
            $this->orderId[] = $orderId;
            $orderId->setUserId($this);
        }

        return $this;
    }

    public function removeOrderId(PlaceOrders $orderId): self
    {
        if ($this->orderId->removeElement($orderId)) {
            // set the owning side to null (unless already changed)
            if ($orderId->getUserId() === $this) {
                $orderId->setUserId(null);
            }
        }

        return $this;
    }
}
