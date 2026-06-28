package es.aquilino.resenas.auth.dto;

public record TokenResponse(
        String token,
        String tipo,
        long expiraEn
) {
    public static TokenResponse bearer(String token, long expiraEn) {
        return new TokenResponse(token, "Bearer", expiraEn);
    }
}
