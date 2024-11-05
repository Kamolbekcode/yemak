//package it.revo.yemak_syrem_system.security;
//
//import io.jsonwebtoken.*;
//import it.revo.yemak_syrem_system.service.AuthService;
//import jakarta.servlet.FilterChain;
//import jakarta.servlet.ServletException;
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.slf4j.Logger;
//import org.slf4j.LoggerFactory;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.beans.factory.annotation.Value;
//import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
//import org.springframework.security.core.context.SecurityContextHolder;
//import org.springframework.security.core.userdetails.UserDetails;
//import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
//import org.springframework.web.filter.OncePerRequestFilter;
//
//import java.io.IOException;
//import java.security.SignatureException;
//import java.util.UUID;
//
//public class JwtTokenFilter extends OncePerRequestFilter {
//    private static final Logger logger = LoggerFactory.getLogger(JwtTokenFilter.class);
//
//    @Autowired
//    AuthService authService;
//
//    @Value("${app.jwtSecretKey}")
//    private String key;
//
//    @Override
//    protected void doFilterInternal(HttpServletRequest request,
//                                    HttpServletResponse response,
//                                    FilterChain filterChain)
//            throws ServletException, IOException {
//        try {
//            String token = request.getHeader("Authorization");
//            if (token != null) {
//                if (token.substring(0, 6).equals("Bearer")) {
//                    token = token.substring(7);
//                    if (tokenIsValid(token)) {
//                        String userId = getUserIdInToken(token);
//                        UserDetails userDetails = authService.getUserById(UUID.fromString(userId));
//                        UsernamePasswordAuthenticationToken authenticationToken =
//                                new UsernamePasswordAuthenticationToken(
//                                        userDetails,
//                                        null,
//                                        userDetails.getAuthorities()
//                                );
//                        authenticationToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
//                        SecurityContextHolder.getContext().setAuthentication(authenticationToken);
//                    }
//                }
//            }
//        } catch (Exception e) {
//            e.printStackTrace();
//        }
//        filterChain.doFilter(request, response);
//    }
//
//    public boolean tokenIsValid(String token) {
//        try {
//            Jwts.parser()
//                    .setSigningKey(key)
//                    .parseClaimsJws(token);
//            return true;
//        } catch (SignatureException e) {
//            logger.error("Invalid JWT signature");
//        } catch (MalformedJwtException e) {
//            logger.error("Invalid JWT token");
//        } catch (ExpiredJwtException e) {
//            logger.error("Expired JWT token");
//        } catch (UnsupportedJwtException e) {
//            logger.error("Unsupported JWT token");
//        } catch (IllegalArgumentException e) {
//            logger.error("JWT claims string is empty.");
//        }
//        return false;
//    }
//
//    public String getUserIdInToken(String token) {
//        return Jwts.parser()
//                .setSigningKey(key)
//                .parseClaimsJws(token)
//                .getBody()
//                .getSubject();
//    }
//}
