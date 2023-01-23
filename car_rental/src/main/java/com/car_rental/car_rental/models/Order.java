package com.car_rental.car_rental.models;

import java.time.LocalDate;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "rental_order")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Integer rentalCode;

    private LocalDate rentalDate;

    @OneToOne(cascade = CascadeType.ALL)
    private Car car;

    public Order(Integer rentalCode, LocalDate rentalDate, Car car, Double rentalPrice) {
        this.rentalCode = rentalCode;
        this.rentalDate = rentalDate;
        this.car = car;
        this.rentalPrice = rentalPrice;
    }

    public Order() {
    }

    private Double rentalPrice;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Integer getRentalCode() {
        return rentalCode;
    }

    public void setRentalCode(Integer rentalCode) {
        this.rentalCode = rentalCode;
    }

    public LocalDate getRentalDate() {
        return rentalDate;
    }

    public void setRentalDate(LocalDate rentalDate) {
        this.rentalDate = rentalDate;
    }

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public Double getRentalPrice() {
        return rentalPrice;
    }

    public void setRentalPrice(Double rentalPrice) {
        this.rentalPrice = rentalPrice;
    }

    @Override
    public String toString() {
        return "Order [id=" + id + ", rentalCode=" + rentalCode + ", rentalDate=" + rentalDate + ", car=" + car
                + ", rentalPrice=" + rentalPrice + "]";
    }

}
