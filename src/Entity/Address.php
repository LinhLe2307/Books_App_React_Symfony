<?php

namespace App\Entity;

use App\Repository\AddressRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: AddressRepository::class)]
class Address
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $address_id;

    #[ORM\Column(type: 'integer')]
    private $user_id;

    #[ORM\Column(type: 'string', length: 500)]
    private $address_street;

    #[ORM\Column(type: 'string', length: 10)]
    private $address_apt;

    #[ORM\Column(type: 'string', length: 100)]
    private $address_country;

    #[ORM\Column(type: 'string', length: 80)]
    private $address_city;

    #[ORM\Column(type: 'string', length: 12)]
    private $address_zip;

    public function getAddressId(): ?int
    {
        return $this->address_id;
    }

    public function setAddressId(int $address_id): self
    {
        $this->address_id = $address_id;

        return $this;
    }

    public function getUserId(): ?int
    {
        return $this->user_id;
    }

    public function setUserId(int $user_id): self
    {
        $this->user_id = $user_id;

        return $this;
    }

    public function getAddressStreet(): ?string
    {
        return $this->address_street;
    }

    public function setAddressStreet(string $address_street): self
    {
        $this->address_street = $address_street;

        return $this;
    }

    public function getAddressApt(): ?string
    {
        return $this->address_apt;
    }

    public function setAddressApt(string $address_apt): self
    {
        $this->address_apt = $address_apt;

        return $this;
    }

    public function getAddressCountry(): ?string
    {
        return $this->address_country;
    }

    public function setAddressCountry(string $address_country): self
    {
        $this->address_country = $address_country;

        return $this;
    }

    public function getAddressCity(): ?string
    {
        return $this->address_city;
    }

    public function setAddressCity(string $address_city): self
    {
        $this->address_city = $address_city;

        return $this;
    }

    public function getAddressZip(): ?string
    {
        return $this->address_zip;
    }

    public function setAddressZip(string $address_zip): self
    {
        $this->address_zip = $address_zip;

        return $this;
    }
}
