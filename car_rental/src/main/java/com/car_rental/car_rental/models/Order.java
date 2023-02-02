package com.car_rental.car_rental.models;

import java.time.LocalDate;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "rental_order")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Integer rentalCode;

    private LocalDate rentalDateStart;

    private LocalDate rentalDateEnd;

    

    @ManyToOne(cascade = CascadeType.ALL)
    private Car car;

    @ManyToOne(cascade = CascadeType.ALL)
    private User user;

    public Order(Integer rentalCode, LocalDate rentalDateStart,LocalDate rentalDateEnd, Car car, User user) {
        this.rentalCode = rentalCode;
        this.rentalDateStart = rentalDateStart;
        this.rentalDateEnd = rentalDateEnd;
        this.car = car;
        this.user = user;
        
    }

    public Order() {
    }

  

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

    public LocalDate getRentalDateStart() {
        return rentalDateStart;
    }

    public void setRentalDateStart(LocalDate rentalDateStart) {
        this.rentalDateStart = rentalDateStart;
    }

    

    public Car getCar() {
        return car;
    }

    public void setCar(Car car) {
        this.car = car;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public LocalDate getRentalDateEnd() {
        return rentalDateEnd;
    }

    public void setRentalDateEnd(LocalDate rentalDateEnd) {
        this.rentalDateEnd = rentalDateEnd;
    }

   



}
