package com.car_rental.car_rental.repositories;

import java.time.LocalDate;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

import com.car_rental.car_rental.models.Order;

public interface OrderRepo extends JpaRepository<Order, Long> {

  @Query(value = "SELECT * FROM rental_order WHERE car_id = ? AND rental_date_start BETWEEN ? AND ? AND rental_date_end BETWEEN ? AND ?", nativeQuery = true)
  List<Order> checkCarOrder(Long carId, LocalDate dateStart, LocalDate dateEnd, LocalDate dateStart2,
      LocalDate dateEnd2);

}
