package it.revo.yemak_syrem_system.component;

import it.revo.yemak_syrem_system.entity.Role;
import it.revo.yemak_syrem_system.entity.Users;
import it.revo.yemak_syrem_system.entity.enums.RoleName;
import it.revo.yemak_syrem_system.repository.AuthRepository;
import it.revo.yemak_syrem_system.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.Collections;

@Configuration
@RequiredArgsConstructor
public class DataLoader implements CommandLineRunner {
    private final AuthRepository authRepository;
    private final RoleRepository roleRepository;
    private final PasswordEncoder passwordEncoder;

    @Value("${spring.jpa.hibernate.ddl-auto}")
    private String initMode;

    @Override
    public void run(String... args) throws Exception {
        if (initMode.equals("create-drop") || initMode.equals("create")) {
            for (RoleName value : RoleName.values()) {
                roleRepository.save(Role.builder().roleName(value).build());
            }
            authRepository.save(
                    Users.builder()
                            .firstName("Qozi")
                            .lastName("Qochqorov")
                            .roles(Collections.singletonList(roleRepository.findById(1).orElseThrow(() -> new ResourceNotFoundException("getRole"))))
                            .username("adminjon")
                            .password(passwordEncoder.encode("root1234"))
                            .enabled(true)
                            .accountNonExpired(true)
                            .accountNonLocked(true)
                            .credentialsNonExpired(true)
                            .build()
            );
        }
    }
}
