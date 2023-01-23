package com.car_rental.car_rental.models;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Car {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String model;

    private String brand;

    private Integer engineSize;

    public Car(String model, String brand, Integer engineSize) {
        this.model = model;
        this.brand = brand;
        this.engineSize = engineSize;
    }

    public Car() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public String getBrand() {
        return brand;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public Integer getEngineSize() {
        return engineSize;
    }

    public void setEngineSize(Integer engineSize) {
        this.engineSize = engineSize;
    }

    @Override
    public String toString() {
        return "Car [id=" + id + ", model=" + model + ", brand=" + brand + ", engineSize=" + engineSize + "]";
    }

}
