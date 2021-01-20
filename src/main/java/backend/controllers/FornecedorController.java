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

import backend.entities.Fornecedor;
import backend.services.FornecedorService;

@RestController
@RequestMapping(value = "/fornecedores")
public class FornecedorController {

	@Autowired
	private FornecedorService servico;

	@GetMapping
	public ResponseEntity<List<Fornecedor>> findAll() {
		List<Fornecedor> lista = servico.findAll();
		return ResponseEntity.ok().body(lista);
	}

	@GetMapping("/{id}")
	public ResponseEntity<Fornecedor> buscar(@PathVariable Integer id) {
		Fornecedor obj = servico.findById(id);
		return ResponseEntity.ok().body(obj);
	}

	@PostMapping
	public ResponseEntity<Fornecedor> save(@RequestBody Fornecedor obj) {
		obj = servico.save(obj);
		URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(obj.getId()).toUri();

		return ResponseEntity.created(uri).body(obj);
	}

	@PutMapping("/{id}")
	public ResponseEntity<Fornecedor> update(@PathVariable Integer id, @RequestBody Fornecedor obj) {
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
