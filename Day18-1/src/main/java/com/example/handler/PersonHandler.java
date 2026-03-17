package com.example.handler;

import org.springframework.stereotype.Component;
import org.springframework.web.reactive.function.server.ServerRequest;
import org.springframework.web.reactive.function.server.ServerResponse;
import reactor.core.publisher.Mono;
import reactor.core.publisher.Flux;

import com.example.repository.PersonRepository;
import com.example.model.Person;

@Component
public class PersonHandler {

    private final PersonRepository repository;

    public PersonHandler(PersonRepository repository) {
        this.repository = repository;
    }

    public Mono<ServerResponse> createPerson(ServerRequest request) {
        Mono<Person> personMono = request.bodyToMono(Person.class)
                .flatMap(repository::save);

        return ServerResponse.ok().body(personMono, Person.class);
    }

    public Mono<ServerResponse> getPersonById(ServerRequest request) {
        String id = request.pathVariable("id");

        return repository.findById(id)
                .flatMap(person -> ServerResponse.ok().bodyValue(person))
                .switchIfEmpty(ServerResponse.notFound().build());
    }

    public Mono<ServerResponse> getAllPersons(ServerRequest request) {
        Flux<Person> persons = repository.findAll();
        return ServerResponse.ok().body(persons, Person.class);
    }

    public Mono<ServerResponse> updatePerson(ServerRequest request) {
        String id = request.pathVariable("id");

        Mono<Person> updatedPerson = request.bodyToMono(Person.class)
                .flatMap(person ->
                        repository.findById(id)
                                .flatMap(existing -> {
                                    existing.setName(person.getName());
                                    existing.setAge(person.getAge());
                                    existing.setEmail(person.getEmail());
                                    return repository.save(existing);
                                })
                );

        return updatedPerson
                .flatMap(person -> ServerResponse.ok().bodyValue(person))
                .switchIfEmpty(ServerResponse.notFound().build());
    }

    public Mono<ServerResponse> deletePerson(ServerRequest request) {
        String id = request.pathVariable("id");

        return repository.findById(id)
                .flatMap(person ->
                        repository.delete(person)
                                .then(ServerResponse.noContent().build())
                )
                .switchIfEmpty(ServerResponse.notFound().build());
    }
}
