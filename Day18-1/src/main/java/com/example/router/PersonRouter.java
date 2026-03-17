package com.example.router;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.reactive.function.server.RouterFunction;
import org.springframework.web.reactive.function.server.RouterFunctions;
import org.springframework.web.reactive.function.server.RequestPredicates;
import org.springframework.web.reactive.function.server.ServerResponse;

import com.example.handler.PersonHandler;

@Configuration
public class PersonRouter {

    @Bean
    public RouterFunction<ServerResponse> route(PersonHandler handler) {
        return RouterFunctions
                .route(RequestPredicates.POST("/persons"), handler::createPerson)
                .andRoute(RequestPredicates.GET("/persons"), handler::getAllPersons)
                .andRoute(RequestPredicates.GET("/persons/{id}"), handler::getPersonById)
                .andRoute(RequestPredicates.PUT("/persons/{id}"), handler::updatePerson)
                .andRoute(RequestPredicates.DELETE("/persons/{id}"), handler::deletePerson);
    }
}
