package com.example.service;

import org.springframework.stereotype.Service;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import com.example.repository.ProductRepository;
import com.example.model.Product;

@Service
public class ProductService {

    private final ProductRepository repository;

    public ProductService(ProductRepository repository) {
        this.repository = repository;
    }

    public Flux<Product> getAllProducts() {
        return repository.findAll();
    }

    public Mono<Product> getProductById(String id) {
        return repository.findById(id);
    }

    public Mono<Product> createProduct(Product product) {
        return repository.save(product);
    }

    public Mono<Product> updateProduct(String id, Product product) {
        return repository.findById(id)
                .flatMap(existing -> {
                    existing.setName(product.getName());
                    existing.setDescription(product.getDescription());
                    existing.setPrice(product.getPrice());
                    return repository.save(existing);
                });
    }

    public Mono<Void> deleteProduct(String id) {
        return repository.deleteById(id);
    }

    public Flux<Product> getProductsByPriceRange(double min, double max) {
        return repository.findByPriceBetween(min, max);
    }
}
