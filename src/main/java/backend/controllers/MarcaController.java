package backend.controllers;

import java.net.URI;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import backend.entities.Marca;
import backend.services.MarcaService;

@RestController
@RequestMapping(value = "/marcas")
public class MarcaController {

	@Autowired
	private MarcaService servico;

	@GetMapping
	public ResponseEntity<List<Marca>> findAll() {
		List<Marca> lista = servico.findAll();
		return ResponseEntity.ok().body(lista);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Marca> buscar(@PathVariable Integer id) {
		Marca obj = servico.findById(id);
		return ResponseEntity.ok().body(obj);
	}

	@PostMapping
	public ResponseEntity<Marca> save(@RequestBody Marca obj) {
		obj = servico.save(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();

		return ResponseEntity.created(uri).body(obj);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Marca> update(@PathVariable Integer id, @RequestBody Marca obj) {
		obj.setId(id);
		obj = servico.update(obj);
		return ResponseEntity.ok().body(obj);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteById(@PathVariable Integer id) {
		servico.deleteById(id);
		return ResponseEntity.noContent().build();
	}

}
