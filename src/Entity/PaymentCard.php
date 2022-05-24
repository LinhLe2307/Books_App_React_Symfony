<?php

namespace App\Entity;

use App\Repository\PaymentCardRepository;
use Doctrine\ORM\Mapping as ORM;

#[ORM\Entity(repositoryClass: PaymentCardRepository::class)]
class PaymentCard
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column(type: 'integer')]
    private $card_id;

    #[ORM\Column(type: 'integer')]
    private $user_id;

    #[ORM\Column(type: 'string', length: 255)]
    private $card_number;

    #[ORM\Column(type: 'string', length: 255)]
    private $cvv;

    #[ORM\Column(type: 'string', length: 255)]
    private $valid_month;

    #[ORM\Column(type: 'string', length: 255)]
    private $valid_year;

    public function getCardId(): ?int
    {
        return $this->card_id;
    }

    public function setCardId(int $card_id): self
    {
        $this->card_id = $card_id;

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

    public function getCardNumber(): ?string
    {
        return $this->card_number;
    }

    public function setCardNumber(string $card_number): self
    {
        $this->card_number = $card_number;

        return $this;
    }

    public function getCvv(): ?string
    {
        return $this->cvv;
    }

    public function setCvv(string $cvv): self
    {
        $this->cvv = $cvv;

        return $this;
    }

    public function getValidMonth(): ?string
    {
        return $this->valid_month;
    }

    public function setValidMonth(string $valid_month): self
    {
        $this->valid_month = $valid_month;

        return $this;
    }

    public function getValidYear(): ?string
    {
        return $this->valid_year;
    }

    public function setValidYear(string $valid_year): self
    {
        $this->valid_year = $valid_year;

        return $this;
    }
}
