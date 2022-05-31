<?php

namespace App\Repository;

use App\Entity\OrderIncludesProducts;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<OrderIncludesProducts>
 *
 * @method OrderIncludesProducts|null find($id, $lockMode = null, $lockVersion = null)
 * @method OrderIncludesProducts|null findOneBy(array $criteria, array $orderBy = null)
 * @method OrderIncludesProducts[]    findAll()
 * @method OrderIncludesProducts[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class OrderIncludesProductsRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, OrderIncludesProducts::class);
    }

    public function add(OrderIncludesProducts $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(OrderIncludesProducts $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return OrderIncludesProducts[] Returns an array of OrderIncludesProducts objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('o')
//            ->andWhere('o.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('o.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?OrderIncludesProducts
//    {
//        return $this->createQueryBuilder('o')
//            ->andWhere('o.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
