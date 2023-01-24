package com.car_rental.car_rental.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.car_rental.car_rental.models.Order;

public interface OrderRepo extends JpaRepository<Order, Long> {

    
}
