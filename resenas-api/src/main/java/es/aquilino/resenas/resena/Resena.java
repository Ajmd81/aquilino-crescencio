package es.aquilino.resenas.resena;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UuidGenerator;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(name = "resenas")
public class Resena {

    @Id
    @UuidGenerator
    private UUID id;

    @Column(name = "obra_id", nullable = false, length = 40)
    private String obraId;

    @Column(nullable = false, length = 60)
    private String nombre;

    @Column(nullable = false)
    private short puntuacion;

    @Column(nullable = false, length = 600)
    private String texto;

    @CreationTimestamp
    @Column(nullable = false, updatable = false)
    private Instant fecha;

    protected Resena() {
        // requerido por JPA
    }

    public Resena(String obraId, String nombre, short puntuacion, String texto) {
        this.obraId = obraId;
        this.nombre = nombre;
        this.puntuacion = puntuacion;
        this.texto = texto;
    }

    public UUID getId() {
        return id;
    }

    public String getObraId() {
        return obraId;
    }

    public String getNombre() {
        return nombre;
    }

    public short getPuntuacion() {
        return puntuacion;
    }

    public String getTexto() {
        return texto;
    }

    public Instant getFecha() {
        return fecha;
    }
}
