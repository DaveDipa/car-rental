package com.car_rental.car_rental.models;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String fiscalCode;

    private String name;

    private String surname;

    private String email;

    

    public User(String fiscalCode, String name, String surname, String email) {
        this.fiscalCode = fiscalCode;
        this.name = name;
        this.surname = surname;
        this.email = email;
    }

    public User() {
    }

    @OneToMany(cascade = CascadeType.ALL)
    private List<Order> order;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFiscalCode() {
        return fiscalCode;
    }

    public void setFiscalCode(String fiscalCode) {
        this.fiscalCode = fiscalCode;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public List<Order> getOrder() {
        return order;
    }

    public void setOrder(List<Order> order) {
        this.order = order;
    }

    @Override
    public String toString() {
        return "User [id=" + id + ", fiscalCode=" + fiscalCode + ", name=" + name + ", surname=" + surname + ", email="
                + email + ", order=" + order + "]";
    }

    
    
    
}
