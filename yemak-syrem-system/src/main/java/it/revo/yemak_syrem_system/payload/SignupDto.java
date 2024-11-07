package it.revo.yemak_syrem_system.payload;

public record SignupDto(
        String login,
        String password,
        Integer roleId) {
}
