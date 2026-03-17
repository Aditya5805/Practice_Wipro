package com.example.controller;

import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
import com.example.model.Product;
import com.example.service.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {

    private final ProductService service;

    public ProductController(ProductService service) {
        this.service = service;
    }

    @GetMapping
    public Flux<Product> getAllProducts() {
        return service.getAllProducts();
    }

    @GetMapping("/{id}")
    public Mono<Product> getProductById(@PathVariable String id) {
        return service.getProductById(id);
    }

    @PostMapping
    public Mono<Product> createProduct(@RequestBody Product product) {
        return service.createProduct(product);
    }

    @PutMapping("/{id}")
    public Mono<Product> updateProduct(@PathVariable String id, @RequestBody Product product) {
        return service.updateProduct(id, product);
    }

    @DeleteMapping("/{id}")
    public Mono<Void> deleteProduct(@PathVariable String id) {
        return service.deleteProduct(id);
    }

    @GetMapping("/price-range")
    public Flux<Product> getProductsByPriceRange(@RequestParam double min,
                                                 @RequestParam double max) {
        return service.getProductsByPriceRange(min, max);
    }
}
