<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220526085641 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE address (address_id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, address_street VARCHAR(500) NOT NULL, address_apt VARCHAR(10) NOT NULL, address_country VARCHAR(100) NOT NULL, address_city VARCHAR(80) NOT NULL, address_zip VARCHAR(12) NOT NULL, PRIMARY KEY(address_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE order_has_products (id INT AUTO_INCREMENT NOT NULL, order_id INT NOT NULL, product_id INT NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE orders (order_id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, address VARCHAR(500) DEFAULT NULL, PRIMARY KEY(order_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE payment_card (card_id INT AUTO_INCREMENT NOT NULL, user_id INT NOT NULL, card_number VARCHAR(255) NOT NULL, cvv VARCHAR(255) NOT NULL, valid_month VARCHAR(255) NOT NULL, valid_year VARCHAR(255) NOT NULL, PRIMARY KEY(card_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE users (user_id INT AUTO_INCREMENT NOT NULL, username VARCHAR(100) NOT NULL, password VARCHAR(255) NOT NULL, firstname VARCHAR(50) DEFAULT NULL, lastname VARCHAR(50) DEFAULT NULL, email VARCHAR(50) DEFAULT NULL, phone VARCHAR(15) DEFAULT NULL, address_id INT DEFAULT NULL, card_id INT DEFAULT NULL, PRIMARY KEY(user_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('DROP TABLE address');
        $this->addSql('DROP TABLE order_has_products');
        $this->addSql('DROP TABLE orders');
        $this->addSql('DROP TABLE payment_card');
        $this->addSql('DROP TABLE users');
    }
}
