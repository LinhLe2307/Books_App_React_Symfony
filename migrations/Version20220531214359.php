<?php

declare(strict_types=1);

namespace DoctrineMigrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20220531214359 extends AbstractMigration
{
    public function getDescription(): string
    {
        return '';
    }

    public function up(Schema $schema): void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->addSql('CREATE TABLE order_has_books (id INT AUTO_INCREMENT NOT NULL, order_id_id INT NOT NULL, product_id VARCHAR(255) NOT NULL, INDEX IDX_D1541D4FCDAEAAA (order_id_id), PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('CREATE TABLE place_orders (id INT AUTO_INCREMENT NOT NULL, user_id INT DEFAULT NULL, address LONGTEXT DEFAULT NULL, PRIMARY KEY(id)) DEFAULT CHARACTER SET utf8mb4 COLLATE `utf8mb4_unicode_ci` ENGINE = InnoDB');
        $this->addSql('ALTER TABLE order_has_books ADD CONSTRAINT FK_D1541D4FCDAEAAA FOREIGN KEY (order_id_id) REFERENCES place_orders (id)');
        $this->addSql('ALTER TABLE payment_card MODIFY id INT NOT NULL');
        $this->addSql('ALTER TABLE payment_card DROP PRIMARY KEY');
        $this->addSql('ALTER TABLE payment_card DROP id, CHANGE card_id card_id INT AUTO_INCREMENT NOT NULL');
        $this->addSql('ALTER TABLE payment_card ADD PRIMARY KEY (card_id)');
    }

    public function down(Schema $schema): void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->addSql('ALTER TABLE order_has_books DROP FOREIGN KEY FK_D1541D4FCDAEAAA');
        $this->addSql('DROP TABLE order_has_books');
        $this->addSql('DROP TABLE place_orders');
        $this->addSql('ALTER TABLE payment_card ADD id INT AUTO_INCREMENT NOT NULL, CHANGE card_id card_id INT NOT NULL, DROP PRIMARY KEY, ADD PRIMARY KEY (id)');
    }
}
