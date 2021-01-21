package backend.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import backend.entities.Categoria;
import backend.repositories.CategoriaRepository;

@Service
public class CategoriaService {
	@Autowired
	private CategoriaRepository repositorio;

	public List<Categoria> findAll() {
		return repositorio.findAll();
	}

	public Categoria findById(Integer id) {
		Optional<Categoria> obj = repositorio.findById(id);
		return obj.orElseThrow(null);
	}

	public Categoria save(Categoria obj) {
		obj.setId(null);
		return repositorio.save(obj);
	}

	public Categoria update(Categoria obj) {
		Categoria novoObj = repositorio.getOne(obj.getId());
		novoObj.setNome(obj.getNome());
		novoObj.setAtivo(obj.getAtivo());
		return repositorio.save(novoObj);
	}

	public void deleteById(Integer id) {
		repositorio.deleteById(id);
	}

}
