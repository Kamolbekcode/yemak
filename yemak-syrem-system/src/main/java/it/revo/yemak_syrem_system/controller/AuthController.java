package it.revo.yemak_syrem_system.controller;

import it.revo.yemak_syrem_system.entity.Users;
import it.revo.yemak_syrem_system.payload.*;
import it.revo.yemak_syrem_system.repository.AuthRepository;
import it.revo.yemak_syrem_system.security.JwtTokenProvider;
import it.revo.yemak_syrem_system.service.AuthService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
@CrossOrigin
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private AuthService service;
    @Autowired
    private JwtTokenProvider tokenService;
    @Autowired
    AuthRepository authRepository;
//
//    @PostMapping("/signup")
//    public ResponseEntity<?> signUp(@RequestBody @Valid SignUpDto data) {
//        service.signUp(data);
//        return ResponseEntity.status(HttpStatus.CREATED).build();
//    }

    @GetMapping("/get-me/{username}")
    public HttpEntity<?> getUserMe(@PathVariable String username) {
        UserDetails byUserName = authRepository.findUsersByUsername(username);
        if (byUserName != null) {
            return ResponseEntity.ok(byUserName);
        }
        return null;
    }

    @PostMapping("/login")
    public ResponseEntity<JwtDto> signIn(@RequestBody @Valid SignInDto data) {
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.login(), data.password());
        var authUser = authenticationManager.authenticate(usernamePassword);
        var accessToken = tokenService.generateAccessToken((Users) authUser.getPrincipal());
        return ResponseEntity.ok(new JwtDto(accessToken));
    }


//    private final AuthRepository authRepository;
//    private final JwtTokenProvider jwtTokenProvider;
//    private final AuthenticationManager authenticationManager;
//
//    @PostMapping("/login")
//    public HttpEntity<?> login(@RequestBody ReqLogin reqLogin) {
//        authenticationManager.authenticate(
//                new UsernamePasswordAuthenticationToken(
//                        reqLogin.getUsername(), reqLogin.getPassword()
//                )
//        );
//        Users users = authRepository.findUsersByUsername(reqLogin.getUsername());
//        if (users == null) {
//            return ResponseEntity.status(401).body(ApiResponse.builder().message("Username yoki parolda xatolik").success(false).build());
//        }
//        return ResponseEntity.status(200).body(new ResToken(jwtTokenProvider.generateAccessToken(users.getId())));
//    }
//
//    @GetMapping("/get-user-me/{id}")
//    public HttpEntity<?> getUserMe(@PathVariable UUID id) {
//        Optional<Users> byId = authRepository.findById(id);
//        if (byId.isPresent()) {
//            return ResponseEntity.ok(byId.get());
//        }
//        return ResponseEntity.ok(null);
//    }
}
