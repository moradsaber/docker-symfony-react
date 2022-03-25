<?php

namespace App\Controller\Api;

use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;

class ProductController extends AbstractController
{

    /**
     * @Route("/products", name="products_list")
     */
    public function listsAction(ProductRepository $productRepository, SerializerInterface $serializer) {
       $listProducts = $productRepository->getProductsArray();

       return $this->json($listProducts, Response::HTTP_OK, [], ['groups' => ['api']]);
    }

}