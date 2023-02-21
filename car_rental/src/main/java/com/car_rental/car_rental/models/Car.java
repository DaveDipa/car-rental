package com.car_rental.car_rental.models;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String model;

    private String brand;

    private Integer engineSize;

    private String link;

    private Double price;


    @OneToMany(cascade = CascadeType.ALL)
    private List<Order> order;

    public Car(String model, String brand, Integer engineSize, String link, Double price) {
        this.model = model;
        this.brand = brand;
        this.engineSize = engineSize;
        this.link = link;
        this.price = price;
    }


}
