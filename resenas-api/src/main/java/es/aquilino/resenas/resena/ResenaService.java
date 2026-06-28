package es.aquilino.resenas.resena;

import es.aquilino.resenas.resena.dto.ResenaRequest;
import es.aquilino.resenas.resena.dto.ResenaResponse;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
public class ResenaService {

    private final ResenaRepository repo;

    public ResenaService(ResenaRepository repo) {
        this.repo = repo;
    }

    @Transactional(readOnly = true)
    public List<ResenaResponse> listar(String obraId) {
        List<Resena> resenas = (obraId == null || obraId.isBlank())
                ? repo.findAllByOrderByFechaDesc()
                : repo.findByObraIdOrderByFechaDesc(obraId.trim());
        return resenas.stream().map(ResenaResponse::from).toList();
    }

    @Transactional
    public ResenaResponse crear(ResenaRequest req) {
        Resena nueva = new Resena(
                req.obraId().trim(),
                req.nombre().trim(),
                req.puntuacion().shortValue(),
                req.texto().trim()
        );
        return ResenaResponse.from(repo.save(nueva));
    }

    @Transactional
    public void eliminar(UUID id) {
        repo.findById(id).ifPresent(repo::delete);
    }
}
