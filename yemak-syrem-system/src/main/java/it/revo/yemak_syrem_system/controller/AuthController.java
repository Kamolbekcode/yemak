package it.revo.yemak_syrem_system.controller;

import it.revo.yemak_syrem_system.entity.Users;
import it.revo.yemak_syrem_system.payload.ApiResponse;
import it.revo.yemak_syrem_system.payload.ReqLogin;
import it.revo.yemak_syrem_system.payload.ResToken;
import it.revo.yemak_syrem_system.repository.AuthRepository;
import it.revo.yemak_syrem_system.security.JwtTokenProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthController {
    private final AuthRepository authRepository;
    private final JwtTokenProvider jwtTokenProvider;
    private final AuthenticationManager authenticationManager;

    @PostMapping("/login")
    public HttpEntity<?> login(@RequestBody ReqLogin reqLogin) {
        authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        reqLogin.getUsername(), reqLogin.getPassword()
                )
        );
        Users users = authRepository.findUsersByUsername(reqLogin.getUsername());
        if (users == null) {
            return ResponseEntity.status(401).body(ApiResponse.builder().message("Username yoki parolda xatolik").success(false).build());
        }
        return ResponseEntity.status(200).body(new ResToken(jwtTokenProvider.generateToken(users.getId())));
    }

    @GetMapping("/get-user-me/{id}")
    public HttpEntity<?> getUserMe(@PathVariable UUID id) {
        Optional<Users> byId = authRepository.findById(id);
        if (byId.isPresent()) {
            return ResponseEntity.ok(byId.get());
        }
        return ResponseEntity.ok(null);
    }
}
