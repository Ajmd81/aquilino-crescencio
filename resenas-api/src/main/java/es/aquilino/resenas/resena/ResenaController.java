package es.aquilino.resenas.resena;

import es.aquilino.resenas.resena.dto.ResenaRequest;
import es.aquilino.resenas.resena.dto.ResenaResponse;
import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.util.UriComponentsBuilder;

import java.net.URI;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/resenas")
public class ResenaController {

    private final ResenaService service;

    public ResenaController(ResenaService service) {
        this.service = service;
    }

    /** Lista las reseñas. Filtro opcional por obra: /api/resenas?obra=pastora */
    @GetMapping
    public List<ResenaResponse> listar(@RequestParam(name = "obra", required = false) String obra) {
        return service.listar(obra);
    }

    /** Crea una reseña. Devuelve 201 con la reseña creada. */
    @PostMapping
    public ResponseEntity<ResenaResponse> crear(@Valid @RequestBody ResenaRequest req,
                                                UriComponentsBuilder uri) {
        ResenaResponse creada = service.crear(req);
        URI location = uri.path("/api/resenas/{id}").buildAndExpand(creada.id()).toUri();
        return ResponseEntity.created(location).body(creada);
    }

    /**
     * Borrado para moderación.
     * Protegido: requiere un JWT con rol ADMIN (ver SecurityConfig).
     * Authorization: Bearer &lt;token obtenido en POST /api/auth/login&gt;
     */
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> eliminar(@PathVariable UUID id) {
        service.eliminar(id);
        return ResponseEntity.noContent().build();
    }
}
