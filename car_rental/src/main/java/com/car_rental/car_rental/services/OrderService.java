package com.car_rental.car_rental.services;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.car_rental.car_rental.models.Order;

import com.car_rental.car_rental.repositories.OrderRepo;

@Service
public class OrderService {

    @Autowired
    OrderRepo orderRepo;

    public List<Order> findAll() {
        return orderRepo.findAll();
    }

    public Order findById(Long id) {
        return orderRepo.findById(id).get();
    }

    public Order save(Order order) {
        return orderRepo.save(order);
    }

    public void deleteOrderById(Long id) {
        orderRepo.deleteById(id);
    }

    public List<Order> checkCarOrder(Long carId, LocalDate dateStart, LocalDate dateEnd) {
        return orderRepo.checkCarOrder(carId, dateStart, dateEnd, dateStart, dateEnd);
    }

}
