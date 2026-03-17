package com.example.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import reactor.core.publisher.Flux;
import com.example.model.Product;

public interface ProductRepository extends ReactiveMongoRepository<Product, String> {
    Flux<Product> findByPriceBetween(double min, double max);
}
