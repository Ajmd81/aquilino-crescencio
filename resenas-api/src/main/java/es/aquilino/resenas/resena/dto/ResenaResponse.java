package es.aquilino.resenas.resena.dto;

import es.aquilino.resenas.resena.Resena;

import java.time.Instant;
import java.util.UUID;

public record ResenaResponse(
        UUID id,
        String obraId,
        String nombre,
        int puntuacion,
        String texto,
        Instant fecha
) {
    public static ResenaResponse from(Resena r) {
        return new ResenaResponse(
                r.getId(),
                r.getObraId(),
                r.getNombre(),
                r.getPuntuacion(),
                r.getTexto(),
                r.getFecha()
        );
    }
}
