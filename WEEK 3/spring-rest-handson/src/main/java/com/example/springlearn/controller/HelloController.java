package com.example.springlearn.controller;

import com.example.springlearn.Country;
import com.example.springlearn.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class HelloController {

    @Autowired
    private CountryService countryService;

    @GetMapping("/hello")
    public String hello() {
        return "Hello World!";
    }

    @GetMapping("/countries")
    public List<Country> getCountries() {
        return countryService.getAllCountries();
    }

    @GetMapping("/countries/{code}")
    public Country getCountry(@PathVariable String code) {
        return countryService.getCountry(code);
    }
}