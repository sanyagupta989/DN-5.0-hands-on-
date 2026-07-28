package com.example.springlearn.service;

import com.example.springlearn.Country;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CountryService {

    @SuppressWarnings("unchecked")
    public List<Country> getAllCountries() {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("country.xml");

        return (List<Country>) context.getBean("countryList");
    }

    public Country getCountry(String code) {

        List<Country> countries = getAllCountries();

        for (Country country : countries) {
            if (country.getCode().equalsIgnoreCase(code)) {
                return country;
            }
        }

        return null;
    }
}
