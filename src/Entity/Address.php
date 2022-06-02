<?php

namespace App\Entity;

use App\Repository\AddressRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AddressRepository::class)]
class Address
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $id;

    #[ORM\Column(type: 'string', length: 500)]
    private $streetAddress;

    #[ORM\Column(type: 'string', length: 10, nullable: true)]
    private $aptAddress;

    #[ORM\Column(type: 'string', length: 80)]
    private $cityAddress;

    #[ORM\Column(type: 'string', length: 100)]
    private $countryAddress;

    #[ORM\Column(type: 'string', length: 12)]
    private $zipAddress;

    #[ORM\Column(type: 'boolean')]
    private $saveAddress;

    #[ORM\ManyToMany(targetEntity: Users::class, mappedBy: 'addressId')]
    private $userId;

    public function __construct()
    {
        $this->userId = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getStreetAddress(): ?string
    {
        return $this->streetAddress;
    }

    public function setStreetAddress(string $streetAddress): self
    {
        $this->streetAddress = $streetAddress;

        return $this;
    }

    public function getAptAddress(): ?string
    {
        return $this->aptAddress;
    }

    public function setAptAddress(?string $aptAddress): self
    {
        $this->aptAddress = $aptAddress;

        return $this;
    }

    public function getCityAddress(): ?string
    {
        return $this->cityAddress;
    }

    public function setCityAddress(string $cityAddress): self
    {
        $this->cityAddress = $cityAddress;

        return $this;
    }

    public function getCountryAddress(): ?string
    {
        return $this->countryAddress;
    }

    public function setCountryAddress(string $countryAddress): self
    {
        $this->countryAddress = $countryAddress;

        return $this;
    }

    public function getZipAddress(): ?string
    {
        return $this->zipAddress;
    }

    public function setZipAddress(string $zipAddress): self
    {
        $this->zipAddress = $zipAddress;

        return $this;
    }

    public function isSaveAddress(): ?bool
    {
        return $this->saveAddress;
    }

    public function setSaveAddress(bool $saveAddress): self
    {
        $this->saveAddress = $saveAddress;

        return $this;
    }

    /**
     * @return Collection<int, Users>
     */
    public function getUserId(): Collection
    {
        return $this->userId;
    }

    public function addUserId(Users $userId): self
    {
        if (!$this->userId->contains($userId)) {
            $this->userId[] = $userId;
            $userId->addAddressId($this);
        }

        return $this;
    }

    public function removeUserId(Users $userId): self
    {
        if ($this->userId->removeElement($userId)) {
            $userId->removeAddressId($this);
        }

        return $this;
    }
}
