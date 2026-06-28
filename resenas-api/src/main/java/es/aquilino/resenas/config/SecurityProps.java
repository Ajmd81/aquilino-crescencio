package es.aquilino.resenas.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

@Component
@ConfigurationProperties(prefix = "app.security")
public class SecurityProps {

    /** Usuario administrador (para moderar reseñas). */
    private String adminUsername = "admin";

    /** Hash BCrypt de la contraseña del administrador. */
    private String adminPasswordHash;

    /** Secreto HMAC para firmar el JWT (mínimo 32 bytes). */
    private String jwtSecret;

    /** Validez del token en segundos. */
    private long jwtTtlSeconds = 3600;

    public String getAdminUsername() {
        return adminUsername;
    }

    public void setAdminUsername(String adminUsername) {
        this.adminUsername = adminUsername;
    }

    public String getAdminPasswordHash() {
        return adminPasswordHash;
    }

    public void setAdminPasswordHash(String adminPasswordHash) {
        this.adminPasswordHash = adminPasswordHash;
    }

    public String getJwtSecret() {
        return jwtSecret;
    }

    public void setJwtSecret(String jwtSecret) {
        this.jwtSecret = jwtSecret;
    }

    public long getJwtTtlSeconds() {
        return jwtTtlSeconds;
    }

    public void setJwtTtlSeconds(long jwtTtlSeconds) {
        this.jwtTtlSeconds = jwtTtlSeconds;
    }
}
