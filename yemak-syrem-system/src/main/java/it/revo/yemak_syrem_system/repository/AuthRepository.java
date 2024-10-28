package it.revo.yemak_syrem_system.repository;

import it.revo.yemak_syrem_system.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface AuthRepository extends JpaRepository<Users, UUID> {
    Users findUsersByUsername(String username);

    Optional<Users> findUserByUsername(String username);
}
