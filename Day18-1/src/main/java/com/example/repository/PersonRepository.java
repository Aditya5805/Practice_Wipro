package com.example.repository;

import org.springframework.data.mongodb.repository.ReactiveMongoRepository;
import com.example.model.Person;

public interface PersonRepository extends ReactiveMongoRepository<Person, String> {
}
