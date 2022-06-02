<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220602192809 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE address (id INT AUTO_INCREMENT NOT NULL, street_address VARCHAR(500) NOT NULL, apt_address VARCHAR(10) DEFAULT NULL, city_address VARCHAR(80) NOT NULL, country_address VARCHAR(100) NOT NULL, zip_address VARCHAR(12) NOT NULL, save_address TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE order_has_books (id INT AUTO_INCREMENT NOT NULL, order_id_id INT NOT NULL, product_id VARCHAR(50) NOT NULL, INDEX IDX_D1541D4FCDAEAAA (order_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE payment_card (id INT AUTO_INCREMENT NOT NULL, name VARCHAR(100) NOT NULL, card_number VARCHAR(255) NOT NULL, cvv VARCHAR(255) NOT NULL, valid_month INT NOT NULL, valid_year INT NOT NULL, save_card TINYINT(1) NOT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE place_orders (id INT AUTO_INCREMENT NOT NULL, user_id_id INT NOT NULL, address LONGTEXT DEFAULT NULL, INDEX IDX_47E1FA879D86650F (user_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE users (id INT AUTO_INCREMENT NOT NULL, firstname VARCHAR(50) DEFAULT NULL, lastname VARCHAR(50) DEFAULT NULL, email VARCHAR(100) DEFAULT NULL, phone VARCHAR(15) DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE users_address (users_id INT NOT NULL, address_id INT NOT NULL, INDEX IDX_FD4E1B4B67B3B43D (users_id), INDEX IDX_FD4E1B4BF5B7AF75 (address_id), PRIMARY KEY(users_id, address_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE users_payment_card (users_id INT NOT NULL, payment_card_id INT NOT NULL, INDEX IDX_64D329AB67B3B43D (users_id), INDEX IDX_64D329AB538594CA (payment_card_id), PRIMARY KEY(users_id, payment_card_id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE order_has_books ADD CONSTRAINT FK_D1541D4FCDAEAAA FOREIGN KEY (order_id_id) REFERENCES place_orders (id)');
        $this->addSql('ALTER TABLE place_orders ADD CONSTRAINT FK_47E1FA879D86650F FOREIGN KEY (user_id_id) REFERENCES users (id)');
        $this->addSql('ALTER TABLE users_address ADD CONSTRAINT FK_FD4E1B4B67B3B43D FOREIGN KEY (users_id) REFERENCES users (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE users_address ADD CONSTRAINT FK_FD4E1B4BF5B7AF75 FOREIGN KEY (address_id) REFERENCES address (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE users_payment_card ADD CONSTRAINT FK_64D329AB67B3B43D FOREIGN KEY (users_id) REFERENCES users (id) ON DELETE CASCADE');
        $this->addSql('ALTER TABLE users_payment_card ADD CONSTRAINT FK_64D329AB538594CA FOREIGN KEY (payment_card_id) REFERENCES payment_card (id) ON DELETE CASCADE');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE users_address DROP FOREIGN KEY FK_FD4E1B4BF5B7AF75');
        $this->addSql('ALTER TABLE users_payment_card DROP FOREIGN KEY FK_64D329AB538594CA');
        $this->addSql('ALTER TABLE order_has_books DROP FOREIGN KEY FK_D1541D4FCDAEAAA');
        $this->addSql('ALTER TABLE place_orders DROP FOREIGN KEY FK_47E1FA879D86650F');
        $this->addSql('ALTER TABLE users_address DROP FOREIGN KEY FK_FD4E1B4B67B3B43D');
        $this->addSql('ALTER TABLE users_payment_card DROP FOREIGN KEY FK_64D329AB67B3B43D');
        $this->addSql('DROP TABLE address');
        $this->addSql('DROP TABLE order_has_books');
        $this->addSql('DROP TABLE payment_card');
        $this->addSql('DROP TABLE place_orders');
        $this->addSql('DROP TABLE users');
        $this->addSql('DROP TABLE users_address');
        $this->addSql('DROP TABLE users_payment_card');
    }
}
