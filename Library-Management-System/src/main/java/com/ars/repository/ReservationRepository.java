package com.ars.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ars.entity.Reservation;

public interface ReservationRepository extends JpaRepository<Reservation, Long> {

}
