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

import backend.entities.ItensVenda;
import backend.services.ItensVendaService;

@RestController
@RequestMapping(value = "/itensvendas")
public class ItensVendaController {

	@Autowired
	private ItensVendaService servico;

	@GetMapping
	public ResponseEntity<List<ItensVenda>> findAll() {
		List<ItensVenda> lista = servico.findAll();
		return ResponseEntity.ok().body(lista);
	}

	@GetMapping("/{id}")
	public ResponseEntity<ItensVenda> buscar(@PathVariable Integer id) {
		ItensVenda obj = servico.findById(id);
		return ResponseEntity.ok().body(obj);
	}

	@PostMapping
	public ResponseEntity<ItensVenda> save(@RequestBody ItensVenda obj) {
		obj = servico.save(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();

		return ResponseEntity.created(uri).body(obj);
	}

	@PutMapping("/{id}")
	public ResponseEntity<ItensVenda> update(@PathVariable Integer id, @RequestBody ItensVenda obj) {
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
