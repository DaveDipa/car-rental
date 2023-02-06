package com.car_rental.car_rental.util;

import java.time.LocalDate;

public class OrderRequestBody {
    
    private Long car;

    private LocalDate rentalDateStart;

    private LocalDate rentalDateEnd;

    public OrderRequestBody(Long car, LocalDate rentalDateStart, LocalDate rentalDateEnd) {
        this.car = car;
        this.rentalDateStart = rentalDateStart;
        this.rentalDateEnd = rentalDateEnd;
    }

    public Long getCar() {
        return car;
    }

    public void setCar(Long car) {
        this.car = car;
    }

    public LocalDate getRentalDateStart() {
        return rentalDateStart;
    }

    public void setRentalDateStart(LocalDate rentalDateStart) {
        this.rentalDateStart = rentalDateStart;
    }

    public LocalDate getRentalDateEnd() {
        return rentalDateEnd;
    }

    public void setRentalDateEnd(LocalDate rentalDateEnd) {
        this.rentalDateEnd = rentalDateEnd;
    }

    
}
