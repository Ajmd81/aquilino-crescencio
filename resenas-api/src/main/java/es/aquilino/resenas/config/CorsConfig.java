package es.aquilino.resenas.config;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.ArrayList;
import java.util.List;

@Configuration
public class CorsConfig {

    @Bean
    @ConfigurationProperties(prefix = "app.cors")
    public CorsProps corsProps() {
        return new CorsProps();
    }

    @Bean
    public CorsConfigurationSource corsConfigurationSource(CorsProps props) {
        CorsConfiguration cfg = new CorsConfiguration();
        // patrones: admite comodines como https://*.vercel.app (previews de Vercel)
        cfg.setAllowedOriginPatterns(props.getAllowedOrigins());
        cfg.setAllowedMethods(List.of("GET", "POST", "DELETE", "OPTIONS"));
        cfg.setAllowedHeaders(List.of("*"));
        cfg.setMaxAge(3600L);

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/api/**", cfg);
        return source;
    }

    /** Lee app.cors.allowed-origins (lista separada por comas en la variable de entorno). */
    public static class CorsProps {
        private List<String> allowedOrigins = new ArrayList<>();

        public List<String> getAllowedOrigins() {
            return allowedOrigins;
        }

        public void setAllowedOrigins(List<String> allowedOrigins) {
            this.allowedOrigins = allowedOrigins;
        }
    }
}
