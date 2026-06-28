package es.aquilino.resenas.resena.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record ResenaRequest(

        @NotBlank(message = "Indica la obra")
        @Size(max = 40)
        String obraId,

        @NotBlank(message = "Escribe tu nombre")
        @Size(max = 60, message = "El nombre es demasiado largo")
        String nombre,

        @NotNull(message = "Falta la puntuación")
        @Min(value = 1, message = "Mínimo 1 estrella")
        @Max(value = 5, message = "Máximo 5 estrellas")
        Integer puntuacion,

        @NotBlank(message = "Escribe tu reseña")
        @Size(min = 4, max = 600, message = "La reseña debe tener entre 4 y 600 caracteres")
        String texto
) {
}
