package com.car_rental.car_rental.util;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import com.car_rental.car_rental.models.Car;
import com.car_rental.car_rental.models.Order;
import com.car_rental.car_rental.models.User;
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

        Car c1 = new Car("X5", "BMW", 2993, "https://www.bmw.it");
        Car c2 = new Car("GLE", "Mercedes", 3982, "https://www.mercedes-benz.it");
        Car c3 = new Car("A3", "Audi", 2480, "https://www.audi.it");
        Car c4 = new Car("DS7", "DS", 1598, "https://www.dsautomobiles.it");
        Car c5 = new Car("Tonale", "Alfa Romeo", 1469, "https://www.alfaromeo.it");
        Car c6 = new Car("Urus", "Lamborghini", 3996, "https://www.lamborghini.com");
        Car c7 = new Car("Purosangue", "Ferrari", 6496, "https://www.ferrari.com");
        Car c8 = new Car("Sport", "Range Rover", 2996, "https://www.landrover.it");
       
        List<Car> cars = new ArrayList<>();
        cars.add(c1);
        cars.add(c2);
        cars.add(c3);
        cars.add(c4);
        cars.add(c5);
        cars.add(c6);
        cars.add(c7);
        cars.add(c8);

       
        carService.save(c5);
        carService.save(c6);
        carService.save(c7);
        carService.save(c8);

        User u1 = new User("AAA123", "Carlo", "Rossi", "rossi.c@email.com");
        User u2 = new User("BBB123", "Giulio", "Cesare", "cesare@email.com");
        User u3 = new User("CCC123", "Francesco", "Verdi", "francescoverdi@email.com");
        User u4 = new User("DDD123", "Piero", "Pieri", "pieri_p@email.com");

        Order o1 = new Order(001, LocalDate.of(2022, 12, 26), c1, u1);
        Order o2 = new Order(002, LocalDate.of(2023, 01, 30), c2, u2);
        Order o3 = new Order(003, LocalDate.of(2023, 02, 13), c3, u3);
        Order o4 = new Order(004, LocalDate.of(2023, 03, 28), c4, u4);
        Order o5 = new Order (005, LocalDate.now(), null, null);

        List<Order> orders = new ArrayList<>();
        orders.add(o1);
        orders.add(o2);
        orders.add(o3);
        orders.add(o4);
        orders.add(o5);

        orderService.save(o1);
        orderService.save(o2);
        orderService.save(o3);
        orderService.save(o4);

        System.out.println("Application Started");

    }

}
