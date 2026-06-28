package es.aquilino.resenas.auth;

import es.aquilino.resenas.config.SecurityProps;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.oauth2.jose.jws.MacAlgorithm;
import org.springframework.security.oauth2.jwt.JwsHeader;
import org.springframework.security.oauth2.jwt.JwtClaimsSet;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.JwtEncoderParameters;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class JwtService {

    private final JwtEncoder encoder;
    private final long ttlSeconds;

    public JwtService(JwtEncoder encoder, SecurityProps props) {
        this.encoder = encoder;
        this.ttlSeconds = props.getJwtTtlSeconds();
    }

    public String generar(Authentication auth) {
        Instant now = Instant.now();
        List<String> roles = auth.getAuthorities().stream()
                .map(GrantedAuthority::getAuthority)
                .toList();

        JwtClaimsSet claims = JwtClaimsSet.builder()
                .issuer("resenas-api")
                .issuedAt(now)
                .expiresAt(now.plusSeconds(ttlSeconds))
                .subject(auth.getName())
                .claim("roles", roles)
                .build();

        JwsHeader header = JwsHeader.with(MacAlgorithm.HS256).build();
        return encoder.encode(JwtEncoderParameters.from(header, claims)).getTokenValue();
    }

    public long getTtlSeconds() {
        return ttlSeconds;
    }
}
