package it.revo.yemak_syrem_system.config;


import it.revo.yemak_syrem_system.entity.Role;
import it.revo.yemak_syrem_system.entity.Users;
import it.revo.yemak_syrem_system.entity.enums.RoleName;
import it.revo.yemak_syrem_system.repository.AuthRepository;
import it.revo.yemak_syrem_system.repository.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
@RequiredArgsConstructor
public class DataLoader implements CommandLineRunner {
    @Value("${spring.jpa.hibernate.ddl-auto}")
    private String initMode;

    @Autowired
    AuthRepository authRepository;

    @Autowired
    RoleRepository roleRepository;


    @Override
    public void run(String... args) throws Exception {
        if (initMode.equals("create-drop") || initMode.equals("create")) {
            for (RoleName value : RoleName.values()) {
                roleRepository.save(new Role(0, value));
            }
            String encryptedPassword = new BCryptPasswordEncoder().encode("root1234");
            authRepository.save(
                    Users.builder()
                            .firstName("Qozi")
                            .lastName("Gadayev")
                            .phoneNumber("991111111")
                            .username("adminjon")
                            .password("root1234")
                            .password(encryptedPassword)
                            .accountNonExpired(true)
                            .accountNonLocked(true)
                            .enabled(true)
                            .credentialsNonExpired(true)
                            .build()
            );
        }
    }
}
