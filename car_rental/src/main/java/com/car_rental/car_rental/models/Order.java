package com.car_rental.car_rental.models;

import java.time.LocalDate;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "rental_order")
@Data
@NoArgsConstructor
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


    private LocalDate rentalDateStart;

    private LocalDate rentalDateEnd;

    @ManyToOne(cascade = CascadeType.ALL)
    private Car car;



    public Order( LocalDate rentalDateStart,LocalDate rentalDateEnd, Car car) {
     
        this.rentalDateStart = rentalDateStart;
        this.rentalDateEnd = rentalDateEnd;
        this.car = car;
   
    }

   

   



}
