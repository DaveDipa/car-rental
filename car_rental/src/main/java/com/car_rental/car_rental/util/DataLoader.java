package com.car_rental.car_rental.util;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.car_rental.car_rental.models.Car;
import com.car_rental.car_rental.models.Order;
import com.car_rental.car_rental.services.CarService;
import com.car_rental.car_rental.services.OrderService;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private OrderService orderService;

    @Autowired
    private CarService carService;

    @Override
    public void run(String... args) throws Exception {

        Car c1 = new Car("X5", "BMW", 2993, "https://www.bmw.it", 25.0);
        Car c2 = new Car("GLE", "Mercedes", 3982, "https://www.mercedes-benz.it", 35.0);
        Car c3 = new Car("A3", "Audi", 2480, "https://www.audi.it", 30.0);
        Car c4 = new Car("DS7", "DS", 1598, "https://www.dsautomobiles.it", 10.0);
        Car c5 = new Car("Tonale", "Alfa Romeo", 1469, "https://www.alfaromeo.it", 50.0);
        Car c6 = new Car("Urus", "Lamborghini", 3996, "https://www.lamborghini.com", 90.0);
        Car c7 = new Car("Purosangue", "Ferrari", 6496, "https://www.ferrari.com", 75.0);
        Car c8 = new Car("Sport", "Range Rover", 2996, "https://www.landrover.it", 50.0);
        Car c9 = new Car("Panda", "Fiat", 1000, "https://www.fiat.it", 8.0);

        List<Car> cars = new ArrayList<>();
        cars.add(c1);
        cars.add(c2);
        cars.add(c3);
        cars.add(c4);
        cars.add(c5);
        cars.add(c6);
        cars.add(c7);
        cars.add(c8);
        cars.add(c9);

        carService.save(c5);
        carService.save(c6);
        carService.save(c7);
        carService.save(c8);
        carService.save(c9);

    

        Order o1 = new Order(LocalDate.of(2023, 12, 26), LocalDate.of(2023,12,30),c1, null);
        Order o2 = new Order(LocalDate.of(2023, 01, 30), LocalDate.of(2023, 01, 31),c2, null);
        Order o3 = new Order(LocalDate.of(2023, 02, 13), LocalDate.of(2023, 02, 25),c3, null);
        Order o4 = new Order(LocalDate.of(2023, 03, 28), LocalDate.of(2023, 04, 26),c4, null);
    

        List<Order> orders = new ArrayList<>();
        orders.add(o1);
        orders.add(o2);
        orders.add(o3);
        orders.add(o4);

        orderService.save(o1);
        orderService.save(o2);
        orderService.save(o3);
        orderService.save(o4);

        System.out.println("Application Is Running");

    }

}
