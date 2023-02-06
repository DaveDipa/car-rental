package com.car_rental.car_rental.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.car_rental.car_rental.models.Order;

public interface OrderRepo extends JpaRepository<Order, Long> {

  @Query(value = "SELECT * FROM ORDER WHERE car_id = ?1", nativeQuery = true)
  Order findCarById(String carId);
}
