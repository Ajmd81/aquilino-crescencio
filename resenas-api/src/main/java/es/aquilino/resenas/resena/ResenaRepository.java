package es.aquilino.resenas.resena;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface ResenaRepository extends JpaRepository<Resena, UUID> {

    List<Resena> findAllByOrderByFechaDesc();

    List<Resena> findByObraIdOrderByFechaDesc(String obraId);
}
